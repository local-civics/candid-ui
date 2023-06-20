import * as React from "react";
import { createStyles, Group, Paper, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight, IconPointFilled } from '@tabler/icons-react';
import { SummaryData } from "./data";

const useStyles = createStyles((theme) => ({
  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

/**
 * SummaryGridProps
 */
export type SummaryGridProps = {
  data: SummaryData;
}

/**
 * SummaryGrid
 * @param props
 * @constructor
 */
export function SummaryGrid(props: SummaryGridProps) {
  const { classes } = useStyles();
  const stats = props.data.map((stat) => {
    const DiffIcon = !stat.diff ? IconPointFilled : stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <div>
            <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
              {stat.title}
            </Text>
            <Text fw={700} fz="xl">
              {stat.value}
            </Text>
          </div>
          <ThemeIcon
            color="gray"
            variant="light"
            sx={(theme) => ({ color: !stat.diff ? theme.colors.dark[2] : stat.diff > 0 ? theme.colors.teal[6] : theme.colors.red[6] })}
            size={38}
            radius="md"
          >
            <DiffIcon size="1.8rem" stroke={1.5} />
          </ThemeIcon>
        </Group>
        { !!stat.diff && <Text c="dimmed" fz="sm" mt="md">
          <Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
            {stat.diff}%
          </Text>{' '}
          {stat.diff > 0 ? 'increase' : 'decrease'} compared to last month
        </Text>}

        { !stat.diff && <Text c="dimmed" fz="sm" mt="md">
          { stat.description }
        </Text>}
      </Paper>
    );
  });

  return <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
    {stats}
  </SimpleGrid>;
}
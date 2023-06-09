import * as React from "react";
import {
  Container,
  Title,
  Text,
  Badge,
  Group,
  Card,
  Flex,
  Stack,
  List,
  createStyles,
  rem,
  useMantineTheme,
} from "@mantine/core";

import {
  IconGauge,
  IconWifi,
  IconCookie,
  IconClock,
  IconBookUpload,
  IconStarFilled,
  Icon24Hours,
  IconSpyOff,
  IconShieldLock,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
  card: {
    maxWidth: "22rem",
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },
}));

const FEATURES_DATA = [
  {
    title: "Data protection",
    description: "24% more than in the same month last year, 33% more that two years ago",
    icon: IconShieldLock,
  },
  {
    title: "High performance",
    description: "24% more than in the same month last year, 33% more that two years ago",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description: "13% less compared to last month, new user engagement up by 6%",
    icon: IconSpyOff,
  },
  {
    title: "24/7 Support",
    description: "1994 orders were completed this month, 97% satisfaction rate",
    icon: Icon24Hours,
  },
  {
    title: "No third-party cookies",
    description: "1994 orders were completed this month, 97% satisfaction rate",
    icon: IconCookie,
  },
  {
    title: "100% Online",
    description: "1994 orders were completed this month, 97% satisfaction rate",
    icon: IconWifi,
  },
];

/**
 * TaskOverviewProps
 */
export type TaskOverviewProps = {
  title?: string;
  description?: string;
  estimate?: string;
  tags?: string[];
  topics?: string[];
  rating?: number
  uploadedOn?: string
};

/**
 * TaskOverview
 * @param props
 * @constructor
 */
export function TaskOverview(props: TaskOverviewProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const title = props.title || "Overview";
  const tags = props.tags?.map((t) => {
    return (
      <Badge key={t} size="md" color="dark" radius="xl" variant="dot">
        {t}
      </Badge>
    );
  });
  const features = FEATURES_DATA.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <Flex align="center" gap={5}>
        <feature.icon size={rem(30)} stroke={2} color={theme.colors.dark[4]} />
        <Text fz="lg" fw={500} color={theme.colors.dark[4]}>
          {feature.title}
        </Text>
      </Flex>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container fluid p={25} mx={0} className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      <Container size="sm" px={0} mx={0}>
        {!!props.description && <Text size="md"> {props.description} </Text>}

        {!!props.estimate && (
          <Group mt={20} spacing={5} color="dark.4">
            <IconClock size={18} />
            <Text size="md">You'll need about</Text>
            <Text weight={700} size="md">
              {props.estimate}
            </Text>
          </Group>
        )}
        <Group mt={10} spacing={5} color="dark.4">
          <IconBookUpload size={18} />
          <Text size="md">Uploaded on</Text>
          <Text weight={700} size="md">
            {props.uploadedOn}
          </Text>
        </Group>
        <Group mt={10} spacing={5} color="dark.4">
          <IconStarFilled size={18} />
          <Text size="md">Rated</Text>
          <Text weight={700} size="md">
            {props.rating}
          </Text>
          <Text size="md">out of 5</Text>
        </Group>

        <Stack spacing={20}>
          <Title underline color="dark.5" mt={50} size="sm">
            Topics you'll cover
          </Title>
          <List pl={15}>
            {
              props.topics?.map(t => {
                return <List.Item key={t}>{t}</List.Item>
              })
            }
          </List>
        </Stack>

        <Stack spacing={20}>
          <Title underline color="dark.5" mt={50} size="sm">
            Tags
          </Title>
          <Group spacing={5}>{tags}</Group>
        </Stack>
      </Container>
      <Stack spacing={20}>
        <Title underline color="dark.5" mt={50} size="sm">
          Other features
        </Title>
        <Group spacing={5}>{features}</Group>
      </Stack>
    </Container>
  );
}

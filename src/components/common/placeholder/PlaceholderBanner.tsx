import * as React from "react";
import { Stack, Title, createStyles, Skeleton } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]}`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },
}));

/**
 * PlaceholderBannerProps
 */
export type PlaceholderBannerProps = {
  title: string;
};

/**
 * PlaceholderBanner
 * @param props
 * @constructor
 */
export function PlaceholderBanner(props: PlaceholderBannerProps) {
  const { classes } = useStyles();
  return <Stack w="100%" spacing={20} p={50} className={classes.wrapper}>
    <Title color="dimmed" size={14}>{props.title}</Title>
    <Skeleton animate={false} height={8} radius="xl" />
    <Skeleton animate={false} height={8} mt={6} radius="xl" />
    <Skeleton animate={false} height={8} mt={6} radius="xl" />
    <Skeleton animate={false} height={8} mt={6} radius="xl" />
    <Skeleton animate={false} height={8} mt={6} width="70%" radius="xl" />
  </Stack>
}

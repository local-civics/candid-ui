import { createStyles, rem } from "@mantine/core";

/**
 * useAssignmentStyles
 */
export const useAssignmentStyles = createStyles((theme) => {
  return {
    card: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      height: "max-content",
      width: "20rem",
    },

    section: {
      borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },

    userAvatar: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.blue[7],
    },
  };
});
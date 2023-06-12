import { createStyles } from "@mantine/core";

/**
 * useUserStyles
 */
export const useUserStyles = createStyles((theme) => ({
  userAvatar: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.blue[7],
  },

  userAvatarButton: {
    cursor: "pointer",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[6],
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.blue[7],
    },
  },
}));
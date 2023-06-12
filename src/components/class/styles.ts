import { createStyles } from "@mantine/core";

/**
 * useClassStyles
 */
export const useClassStyles = createStyles((theme) => ({
  userAvatar: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.blue[7],
  },
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: "max-content",
    width: "20rem",
  },
  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },
  selectFileBtnControl: {
    position: 'absolute',
    width: 250,
    left: 'calc(50% - 125px)',
    bottom: -20,
  },
  addStudentsWrapper: {
    position: 'relative',
    marginBottom: 30,
  },
}));
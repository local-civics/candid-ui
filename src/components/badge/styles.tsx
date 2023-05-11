import { createStyles } from "@mantine/core";

export const useBadgeStyles = createStyles((theme) => ({
  badgeButton: {
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[6],
    },
  },

  badgeIcon: {
    width: '100px',
    height: '100px',
    position: "relative",
    overflow: "hidden"
  },

  badgeIconImageContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
  },

  badgeIconImage: {
    margin: "auto",
    width: "40px",
    height: "40px",
    verticalAlign: "middle"
  },

  badgeSyllabusWrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  badgeSyllabusTitle: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  badgeSyllabusSessionItem: {
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },

  badgeSyllabusControl: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));
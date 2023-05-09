import * as React from "react";
import { Group, Box, ThemeIcon, Text, createStyles, getStylesRef } from "@mantine/core";
import { Icon } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme, _params) => {
  const icon = getStylesRef("icon");
  return {
    controlButton: {
      cursor: "pointer",
    },

    badge: {
      pointerEvents: "none",
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
        },
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
        },
      },
    },

    chevron: {
      transition: "transform 200ms ease",
    },

    linkIcon: {
      ref: icon,
    },
  };
});

/**
 * NavbarLinkProps
 */
type NavbarLinkProps = {
  icon: Icon;
  label: string;
  active?: boolean;
  href: string;
  onNavigate?: (next: string) => void;
};

/**
 * NavbarLink
 * @param props
 * @constructor
 */
export function AppLink(props: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <>
      <Group
        className={cx(classes.link, { [classes.linkActive]: !!props.active })}
        onClick={() => props.onNavigate && props.onNavigate(props.label)}
        position="apart"
        spacing={0}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ThemeIcon variant="light" size={30}>
            <props.icon className={classes.linkIcon} size={18} />
          </ThemeIcon>
          <Box ml="md">
            <Text<typeof Link> component={Link} to={props.href || "#"}>
              {props.label}
            </Text>
          </Box>
        </Box>
      </Group>
    </>
  );
}

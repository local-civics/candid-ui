import * as React from "react";
import {
  ActionIcon, AppShell,
  Container, createStyles, Group, Image,
  Text, Title, useMantineTheme
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { useMediaQuery } from "@mantine/hooks";
import { AppHeader, AppHeaderProps } from "./components/core/navigation/AppHeader";
import { AppNavbar, AppNavbarProps } from "./components/core/navigation/AppNavbar";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { AuthLayout, AuthLayoutProps } from "./layouts/AuthLayout";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,

    [theme.fn.largerThan("sm")]: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      paddingRight: 100,
    },
  },

  footerWithMenu: {
    paddingLeft: 350,
  },

  page: {},

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.md,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

/**
 * CandidAppProps
 */
export type CandidAppProps = AuthLayoutProps & AppHeaderProps & AppNavbarProps

/**
 * CandidApp
 * @param props
 * @constructor
 */
export function CandidApp(props: CandidAppProps){
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  const isSmallDevice = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  React.useEffect(() => {
    props.onMenuClick && props.onMenuClick(!isSmallDevice);
  }, [isSmallDevice]);


  return <ModalsProvider>
    <AppShell
      padding="xs"
      header={<AppHeader {...props} onMenuClick={() => props.onMenuClick && props.onMenuClick(!props.isMenuOpen)} />}
      navbar={props.isMenuOpen ? <AppNavbar {...props} /> : undefined}
      footer={
        <footer className={cx(classes.footer, { [classes.footerWithMenu]: !!props.isMenuOpen })}>
          <Container className={classes.inner}>
            <div className={classes.logo}>
              <Group spacing="xs">
                <div style={{ width: 15 }}>
                  <Image fit="contain" src="https://cdn.localcivics.io/brand/l.png" />
                </div>
                <Title color="dimmed" size="h5">
                  Local Civics
                </Title>
              </Group>
              <Text size="xs" color="dimmed" className={classes.description}>
                We connect students to powerful civic learning experiences.
              </Text>
            </div>
            <div className={classes.groups}>
              <div className={classes.wrapper}>
                <Text className={classes.link} component="a" href="https://www.localcivics.io" target="_blank">
                  About
                </Text>
                <Text
                  className={classes.link}
                  component="a"
                  href="https://www.localcivics.io/terms-of-service"
                  target="_blank"
                >
                  Terms
                </Text>
                <Text
                  className={classes.link}
                  component="a"
                  href="https://www.localcivics.io/privacy-policy"
                  target="_blank"
                >
                  Privacy
                </Text>
                <Text
                  className={classes.link}
                  component="a"
                  href="https://localcivics.notion.site/Help-Center-b52300f587b64fc0a61f512686e7626d"
                  target="_blank"
                >
                  Help Center
                </Text>
              </div>
            </div>
          </Container>
          <Container className={classes.afterFooter}>
            <Text color="dimmed" size="sm">
              © {new Date().getFullYear()} Local Civics. All rights reserved.
            </Text>

            <Group spacing={0} className={classes.social} position="right" noWrap>
              <ActionIcon component="a" target="_blank" href="https://www.instagram.com/localcivics/" size="lg">
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                component="a"
                target="_blank"
                href="https://www.linkedin.com/company/localcivics"
                size="lg"
              >
                <IconBrandLinkedin size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon component="a" target="_blank" href="https://www.facebook.com/localcivics/" size="lg">
                <IconBrandFacebook size={18} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Container>
        </footer>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <AuthLayout {...props}/>
    </AppShell>
  </ModalsProvider>
}
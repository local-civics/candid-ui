import * as React from "react";
import { Navbar as MantineNavbar, createStyles, ScrollArea, Title } from "@mantine/core";
import {
  IconHome2,
  IconSectionSign,
  IconBook,
  IconTimelineEvent,
  IconThumbUp,
  IconClipboardList,
  IconFlame,
  IconCookie,
  IconHourglassLow,
  Icon360,
  IconLivePhoto,
  IconOlympics,
  IconGavel,
  IconPalette,
  IconSchool,
  IconRecycle,
  IconHelpSquareRounded,
  IconMoodCheck,
  IconBackpack,
  IconBallpen,
  IconBookmark,
  IconSunrise
} from "@tabler/icons-react";
import { AppLink } from "./AppLink";

const useStyles = createStyles((theme, _params) => {
  return {
    navbar: {
      height: "initial",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    },

    sectionOne: {
      paddingBottom: theme.spacing.sm,
    },

    section: {
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
      borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    },

    sectionTitle: {
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
    },
  };
});

/**
 * AppNavbarProps
 */
export type AppNavbarProps = {
  defaultActiveLinkName?: string;
}

/**
 * AppNavbar
 * @param props
 * @constructor
 */
export function AppNavbar(props: AppNavbarProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = React.useState(props.defaultActiveLinkName);
  const onNavigate = (next: string) => setActive(next);

  return (
    <MantineNavbar width={{ base: 300 }} p="sm" className={classes.navbar}>
      <MantineNavbar.Section component={ScrollArea} grow>
        {/* Navbar Section I - Personalization */}
        <MantineNavbar.Section className={cx(classes.sectionOne)}>
          <AppLink isActive={active === "Home"} icon={IconHome2} href="/" label="Home" onNavigate={onNavigate} />
        </MantineNavbar.Section>

        {/* Navbar Section II - Library */}
        <MantineNavbar.Section className={cx(classes.section)}>
          <AppLink
            isActive={active === "Library"}
            icon={IconBook}
            href="/library"
            label="Library"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Liked content"}
            icon={IconThumbUp}
            href="/library/liked-content"
            label="Liked content"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Assignments"}
            icon={IconClipboardList}
            href="/assignments"
            label="Assignments"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Saved for later"}
            icon={IconBookmark}
            href="/library/saved-for-later"
            label="Saved for later"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "History"}
            icon={IconTimelineEvent}
            href="/library/history"
            label="History"
            onNavigate={onNavigate}
          />
        </MantineNavbar.Section>

        {/* Navbar Section III - Explore */}
        <MantineNavbar.Section className={cx(classes.section)}>
          <Title className={classes.sectionTitle} mb={5} size="medium">
            Explore
          </Title>
          <AppLink
            isActive={active === "Trending"}
            icon={IconFlame}
            href="/feeds/trending"
            label="Trending"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Top Rated"}
            icon={IconMoodCheck}
            href="/feeds/top-rated"
            label="Top Rated"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Under 5min."}
            icon={IconHourglassLow}
            href="/feeds/under-5min"
            label="Under 5min."
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Elementary & Middle School"}
            icon={IconBackpack}
            href="/feeds/elementary-and-middle-school"
            label="Elementary & Middle School"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "High School"}
            icon={IconBallpen}
            href="/feeds/high-school"
            label="High School"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "College & Career"}
            icon={IconSchool}
            href="/feeds/college-and-career"
            label="College & Career"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Civics"}
            icon={IconGavel}
            href="/feeds/civics"
            label="Civics"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Recreation"}
            icon={IconOlympics}
            href="/feeds/recreation"
            label="Recreation"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Arts & Culture"}
            icon={IconPalette}
            href="/feeds/arts-and-culture"
            label="Arts & Culture"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Volunteer"}
            icon={IconRecycle}
            href="/feeds/volunteer"
            label="Volunteer"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "New to you"}
            icon={IconLivePhoto}
            href="/feeds/new-to-you"
            label="New to you"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Live"}
            icon={IconSunrise}
            href="/feeds/live"
            label="Live"
            onNavigate={onNavigate}
          />
        </MantineNavbar.Section>

        {/* Navbar Section IV - Documentation */}
        <MantineNavbar.Section className={cx(classes.section)}>
          <AppLink icon={Icon360} label="Getting started" href="/getting-started" />
          <AppLink icon={IconHelpSquareRounded} label="Help" href="/help" />
          <AppLink icon={IconCookie} label="Privacy Policy" href="/privacy-policy" />
          <AppLink icon={IconSectionSign} label="Terms & Conditions" href="/terms-and-conditions" />
        </MantineNavbar.Section>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

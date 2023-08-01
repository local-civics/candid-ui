import * as React from "react";
import { Navbar as MantineNavbar, createStyles, ScrollArea, Title } from "@mantine/core";
import {
  IconHome2,
  IconSectionSign,
  IconTimelineEvent,
  IconThumbUp,
  IconClipboardList,
  IconFlame,
  IconCookie,
  IconHourglassLow,
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
  IconSunrise,
  IconBriefcase, IconChalkboard, IconBuildingCommunity
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
          <AppLink
            isActive={active === "Organizations"}
            icon={IconBuildingCommunity}
            href="/organizations"
            label="Organizations"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Classes"}
            icon={IconChalkboard}
            href="/classes"
            label="Classes"
            onNavigate={onNavigate}
          />
        </MantineNavbar.Section>

        {/* Navbar Section II - Library */}
        <MantineNavbar.Section className={cx(classes.section)}>
          <Title className={classes.sectionTitle} mb={5} size="medium">
            Library
          </Title>
          <AppLink
            isActive={active === "Assignments"}
            icon={IconClipboardList}
            href="/assignments"
            label="Assignments"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Liked content"}
            icon={IconThumbUp}
            href="/my/liked-content"
            label="Liked content"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Saved for later"}
            icon={IconBookmark}
            href="/my/saved-for-later"
            label="Saved for later"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "History"}
            icon={IconTimelineEvent}
            href="/my/history"
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
            isActive={active === "New To You"}
            icon={IconLivePhoto}
            href="/feeds/new-to-you"
            label="New To You"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Under 15min."}
            icon={IconHourglassLow}
            href="/feeds/under-15min"
            label="Under 15min."
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
            isActive={active === "College"}
            icon={IconSchool}
            href="/feeds/college"
            label="College"
            onNavigate={onNavigate}
          />
          <AppLink
            isActive={active === "Career"}
            icon={IconBriefcase}
            href="/feeds/career"
            label="Career"
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
            isActive={active === "Live"}
            icon={IconSunrise}
            href="/feeds/live"
            label="Live"
            onNavigate={onNavigate}
          />
        </MantineNavbar.Section>

        {/* Navbar Section IV - Documentation */}
        <MantineNavbar.Section className={cx(classes.section)}>
          <AppLink icon={IconHelpSquareRounded} label="Help" href="https://localcivics.notion.site/Help-Center-b52300f587b64fc0a61f512686e7626d" />
          <AppLink icon={IconCookie} label="Privacy Policy" href="https://www.localcivics.io/privacy-policy" />
          <AppLink icon={IconSectionSign} label="Terms & Conditions" href="https://www.localcivics.io/terms-of-service" />
        </MantineNavbar.Section>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

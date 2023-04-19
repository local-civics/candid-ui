import * as React        from 'react';
import {
    Navbar as MantineNavbar,
    createStyles,
    ScrollArea,
    Title,
    Transition,
}                        from '@mantine/core';
import {
    IconHome2,
    IconSectionSign,
    IconBook,
    IconTimelineEvent,
    IconThumbUp,
    IconLayoutKanban,
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
    IconClockRecord,
} from '@tabler/icons-react';
import {NavbarLink} from "../NavbarLink/NavbarLink";

const useStyles = createStyles((theme, _params) => {
    return {
        navbar: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        },

        sectionOne: {
            paddingBottom: theme.spacing.sm,
        },

        section: {
            paddingTop: theme.spacing.sm,
            paddingBottom: theme.spacing.sm,
            borderTop: `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,
        },

        sectionTitle: {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        },

        sectionHidden: {
            // Media query with value from theme
            [`@media (max-width: ${theme.breakpoints.sm})`]: {
                display: 'none',
            },
        },
    }
});

/**
 * NavbarProps
 */
export interface NavbarProps {
    defaultActive?: string
    loading?: boolean
    menu: boolean
}

export function Navbar(props: NavbarProps) {
    const { classes, cx } = useStyles();
    const [active, setActive] = React.useState(props.defaultActive || "Home")
    const onNavigate = (next: string) => setActive(next)

    return <Transition mounted={props.menu} transition="slide-right" duration={100} timingFunction="ease">
        {() => <MantineNavbar width={{ base: 300 }} p="sm" className={classes.navbar}>
            <MantineNavbar.Section component={ScrollArea} grow className={cx({[classes.sectionHidden]: !props.menu})}>
                {/* Navbar Section I - Personalization */}
                <MantineNavbar.Section className={cx(classes.sectionOne)}>
                    <NavbarLink
                        active={active === "Home"}
                        icon={IconHome2}
                        href="/home"
                        label="Home"
                        onNavigate={onNavigate}
                    />
                </MantineNavbar.Section>

                {/* Navbar Section II - Library */}
                <MantineNavbar.Section className={cx(classes.section)}>
                    <NavbarLink
                        active={active === "Library"}
                        icon={IconBook}
                        href="/library"
                        label="Library"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Liked content"}
                        icon={IconThumbUp}
                        href="/library/liked-content"
                        label="Liked content"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Assignments"}
                        icon={IconLayoutKanban}
                        href="/library/assignments"
                        label="Assignments"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Saved for later"}
                        icon={IconClockRecord}
                        href="/library/saved-for-later"
                        label="Saved for later"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "History"}
                        icon={IconTimelineEvent}
                        href="/library/history"
                        label="History"
                        onNavigate={onNavigate}
                    />
                </MantineNavbar.Section>

                {/* Navbar Section III - Explore */}
                <MantineNavbar.Section className={cx(classes.section)}>
                    <Title className={classes.sectionTitle} mb={5} size="medium">Explore</Title>
                    <NavbarLink
                        active={active === "Trending"}
                        icon={IconFlame}
                        href="/feeds/trending"
                        label="Trending"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Top Rated"}
                        icon={IconMoodCheck}
                        href="/feeds/top-rated"
                        label="Top Rated"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Under 5min."}
                        icon={IconHourglassLow}
                        href="/feeds/under-5min"
                        label="Under 5min."
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Elementary & Middle School"}
                        icon={IconBackpack}
                        href="/feeds/elementary-and-middle-school"
                        label="Elementary & Middle School"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "High School"}
                        icon={IconBallpen}
                        href="/feeds/high-school"
                        label="High School"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "College & Career"}
                        icon={IconSchool}
                        href="/feeds/college-and-career"
                        label="College & Career"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Civics"}
                        icon={IconGavel}
                        href="/feeds/civics"
                        label="Civics"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Recreation"}
                        icon={IconOlympics}
                        href="/feeds/recreation"
                        label="Recreation"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Arts & Culture"}
                        icon={IconPalette}
                        href="/feeds/arts-and-culture"
                        label="Arts & Culture"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Volunteer"}
                        icon={IconRecycle}
                        href="/feeds/volunteer"
                        label="Volunteer"
                        onNavigate={onNavigate}
                    />
                    <NavbarLink
                        active={active === "Live"}
                        icon={IconLivePhoto}
                        href="/feeds/live"
                        label="Live"
                        onNavigate={onNavigate}
                    />
                </MantineNavbar.Section>

                {/* Navbar Section IV - Documentation */}
                <MantineNavbar.Section className={cx(classes.section)}>
                    <NavbarLink icon={Icon360} label="Getting started" href="/getting-started"/>
                    <NavbarLink icon={IconHelpSquareRounded} label="Help" href="/help"/>
                    <NavbarLink icon={IconCookie} label="Privacy Policy" href="/privacy-policy"/>
                    <NavbarLink icon={IconSectionSign} label="Terms & Conditions" href="/terms-and-conditions"/>
                </MantineNavbar.Section>
            </MantineNavbar.Section>
    </MantineNavbar>}
  </Transition>;
}
import * as React from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Container,
  Tabs,
  Stack,
  Button,
  Title,
  Text,
  Group,
  Popover,
  Input,
  CopyButton,
  ActionIcon,
  createStyles,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { PostFAQ } from "../../../components/post/PostFAQ";
import { PostOverview, PostOverviewProps } from "../../../components/post/PostOverview";
import { PostSyllabus, PostSyllabusProps } from "../../../components/post/PostSyllabus";
import { compactNumber } from "../../../utils/numbers";
import { PostDots } from "../../../components/post/PostDots";
import {
  IconTargetArrow,
  IconShare3,
  IconThumbUp,
  IconBookmark,
  IconThumbUpFilled,
  IconBookmarkOff,
  IconCopy,
  IconBrandGoogle,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandReddit,
  IconBrandLinkedin,
  IconAt,
  IconTransitionRight,
  IconLetterC,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => {
  return {
    root: {
      marginTop: "-1rem",
      marginLeft: "-1rem",
      maxWidth: "initial",
    },
    inner: {
      display: "flex",
      position: "relative",
      justifyContent: "space-between",

      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
      },
    },

    dots: {
      position: "absolute",
      color: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],

      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },

    content: {
      zIndex: 1,
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
      width: "100%",
      overflowX: "hidden",

      [theme.fn.smallerThan("md")]: {
        marginRight: 0,
      },
    },

    title: {
      color: theme.white,
      textAlign: "center",
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      lineHeight: 1.05,
      maxWidth: rem(500),
      fontSize: rem(48),
    },

    control: {
      paddingLeft: rem(50),
      paddingRight: rem(50),
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(22),

      [theme.fn.smallerThan("md")]: {
        width: "100%",
      },
    },
  };
});

const FAQ_QUESTIONS = [
  {
    control: "When can I start this badge?",
    panel: "",
  },
  {
    control: "Can I earn class credit for this badge?",
    panel: "",
  },
  {
    control: "How do I assign a badge?",
    panel: "",
  },
  {
    control: "How do I submit a badge?",
    panel: "",
  },
  {
    control: "Can I try a badge for free?",
    panel: "",
  },
  {
    control: "Who can I contact if I have another question?",
    panel: "",
  },
];

const SHARE_LINKS = [
  {
    title: "Assign",
    icon: IconTransitionRight,
    onClick: (props: BadgePageProps) => props.onAssign && props.onAssign(),
  },
  {
    title: "Google",
    icon: IconBrandGoogle,
    href: "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fclassroom.google.com&passive=true",
  },
  {
    title: "Clever",
    icon: IconLetterC,
    href: "https://clever.com/login",
  },
  {
    title: "WhatsApp",
    icon: IconBrandWhatsapp,
    href: (props: BadgePageProps) => `https://api.whatsapp.com/send/?text=${encodeURIComponent(props.href)}`,
  },
  {
    title: "Facebook",
    icon: IconBrandFacebook,
    href: "https://www.facebook.com/login",
  },
  {
    title: "Twitter",
    icon: IconBrandTwitter,
    href: "https://twitter.com/i/flow/login",
  },
  {
    title: "Email",
    icon: IconAt,
    href: (props: BadgePageProps) => `mailto:?body=${encodeURIComponent(props.href)}`,
  },
  {
    title: "Reddit",
    icon: IconBrandReddit,
    href: (props: BadgePageProps) => `https://www.reddit.com/submit?url=${encodeURIComponent(props.href)}`,
  },
  {
    title: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/checkpoint/lg/login",
  },
];

/**
 * BadgePageProps
 */
export type BadgePageProps = PostOverviewProps &
  PostSyllabusProps & {
    title: string;
    href: string;
    liked?: boolean;
    saved?: boolean;
    likes?: number;
    onStart?: () => void;
    onLike?: () => void;
    onSave?: () => void;
    onAssign?: () => void;
    onCopy?: () => void;
    onShare?: (via: string) => void;
  };

/**
 * BadgePage
 * @param props
 * @constructor
 */
export function BadgePage(props: BadgePageProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const LikeIcon = !props.liked ? IconThumbUp : IconThumbUpFilled;
  const SaveIcon = !props.saved ? IconBookmark : IconBookmarkOff;
  const likeLabel = !props.liked ? "Like" : "Liked by you";
  const saveLabel = !props.saved ? "Save" : "Saved for later";
  const likes = props.likes || 0;
  const shareLinks = SHARE_LINKS.map((l) => {
    return (
      <Carousel.Slide py={6} size={20}>
        <Stack w="3.5rem" align="center" spacing={10}>
          {!!l.href && (
            <ActionIcon<typeof Link>
              component={Link}
              to={!l.href ? "#" : typeof l.href === "string" ? l.href : l.href(props)}
              target="_blank"
              onClick={() => props.onShare && props.onShare(l.title)}
              rel="noopener noreferrer"
              size="xl"
              variant="light"
              radius="xl"
            >
              <l.icon size="1rem" />
            </ActionIcon>
          )}
          {!!l.onClick && (
            <ActionIcon
              onClick={() => {
                l.onClick(props);
              }}
              size="xl"
              variant="light"
              radius="xl"
            >
              <l.icon size="1rem" />
            </ActionIcon>
          )}
          <Text color="dark.4" size="xs">
            {l.title}
          </Text>
        </Stack>
      </Carousel.Slide>
    );
  });
  return (
    <Container className={classes.root} fluid size="lg" px={0} pb="xl">
      <Stack
        pl={0}
        pr={5}
        pb={5}
        sx={(theme) => ({
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: theme.fn.gradient({ from: "blue.9", to: "blue.5", deg: 20 }),
          color: theme.white,
        })}
      >
        <PostDots className={classes.dots} style={{ left: 0, top: 0 }} />
        <PostDots className={classes.dots} style={{ left: 60, top: 0 }} />
        <PostDots className={classes.dots} style={{ left: 0, top: 140 }} />
        <PostDots className={classes.dots} style={{ right: 25, top: 60 }} />

        <Stack spacing={25} px={0} className={classes.content} align="center">
          <IconTargetArrow size={24} />

          <Title className={classes.title}>{props.title}</Title>

          <div style={{ width: "max-content" }}>
            <Button
              onClick={props.onStart}
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              size="xl"
              className={classes.control}
              mt={10}
            >
              Get started
            </Button>
          </div>
        </Stack>

        <Stack ml="auto" mb={5} mr={5}>
          {likes > 1 && (
            <Group ml="auto" pr={5} spacing={2} color="white">
              <Text size="sm">Liked by</Text>
              <Text size="sm" weight={700}>
                {compactNumber(likes)}+
              </Text>
              <Text size="sm">people</Text>
            </Group>
          )}
          <Button.Group>
            <Button radius="lg" size="xs" leftIcon={<LikeIcon size="1rem" />} variant="filled" onClick={props.onLike}>
              {likeLabel}
            </Button>
            <Popover position="bottom-end" width={props.href.length * 8} withArrow withinPortal shadow="md">
              <Popover.Target>
                <Button size="xs" leftIcon={<IconShare3 size="1rem" />} variant="filled">
                  Share
                </Button>
              </Popover.Target>
              <Popover.Dropdown w="25rem !important">
                <Stack px={5} mx={0} spacing={15}>
                  <Text weight={700} size="sm" color="dark.4" mt={5}>
                    Share
                  </Text>
                  <Carousel
                    pl="2rem"
                    pr={0}
                    slideGap="xs"
                    align="start"
                    slidesToScroll={mobile ? 2 : 4}
                    styles={{
                      controls: {
                        paddingLeft: 0,
                        paddingRight: 0,
                      },
                      indicators: {
                        bottom: "-0.5rem",
                      },
                      indicator: {
                        backgroundColor: theme.colors.gray[6],
                        width: rem(12),
                        height: rem(4),
                        transition: "width 250ms ease",

                        "&[data-active]": {
                          width: rem(40),
                        },
                      },
                    }}
                  >
                    {shareLinks}
                  </Carousel>
                  <Group grow>
                    <Input
                      disabled
                      maw="initial"
                      value={props.href}
                      icon={<IconCopy size="1rem" />}
                      placeholder="Uh, something is not right"
                    />
                    <CopyButton value={props.href}>
                      {({ copied, copy }) => (
                        <Button
                          color={copied ? "teal" : "blue"}
                          onClick={() => {
                            copy();
                            props.onCopy && props.onCopy();
                          }}
                        >
                          {copied ? "Copied" : "Copy"}
                        </Button>
                      )}
                    </CopyButton>
                  </Group>
                </Stack>
              </Popover.Dropdown>
            </Popover>
            <Button radius="lg" size="xs" leftIcon={<SaveIcon size="1rem" />} variant="filled" onClick={props.onSave}>
              {saveLabel}
            </Button>
          </Button.Group>
        </Stack>
      </Stack>

      <Tabs defaultValue="overview">
        <Tabs.List>
          <Tabs.Tab value="overview">
            <Text px={15} py={10}>
              Overview
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="syllabus">
            <Text px={15} py={10}>
              Syllabus
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="faq">
            <Text px={15} py={10}>
              FAQ
            </Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview" pt="xs">
          <PostOverview {...props} />
        </Tabs.Panel>

        <Tabs.Panel value="syllabus" pt="xs">
          <PostSyllabus {...props} />
        </Tabs.Panel>

        <Tabs.Panel value="faq" pt="xs">
          <PostFAQ questions={FAQ_QUESTIONS} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

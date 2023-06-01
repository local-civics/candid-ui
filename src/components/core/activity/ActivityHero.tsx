import * as React from "react";
import { ActivityDots } from "./ActivityDots";
import {
  ActionIcon,
  Button,
  CopyButton,
  createStyles,
  Group,
  Input,
  Popover,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import {
  IconAt,
  IconBookmark,
  IconBookmarkOff,
  IconBrandFacebook,
  IconBrandGoogle, IconBrandLinkedin,
  IconBrandReddit,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconCopy,
  IconLetterC,
  IconShare3,
  IconTargetArrow,
  IconThumbUp,
  IconThumbUpFilled,
  IconTransitionRight
} from "@tabler/icons-react";
import { compactNumber } from "../../../utils/numbers";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => {
  return {
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

const SHARE_LINKS = [
  {
    title: "Assign",
    icon: IconTransitionRight,
    onClick: (props: ActivityHeroProps) => props.onAssign && props.onAssign(),
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
    href: (props: ActivityHeroProps) => `https://api.whatsapp.com/send/?text=${encodeURIComponent(props.href||"#")}`,
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
    href: (props: ActivityHeroProps) => `mailto:?body=${encodeURIComponent(props.href||"#")}`,
  },
  {
    title: "Reddit",
    icon: IconBrandReddit,
    href: (props: ActivityHeroProps) => `https://www.reddit.com/submit?url=${encodeURIComponent(props.href||"#")}`,
  },
  {
    title: "LinkedIn",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/checkpoint/lg/login",
  },
];

/**
 * ActivityHeroProps
 */
export type ActivityHeroProps = {
  title?: string
  href?: string;
  isLiked?: boolean;
  isSaved?: boolean;
  numberOfLikes?: number;
  onStart?: () => void;
  onLike?: () => void;
  onSave?: () => void;
  onAssign?: () => void;
  onCopy?: () => void;
  onShare?: (via: string) => void;
}

/**
 * ActivityHero
 * @param props
 * @constructor
 */
export function ActivityHero(props: ActivityHeroProps){
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const LikeIcon = !props.isLiked ? IconThumbUp : IconThumbUpFilled;
  const SaveIcon = !props.isSaved ? IconBookmark : IconBookmarkOff;
  const likeLabel = !props.isLiked ? "Like" : "Liked by you";
  const saveLabel = !props.isSaved ? "Save" : "Saved for later";
  const likes = props.numberOfLikes || 0;
  const shareLinks = SHARE_LINKS.map((l) => {
    return (
      <Carousel.Slide key={l.title} py={6} size={20}>
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
  return <Stack
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
    <ActivityDots className={classes.dots} style={{ left: 0, top: 0 }} />
    <ActivityDots className={classes.dots} style={{ left: 60, top: 0 }} />
    <ActivityDots className={classes.dots} style={{ left: 0, top: 140 }} />
    <ActivityDots className={classes.dots} style={{ right: 25, top: 60 }} />
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
        <Popover position="bottom-end" width={(props.href?.length || 0) * 8} withArrow withinPortal shadow="md">
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
                <CopyButton value={props.href||"#"}>
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
}
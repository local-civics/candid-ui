import * as React from "react";
import {
  Container,
  Tabs,
  Text,
  createStyles,
} from "@mantine/core";
import { PostFAQ } from "../../components/core/post/PostFAQ";
import { PostOverview, PostOverviewProps } from "../../components/core/post/PostOverview";
import { PostHero, PostHeroProps } from "../../components/core/post/PostHero";
import { BadgeSyllabus, BadgeSyllabusProps } from "../../components/badge/BadgeSyllabus";

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

/**
 * BadgePageProps
 */
export type BadgePageProps = PostOverviewProps & PostHeroProps & BadgeSyllabusProps;

/**
 * BadgePage
 * @param props
 * @constructor
 */
export function BadgePage(props: BadgePageProps) {
  const { classes } = useStyles();
  return (
    <Container className={classes.root} fluid size="lg" px={0} pb="xl">
      <PostHero {...props} />
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
          <BadgeSyllabus {...props} />
        </Tabs.Panel>

        <Tabs.Panel value="faq" pt="xs">
          <PostFAQ questions={FAQ_QUESTIONS} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

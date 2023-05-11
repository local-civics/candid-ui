import * as React from "react";
import {
  Container,
  Tabs,
  Text,
  createStyles,
} from "@mantine/core";
import { PostFAQ } from "../../components/core/post/PostFAQ";
import { PostOverview, PostOverviewProps } from "../../components/core/post/PostOverview";
import { PostPreview, PostPreviewProps } from "../../components/core/post/PostPreview";
import { PostHero, PostHeroProps } from "../../components/core/post/PostHero";

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
    control: "When can I start this lesson?",
    panel: "",
  },
  {
    control: "Can I earn class credit for this lesson?",
    panel: "",
  },
  {
    control: "How do I assign a lesson?",
    panel: "",
  },
  {
    control: "Will my responses be auto-saved?",
    panel: "",
  },
  {
    control: "Can I try a lesson for free?",
    panel: "",
  },
  {
    control: "Can I download a lesson offline?",
    panel: "",
  },
  {
    control: "Who can I contact if I have another question?",
    panel: "",
  },
];

/**
 * LessonPageProps
 */
export type LessonPageProps = PostOverviewProps & PostPreviewProps & PostHeroProps;

/**
 * LessonPage
 * @param props
 * @constructor
 */
export function LessonPage(props: LessonPageProps) {
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
          <Tabs.Tab value="preview">
            <Text px={15} py={10}>
              Preview
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

        <Tabs.Panel value="preview" pt="xs">
          <PostPreview {...props} />
        </Tabs.Panel>

        <Tabs.Panel value="faq" pt="xs">
          <PostFAQ questions={FAQ_QUESTIONS} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

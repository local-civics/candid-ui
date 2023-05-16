import * as React from "react";
import {
  Container,
  Tabs,
  Text,
  createStyles,
} from "@mantine/core";
import { PostFAQ } from "../../components/core/post/PostFAQ";
import { PostOverview } from "../../components/core/post/PostOverview";
import { PostHero } from "../../components/core/post/PostHero";
import { BadgeSyllabus } from "../../components/badge/BadgeSyllabus";
import { BadgeData, BadgeSyllabusItemData } from "../../components/badge/data";

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
    panel: "Whenever you are ready to begin the badge you may do so. You can also stop at any time and continue later.",
  },
  {
    control: "Can I earn class credit for this badge?",
    panel: "Talk with your teacher about whether or not you can apply this badge for class credit.",
  },
  {
    control: "How do I assign a badge?",
    panel: "Assigning a badge is as simple as clicking share, then assign. From there follow the prompts to fill out the details of your assignment.",
  },
  {
    control: "How do I submit a badge?",
    panel: "Once you have completed all the lessons in the badge, click the submit button at the top of this page.",
  },
  {
    control: "Can I try a badge for free?",
    panel: "Some badges may be tried for free while others require an individual or school license.",
  },
  {
    control: "Who can I contact if I have another question?",
    panel: "Please contact support@localcivics.io if you have any additional questions.",
  },
];

/**
 * BadgePageProps
 */
export type BadgePageProps = BadgeData & {
  onStart?: () => void;
  onLike?: () => void;
  onSave?: () => void;
  onAssign?: () => void;
  onCopy?: () => void;
  onShare?: (via: string) => void;
  onStartSyllabusItem?: (item: BadgeSyllabusItemData) => void;
};

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
          <PostOverview
            overviewDescription={props.description}
            overviewEstimate={props.estimate}
            overviewTags={props.tags}
          />
        </Tabs.Panel>

        <Tabs.Panel value="syllabus" pt="xs">
          <BadgeSyllabus
            title={props.syllabus?.title}
            items={props.syllabus?.items || []}
            onStartSyllabusItem={props.onStartSyllabusItem}
          />
        </Tabs.Panel>

        <Tabs.Panel value="faq" pt="xs">
          <PostFAQ questions={FAQ_QUESTIONS} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

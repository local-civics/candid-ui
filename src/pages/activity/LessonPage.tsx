import * as React from "react";
import {
  Container,
  Tabs,
  Text,
  createStyles,
} from "@mantine/core";
import { ActivityFAQ } from "../../components/core/activity/ActivityFAQ";
import { ActivityOverview } from "../../components/core/activity/ActivityOverview";
import { ActivityPreview } from "../../components/core/activity/ActivityPreview";
import { ActivityHero } from "../../components/core/activity/ActivityHero";
import { LessonData } from "../../components/lesson/data";
import { LessonLearningForm } from "../../components/lesson/LessonLearningForm";
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
    panel:
      "Whenever you are ready to begin the lesson you may do so. You can also stop at any time and continue later.",
  },
  {
    control: "Can I earn class credit for this lesson?",
    panel: "Talk with your teacher about whether or not you can apply this lesson for class credit.",
  },
  {
    control: "How do I assign a lesson?",
    panel:
      "Assigning a lesson is as simple as clicking share, then assign. From there follow the prompts to fill out the details of your assignment.",
  },
  {
    control: "Will my responses be auto-saved?",
    panel:
      "A draft of your responses will be auto-saved every 30 seconds, and if you need to save your responses more frequently you may manually save at any time.",
  },
  {
    control: "Can I try a lesson for free?",
    panel: "Some lessons may be tried for free while others require an individual or school license.",
  },
  {
    control: "Who can I contact if I have another question?",
    panel: "Please contact support@localcivics.io if you have any additional questions.",
  },
];

/**
 * LessonPageProps
 */
export type LessonPageProps = LessonData & {
  onStart?: () => void;
  onLike?: () => void;
  onSave?: () => void;
  onAssign?: () => void;
  onCopy?: () => void;
  onShare?: (via: string) => void;
};

/**
 * LessonPage
 * @param props
 * @constructor
 */
export function LessonPage(props: LessonPageProps) {
  const { classes } = useStyles();
  return (
    <Container className={classes.root} fluid size="lg" px={0} pb="xl">
      <ActivityHero {...props} />
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
          <ActivityOverview {...props} title="Overview" />
        </Tabs.Panel>

        <Tabs.Panel value="preview" pt="xs">
          <ActivityPreview
            previewItems={props.preview || []}
            previewItemCount={props.numberOfQuestions || 0}
          />
        </Tabs.Panel>

        <Tabs.Panel value="faq" pt="xs">
          <ActivityFAQ questions={FAQ_QUESTIONS} />
        </Tabs.Panel>
      </Tabs>
    </Container >
  );
}

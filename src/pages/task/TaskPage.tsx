import * as React from "react";
import { Center, Container, createStyles, Loader, Tabs, Text } from "@mantine/core";
import { TaskHero } from "../../components/task/TaskHero";
import { TaskOverview } from "../../components/task/TaskOverview";
import { TaskPreview } from "../../components/task/TaskPreview";
import { TaskFAQ } from "../../components/task/TaskFAQ";
import { TaskModel } from "../../models/task";
import { TaskSyllabus } from "../../components/task/TaskSyllabus";

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

const LESSON_FAQ_QUESTIONS = [
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

const BADGE_FAQ_QUESTIONS = [
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
 * TaskPageProps
 */
export type TaskPageProps = TaskModel & {
  isLoading?: boolean
  onLike?: (task: TaskModel) => void;
  onSave?: (task: TaskModel) => void;
  onAssign?: (task: TaskModel) => void;
}

/**
 * TaskPage
 * @param props
 * @constructor
 */
export function TaskPage(props: TaskPageProps) {
  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

  if(props.group === "Badges"){
    return <BadgePage {...props}/>
  }

  return <LessonPage {...props}/>
}

function LessonPage(props: TaskPageProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root} fluid size="lg" px={0} pb="xl">
      <TaskHero {...props}
                onAssign={() => props.onAssign && props.onAssign(props)}
                onSave={() => props.onSave && props.onSave(props)}
                onLike={() => props.onLike && props.onLike(props)}
      />
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
          <TaskOverview {...props} title="Overview" />
        </Tabs.Panel>

        <Tabs.Panel value="preview" pt="xs">
          <TaskPreview
            previewItems={props.preview || []}
            previewItemCount={props.numberOfQuestions || 0}
          />
        </Tabs.Panel>

        <Tabs.Panel value="faq" pt="xs">
          <TaskFAQ questions={LESSON_FAQ_QUESTIONS} />
        </Tabs.Panel>
      </Tabs>
    </Container >
  );
}

function BadgePage(props: TaskPageProps) {
  const { classes } = useStyles();
  return (
    <Container className={classes.root} fluid size="lg" px={0} pb="xl">
      <TaskHero {...props}
                onAssign={() => props.onAssign && props.onAssign(props)}
                onSave={() => props.onSave && props.onSave(props)}
                onLike={() => props.onLike && props.onLike(props)}
      />
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
          <TaskOverview {...props} title="Overview" />
        </Tabs.Panel>

        <Tabs.Panel value="syllabus" pt="xs">
          <TaskSyllabus
            title={props.syllabus?.title}
            items={props.syllabus?.items}
          />
        </Tabs.Panel>

        <Tabs.Panel value="faq" pt="xs">
          <TaskFAQ questions={BADGE_FAQ_QUESTIONS} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
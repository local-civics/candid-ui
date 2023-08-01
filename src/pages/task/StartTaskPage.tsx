import * as React from "react";
import { TaskModel, TaskFormatItemModel, TaskAnswerModel, SyllabusItemModel } from "../../models/task";
import {
  Button, Center,
  createStyles, Loader, Paper, Stack,
  Rating, List, Text, ScrollArea,
  Title, Container, SimpleGrid, Image, TextInput, Group, Flex
} from "@mantine/core";
import { TaskFormatItem } from "../../components/task/TaskFormatItem";
import { modals } from "@mantine/modals";
import { TaskIcon } from "../../components/task/TaskIcon";
import { IconChecks, IconPencil, IconPhoto, IconVideo } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { fqdn } from "../../utils/urls";

const useStyles = createStyles(() => {
  return {
    root: {
      marginTop: "-1rem",
      marginLeft: "-1rem",
      maxWidth: "initial",
    },
  };
});

/**
 * TaskPageProps
 */
export type StartTaskPageProps = TaskModel & {
  isLoading?: boolean
  onStartAs?: (task: TaskModel, fullName: string) => void
  onAdvance?: (task: TaskModel, answers: Record<string, TaskAnswerModel | Blob>, reflection?: string, rating?: number) => void
  onSubmit?: (task: TaskModel, answers: Record<string, TaskAnswerModel | Blob>, reflection?: string, rating?: number) => void
}

/**
 * TaskPage
 * @param props
 * @constructor
 */
export function StartTaskPage(props: StartTaskPageProps) {
  const { classes } = useStyles();
  const lesson = useLesson(props)
  const badge = useBadge(props)

  React.useEffect(() => {
    if(props.isLoading || !props.userIsVisiting){
      return
    }

    if(props.userFullName){
      modals.closeAll()
      return
    }

    modals.open({
      title: <Title mb={5} size={16} color="dark.4">Before getting started, we need to know who is working on this task.</Title>,
      centered: true,
      closeOnClickOutside: false,
      closeOnEscape: false,
      withCloseButton: false,
      children: <SetName {...props} />
    })
  }, [props.isLoading, props.userFullName])

  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

  const task = props.group === "Badges" ? badge : lesson;
  return <Container mx="auto" maw={1024} className={classes.root} fluid size="lg" p={40}>
    <Paper shadow="md" withBorder mb={75}>
      <SimpleGrid pb={30} spacing={0} cols={2} sx={{overflowX: "hidden"}} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Stack h={416} pt={30} px={30} spacing={20}>
          {!!props.title && <Title lineClamp={2} sx={{whiteSpace: "pre-wrap"}}>{props.title}</Title>}
          <ScrollArea h={248}>
            {!!props.description && <Text sx={{whiteSpace: "pre-wrap"}}>{props.description}</Text>}
          </ScrollArea>
          {!!props.etc && <Text size={15} weight={600}>Estimated Completion Time: {props.etc}</Text>}
        </Stack>
        {!!props.iconURL && <TaskIcon {...props} size="xl"/>}
        {!props.iconURL && <Image height={475} width="100%" alt={props.title} src={props.imageURL} />}
      </SimpleGrid>
    </Paper>
    <form onSubmit={(e) => {
      e.preventDefault()
      task.onSubmit()
    }}>
      <Stack spacing={75}>
        {task.items}
        <Button mx="auto" size="lg" disabled={!task.canSubmit} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  </Container>
}

function SetName(props: StartTaskPageProps) {
  const [newName, setNewName] = React.useState("");
  return <>
    <TextInput
      label="What's your name?"
      placeholder="Your name"
      data-autofocus
      onChange={(e) => setNewName(e.target.value)}
    />
    <Button fullWidth mt="md"
            disabled={!newName}
            onClick={() => props.onStartAs && props.onStartAs(props, newName)}>
      Start
    </Button>
  </>
}

function useLesson(props: StartTaskPageProps){
  const [answers, setAnswers] = React.useState<Record<string, TaskAnswerModel | Blob>>({})
  const [reflection, setReflection] = React.useState(props.userReflection);
  const [rating, setRating] = React.useState(props.userRating);
  const items = props.items || [];

  let hasAnsweredAllRequiredQuestions = true
  props.items?.forEach(v => {
    if(v.format === "question" && v.itemId){
      hasAnsweredAllRequiredQuestions = hasAnsweredAllRequiredQuestions && v.itemId in answers
      if(hasAnsweredAllRequiredQuestions && answers[v.itemId] instanceof Blob){
        return
      }

      const answer = answers[v.itemId] as TaskAnswerModel
      hasAnsweredAllRequiredQuestions = hasAnsweredAllRequiredQuestions && !!answer.responses?.length && !!answer.responses[0].trim()
    }
  })

  React.useEffect(() => {
    const next: Record<string, TaskAnswerModel> = {}
    props.items?.forEach(v => {
      if(v.format === "question" && v.itemId){
        next[v.itemId] = v.userAnswer || {}
      }
    })
    setAnswers(next)
  }, [JSON.stringify(props.items)])

  React.useEffect(() => setReflection(props.userReflection||""), [props.userReflection])

  React.useEffect(() => setRating(props.userRating), [props.userRating])

  const onReflectionChange = (_: TaskFormatItemModel, responses?: string[]) => {
    const next = !responses?.length ? "" : responses[0]
    setReflection(next);
    props.onAdvance && props.onAdvance(props, answers, next, rating)
  };

  const onRatingChange = (next: number) => {
    setRating(next)
    props.onAdvance && props.onAdvance(props, answers, reflection, next)
  }

  const onAnswerChange = (item: TaskFormatItemModel, responses?: string[], blob?: Blob | null) => {
    if(!item.itemId){
      return
    }

    const nextAnswers: Record<string, TaskAnswerModel | Blob> = {...answers}
    nextAnswers[item.itemId] = blob ? blob : {responses}
    setAnswers(nextAnswers)
    props.onAdvance && props.onAdvance(props, nextAnswers, reflection, rating)
  }

  return {
    canSubmit: hasAnsweredAllRequiredQuestions && (!props.isReflectionRequired || !!reflection?.length),
    items: [...items.map((item: TaskFormatItemModel) => {
        const answer = answers[item.itemId||""]
        return <TaskFormatItem
          key={item.itemId}
          {...item}
          userAnswer={answer instanceof Blob ? {} : answer}
          onResponseChange={onAnswerChange}
        />
    }), <TaskFormatItem
      label={
        <>
          <Text>To earn your impact points for this task, answer either of the following:</Text>
          <List withPadding style={{ listStyleType: "disc" }}>
            <List.Item>How would you explain what you learned here to a friend? OR</List.Item>
            <List.Item>How does what you learned here connect to other school topics or everyday life?</List.Item>
          </List>
        </>
      }
      description="(1-2 sentences)"
      format="question"
      questionType="text"
      disabled={!hasAnsweredAllRequiredQuestions}
      onResponseChange={onReflectionChange}
      required={props.isReflectionRequired}
      paragraph
      userAnswer={reflection ? {responses: [reflection]} : undefined}
    />, <TaskFormatItem
      title="Almost there, rate this task before submitting."
      description="(From poor to amazing)"
    >
      <Rating color="blue" mt={20} readOnly={!hasAnsweredAllRequiredQuestions} onChange={onRatingChange} size="xl" value={rating} />
    </TaskFormatItem>],
    onSubmit: () => props.onSubmit && props.onSubmit(props, answers, reflection, rating),
  }
}

function useBadge(props: StartTaskPageProps){
  const isAllFinished = props.syllabus?.items?.map((item) => !!item.isUserFinished).reduce((a, b) => a && b, false)
  return {
    canSubmit: isAllFinished,
    items: props.syllabus?.items?.map((item: SyllabusItemModel) => {
      return <TaskFormatItem
        key={item.url}
        label={<Flex align="center" sx={{display: "inline-flex"}} gap={5}>
          <IconChecks
            style={{margin: "-1px", flexShrink: 0}}
            size={24}
            strokeWidth={2}
            color={item.isUserFinished ? "green" : "grey"}
          />
          <Title order={4}>{item.title}</Title>
        </Flex>}
        {...item}
      >
        <Stack py={10} spacing={10}>
          <Group spacing={5}>
            {
              !!item.numberOfQuestions && <>
                <IconPencil size={18} />
                <Text size="sm">{item.numberOfQuestions} questions</Text>
              </>
            }
            {!!item.numberOfVideos && (
              <>
                <IconVideo size={18} />
                <Text size="sm">{item.numberOfVideos} videos</Text>
              </>
            )}
            {!!item.numberOfImages && (
              <>
                <IconPhoto size={18} />
                <Text size="sm">{item.numberOfImages} images</Text>
              </>
            )}
          </Group>
          <Flex mt={25} gap={10}>
            <Button<typeof Link>
              component={Link}
              to={fqdn(item.startURL).replace(":start", "/start")}>
              Start session
            </Button>
          </Flex>
        </Stack>
      </TaskFormatItem>
    }),
    onSubmit: () => props.onSubmit && props.onSubmit(props, {}, "", 0),
  }
}
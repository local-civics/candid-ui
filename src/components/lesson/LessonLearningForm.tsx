import * as React from "react";
import { TaskData, FormItemData } from "../../models/task";
import { FormItem } from "./FormItem";
import { Rating, Group, Stack, Text, Paper, Button, Flex, createStyles, ScrollArea, Box, List } from "@mantine/core";

const MIN_REFLECTION_LENGTH = 100;

const useStyles = createStyles((theme) => {
  return {
    paperContainer: {
      width: "75%",
      marginBottom: "6rem",
      marginLeft: "14rem",
      fontFamily: "ProximaNova, Helvetica, Arial, sans-serif",
    },
    formDescription: {
      width: "40%",
    },
    formDescriptionImage: {
      width: "60%",
    },
  };
});

/**
 * LessonLearningFormProps
 */
export type LessonLearningFormProps = TaskData & {
  elapsedTime?: number;
  onHome?: () => void;
  onGoBack?: () => void;
  onSubmit?: (reflection: string, rating?: number) => Promise<any>;
  onSaveDraft?: (items: FormItemData[], reflection: string, rating?: number) => Promise<any>;
};

/**
 * LessonLearningForm
 * @param props
 * @constructor
 */
export function LessonLearningForm(props: LessonLearningFormProps) {
  const { classes } = useStyles();
  const [showExitDialogue, setShowExitDialogue] = React.useState(false);
  const [showSubmitDialogue, setShowSubmitDialogue] = React.useState(false);
  const [isDraft, setIsDraft] = React.useState(false);
  const items = props.items || [];

  const [reflection, setReflection] = React.useState(props.userReflection || "");
  const [rating, setRating] = React.useState(props.userRating);
  let answeredAllRequired = true;
  const canReflect = !!reflection || answeredAllRequired;
  const saveVisibility = isDraft ? 100 : 0;
  const elapsedTime = props?.elapsedTime || 0;
  const timeSpent = props?.userTimeSpent || 0;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(reflection, rating).then((err) => {
        if (!err) {
          setShowSubmitDialogue(true);
          setIsDraft(false);
        }
      });
    }
  };
  const onReflectionChange = (responses?: string[]) => {
    if (!responses || responses.length === 0) {
      setReflection("");
      return;
    }
    setReflection(responses[0]);
    setIsDraft(true);
  };
  const answers: LessonLearningFormProps[] = [];
  const saveDraft = async () => {
    if (!isDraft && elapsedTime <= timeSpent) {
      return;
    }

    return props.onSaveDraft && props.onSaveDraft(answers, reflection, rating).then((e) => !e && setIsDraft(false));
  };
  const canSubmit = answeredAllRequired && reflection.length >= MIN_REFLECTION_LENGTH;
  return (
    <>
      <Paper shadow="md" p="xl" withBorder className={classes.paperContainer}>
        <Flex direction={{ base: "column", sm: "row" }} gap={{ base: "sm", sm: "xl" }}>
          <Text className={classes.formDescription}>
            <div
              onClick={() => {
                if (props.preview && props.onGoBack) {
                  props.onGoBack();
                } else {
                  setShowExitDialogue(true);
                }
              }}
            >
              <Button>Back</Button>
            </div>
            {!!props.title && <h2>{props.title}</h2>}
            {!!props.description && (
              <ScrollArea h={200} type="auto" offsetScrollbars>
                <p>{props.description}</p>
              </ScrollArea>
            )}
            {!!props.etc && <p>Estimated Completion Time: {props.etc}</p>}
          </Text>
          <>
            <img alt={props.title} src={props.imageURL} className={classes.formDescriptionImage} />
          </>
        </Flex>
      </Paper>
      <form onSubmit={onSubmit}>
        {items.map((item: FormItemData) => {
          return <FormItem key={item.itemId} {...item} minText={0} disabled={!!props.preview} />;
        })}
        <FormItem
          displayNameNode={
            <>
              <p>To earn your impact points for this task, answer either of the following:</p>
              <List style={{ listStyleType: "disc" }}>
                <Text size="sm">How would you explain what you learned here to a friend? OR</Text>
                <Text size="sm">How does what you learned here connect to other school topics or everyday life?</Text>
              </List>
            </>
          }
          description="(1-2 sentences minimum)"
          format="question"
          questionType="text"
          disabled={!canReflect || !!props.preview}
          onResponseChange={onReflectionChange}
          required
          paragraph
          minText={MIN_REFLECTION_LENGTH}
          userAnswer={reflection ? {responses: [reflection]} : undefined}
        />

        <FormItem>
          <Ratings disabled={!canReflect || !!props.preview} rating={rating} setRating={setRating} />
        </FormItem>

        {!props.preview && (
          <Box mx="auto" style={{ width: "3rem" }}>
            <div>
              <Button disabled={!canSubmit} type="submit">
                Submit
              </Button>
            </div>
          </Box>
        )}
      </form>
      {!props.preview && (
        <Paper
          style={{
            position: "fixed",
            bottom: "5px",
            right: "14px",
            transition: "all 0.3s ease-in-out",
            opacity: saveVisibility,
          }}
        >
          <Button type="button" color="dark-blue" size="md" onClick={saveDraft}>
            Save
          </Button>
        </Paper>
      )}
    </>
  );
}

const Ratings = (props: { disabled?: boolean; rating?: number; setRating?: (rating: number) => void }) => {
  /**
   * Max points for reflection.
   */
  const [confidence, setConfidence] = React.useState(props.rating || -1);
  const onMouseEnter = (i: number) => !props.disabled && setConfidence(i);
  const onMouseLeave = () => !props.disabled && setConfidence(props.rating || -1);
  const onClick = (i: number) => !props.disabled && props.setRating && props.setRating(i);
  const maxPoints = 5;
  const circlePointer = props.disabled ? "" : "pointer";

  const buttons =
    <Stack>
      <Group>
        <Rating fractions={2} defaultValue={1.5} />
      </Group>

    </Stack>

  const labels = Array.from({ length: maxPoints }, (_, i) => {
    if (i === 0) {
      return <p key={i}>Poor</p>;
    }

    if (i === maxPoints - 1) {
      return <p key={i}>Amazing</p>;
    }

    return <p key={i} />;
  });

  React.useEffect(() => {
    if (props.rating && props.rating !== confidence) {
      setConfidence(props.rating);
    }
  }, [props.rating]);

  return (
    <div>
      <h6>{"Almost there, rate this task before submitting."}</h6>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>{buttons}</div>
        <div style={{ display: "flex", flexDirection: "row", alignContent: "space-between" }}>{labels}</div>
      </div>
    </div>
  );
};

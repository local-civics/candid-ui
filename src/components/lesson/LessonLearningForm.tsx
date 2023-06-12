import * as React from "react";
import { LessonData, FormItemData } from "./data";
import { FormItem } from "./FormItem";
import { Text, Paper, Button, Flex, createStyles, ScrollArea, Box, List } from "@mantine/core";
import { IconCircle, IconCircleFilled } from "@tabler/icons-react";

const AUTOSAVE_TIMEOUT = 30 * 1000;
const MIN_REFLECTION_LENGTH = 100;

const useStyles = createStyles((theme) => {
  return {
    paperContainer: {
      width: "75%",
      // padding: "14rem 14rem",
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
export type LessonLearningFormProps = LessonData & {
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

  const [reflection, setReflection] = React.useState(props.reflection || "");
  const [rating, setRating] = React.useState(props.rating);
  let answeredAllRequired = true;
  const canReflect = !!reflection || answeredAllRequired;
  const saveVisibility = isDraft ? 100 : 0;
  const elapsedTime = props?.elapsedTime || 0;
  const timeSpent = props?.timeSpent || 0;

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
            {!!props.estimate && <p>Estimated Completion Time: {props.estimate}</p>}
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
          displayName={
            <>
              <p>To earn your impact points for this activity, answer either of the following:</p>
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
          responses={reflection ? [reflection] : undefined}
        />

        <FormItem>
          <Rating disabled={!canReflect || !!props.preview} rating={rating} setRating={setRating} />
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

const Rating = (props: { disabled?: boolean; rating?: number; setRating?: (rating: number) => void }) => {
  /**
   * Max points for reflection.
   */
  const [confidence, setConfidence] = React.useState(props.rating || -1);
  const onMouseEnter = (i: number) => !props.disabled && setConfidence(i);
  const onMouseLeave = () => !props.disabled && setConfidence(props.rating || -1);
  const onClick = (i: number) => !props.disabled && props.setRating && props.setRating(i);
  const maxPoints = 5;
  const circlePointer = props.disabled ? "" : "pointer";

  const buttons = Array.from({ length: maxPoints }, (_, i) => {
    // const style={color:color}
    const color = i < confidence ? "lightblue" : "gray";
    return (
      <div
        key={i}
        onMouseEnter={() => onMouseEnter(i + 1)}
        onMouseLeave={onMouseLeave}
        style={{ color: color, cursor: "pointer" }}
      >
        <div onClick={() => onClick(i + 1)}>
          {/* <Icon name="circle" /> */}
          {i < confidence ? (
            <IconCircleFilled color={"lightblue"}></IconCircleFilled>
          ) : (
            <IconCircle color={i < confidence ? "lightblue" : "gray"}></IconCircle>
          )}
        </div>
      </div>
    );
  });
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
      <h6>{"Almost there, rate this activity before submitting."}</h6>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>{buttons}</div>
        <div>{labels}</div>
      </div>
    </div>
  );
};

import * as React from "react";
import { Container, Grid, Text, Title, Stack, Group, Button, createStyles } from "@mantine/core";
import { IconClockFilled, IconPencil, IconPhoto, IconVideo } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },
  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
  sessionItem: {
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },
  control: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

/**
 * SyllabusItem
 */
export type SyllabusItem = {
  title: string;
  description: string;
  estimate: string;
  questionCount: number;
  videoCount?: number;
  imageCount?: number;
};

/**
 * PostSyllabusProps
 */
export type PostSyllabusProps = {
  syllabusTitle?: string;
  syllabusItems: SyllabusItem[];
  onStartSyllabusItem?: (item: SyllabusItem) => void;
};

/**
 * PostSyllabus
 * @param props
 * @constructor
 */
export function PostSyllabus(props: PostSyllabusProps) {
  const { classes, cx } = useStyles();
  const title = props.syllabusTitle || "What You'll Learn";
  const sessions = props.syllabusItems.map((v, i) => {
    return (
      <>
        <Grid.Col span={3} pr="9rem">
          <Text size="sm" w="max-content" mx="auto">
            SESSION
          </Text>
          <Text mt={5} w="max-content" mx="auto" weight={700} size="2rem">
            {i + 1}
          </Text>
        </Grid.Col>
        <Grid.Col span={9} pb={40} className={cx({ [classes.sessionItem]: i < props.syllabusItems.length - 1 })}>
          <Stack spacing={20}>
            <Group spacing={5}>
              <IconClockFilled size={18} />
              <Text size="sm">{v.estimate}</Text>
            </Group>
            <Text size="lg">{v.title}</Text>
            <Text size="md">{v.description}</Text>
            <Group spacing={5}>
              <IconPencil size={18} />
              <Text size="sm">{v.questionCount} questions</Text>
              {!!v.videoCount && (
                <>
                  <IconVideo size={18} />
                  <Text size="sm">{v.videoCount} videos</Text>
                </>
              )}
              {!!v.imageCount && (
                <>
                  <IconPhoto size={18} />
                  <Text size="sm">{v.imageCount} images</Text>
                </>
              )}
            </Group>

            <div style={{ width: "max-content" }}>
              <Button
                onClick={() => props.onStartSyllabusItem && props.onStartSyllabusItem(v)}
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                size="md"
                className={classes.control}
                mt={10}
              >
                Get started
              </Button>
            </div>
          </Stack>
        </Grid.Col>
      </>
    );
  });

  return (
    <Container fluid p={25} mx={0} className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      <Grid>{sessions}</Grid>
    </Container>
  );
}

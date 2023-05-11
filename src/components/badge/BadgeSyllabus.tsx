import * as React from "react";
import { Container, Grid, Text, Title, Stack, Group, Button } from "@mantine/core";
import { IconClockFilled, IconPencil, IconPhoto, IconVideo } from "@tabler/icons-react";
import { useBadgeStyles } from "./styles";
import { BadgeSyllabusData, BadgeSyllabusItemData } from "./data";

/**
 * BadgeSyllabusProps
 */
export type BadgeSyllabusProps = BadgeSyllabusData & {
  onStartSyllabusItem?: (item: BadgeSyllabusItemData) => void;
};

/**
 * BadgeSyllabus
 * @param props
 * @constructor
 */
export function BadgeSyllabus(props: BadgeSyllabusProps) {
  const { classes, cx } = useBadgeStyles();
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
        <Grid.Col span={9} pb={40} className={cx({ [classes.badgeSyllabusSessionItem]: i < props.syllabusItems.length - 1 })}>
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
                className={classes.badgeSyllabusControl}
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
    <Container fluid p={25} mx={0} className={classes.badgeSyllabusWrapper}>
      <Title className={classes.badgeSyllabusTitle}>{title}</Title>
      <Grid>{sessions}</Grid>
    </Container>
  );
}

import * as React from "react";
import { Container, Grid, Text, Title, Stack, Group, Button } from "@mantine/core";
import { IconClockFilled, IconPencil, IconPhoto, IconVideo } from "@tabler/icons-react";
import { useBadgeStyles } from "./styles";
import { SyllabusModel } from "../../models/task";
import { fqdn } from "../../utils/urls";
import { Link } from "react-router-dom";

/**
 * TaskSyllabusProps
 */
export type TaskSyllabusProps = SyllabusModel & {
};

/**
 * TaskSyllabus
 * @param props
 * @constructor
 */
export function TaskSyllabus(props: TaskSyllabusProps) {
  const { classes, cx } = useBadgeStyles();
  const title = props.title || "What You'll Learn";
  const sessions = props.items?.map((v, i) => {
    return (
      <React.Fragment key={v.title}>
        <Grid.Col span={3} pr="9rem">
          <Text size="sm" w="max-content" mx="auto">
            SESSION
          </Text>
          <Text mt={5} w="max-content" mx="auto" weight={700} size="2rem">
            {i + 1}
          </Text>
        </Grid.Col>
        <Grid.Col span={9} pb={40} className={cx({ [classes.badgeSyllabusSessionItem]: i < (props.items?.length || 0) - 1 })}>
          <Stack spacing={20}>
            <Group spacing={5}>
              <IconClockFilled size={18} />
              <Text size="sm">{v.etc}</Text>
            </Group>
            <Text size="lg">{v.title}</Text>
            <Text size="md">{v.description}</Text>
            <Group spacing={5}>
              {
                !!v.numberOfQuestions && <>
                  <IconPencil size={18} />
                  <Text size="sm">{v.numberOfQuestions} questions</Text>
                </>
              }
              {!!v.numberOfVideos && (
                <>
                  <IconVideo size={18} />
                  <Text size="sm">{v.numberOfVideos} videos</Text>
                </>
              )}
              {!!v.numberOfImages && (
                <>
                  <IconPhoto size={18} />
                  <Text size="sm">{v.numberOfImages} images</Text>
                </>
              )}
            </Group>

            <div style={{ width: "max-content" }}>
              <Button<typeof Link>
                component={Link}
                to={fqdn(v.startURL).replace(":start", "/start")}
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
      </React.Fragment>
    );
  });

  return (
    <Container fluid p={25} mx={0} className={classes.badgeSyllabusWrapper}>
      <Title className={classes.badgeSyllabusTitle}>{title}</Title>
      <Grid>{sessions}</Grid>
    </Container>
  );
}

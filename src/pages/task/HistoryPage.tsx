import * as React from "react";
import { TaskCard } from "../../components/task/TaskCard";
import { Box, Container, LoadingOverlay, Title, Stack, SimpleGrid, Flex, useMantineTheme } from "@mantine/core";
import { IconTimelineEvent } from "@tabler/icons-react";
import { formatDate } from "../../utils/dates";
import { TaskData } from "../../models/task";

/**
 * HistoryPageProps
 */
export type HistoryPageProps = {
  loading?: boolean
  data?: {date: string, content: TaskData[]}[]
  onLikeTask?: (data: TaskData) => void;
  onSaveTask?: (data: TaskData) => void;
  onAssignTask?: (data: TaskData) => void;
  onOpenTask?: (data: TaskData) => void;
};

/**
 * HistoryPage
 * @param props
 * @constructor
 */
export function HistoryPage(props: HistoryPageProps) {
  const theme = useMantineTheme()
  const dates = props.data?.map((d) => {
    return (
      <React.Fragment key={d.date}>
        <Title sx={{textTransform: "capitalize"}} size={30} color="dark.4">{formatDate(d.date)}</Title>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "70rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
        {
          d.content.map(p => {
            return <TaskCard
              key={`${d.date}${p.href}`}
              size="sm"
              data={p}
              onLikeClick={() => props.onLikeTask && props.onLikeTask(p)}
              onSave={() => props.onSaveTask && props.onSaveTask(p)}
              onAssign={() => props.onAssignTask && props.onAssignTask(p)}
              onOpen={() => props.onOpenTask && props.onOpenTask(p)}
            />
          })
        }
        </SimpleGrid>
      </React.Fragment>
    );
  });

  return <Container size="lg" pb="xl">
    {/* Content tasks */}
    <Box pos="relative">
      <LoadingOverlay visible={!!props.loading} overlayBlur={2} />
      <Stack spacing="lg">
        <Flex align="center" gap={5}>
          <IconTimelineEvent size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">History</Title>
        </Flex>
        {dates}
      </Stack>
    </Box>
  </Container>
}

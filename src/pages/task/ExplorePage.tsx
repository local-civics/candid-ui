import * as React from "react";
import { TaskCard } from "../../components/task/TaskCard";
import { Box, Container, Flex, LoadingOverlay, SimpleGrid, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconGlobe } from "@tabler/icons-react";
import { TaskData } from "../../components/task/data";

/**
 * ExplorePageProps
 */
export type ExplorePageProps = {
  loading?: boolean
  title?: string
  data?: TaskData[]
  onLikeTask?: (data: TaskData) => void;
  onSaveTask?: (data: TaskData) => void;
  onAssignTask?: (data: TaskData) => void;
  onOpenTask?: (data: TaskData) => void;
};

/**
 * ExplorePage
 * @param props
 * @constructor
 */
export function ExplorePage(props: ExplorePageProps) {
  const theme = useMantineTheme()
  const tasks = props.data?.map((p) => {
    return <TaskCard
      key={p.href}
      data={p}
      onLikeClick={() => props.onLikeTask && props.onLikeTask(p)}
      onSave={() => props.onSaveTask && props.onSaveTask(p)}
      onAssign={() => props.onAssignTask && props.onAssignTask(p)}
      onOpen={() => props.onOpenTask && props.onOpenTask(p)}
    />
  });

  return <Container size="lg" pb="xl">
    {/* Content tasks */}
    <Box pos="relative">
      <LoadingOverlay visible={!!props.loading} overlayBlur={2} />
      <Stack spacing="lg">
        <Flex align="center" gap={5}>
          <IconGlobe size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Explore</Title>
        </Flex>
        { !!props.title && <Title size={20} color="dark.4">{props.title}</Title> }
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "70rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
          {tasks}
        </SimpleGrid>
      </Stack>
    </Box>
  </Container>
}

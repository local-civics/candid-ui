import * as React from "react";
import { TaskCard } from "../../components/task/TaskCard";
import { Box, Center, Container, Flex, Loader, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { TaskData } from "../../models/task";

/**
 * SearchPageProps
 */
export type SearchPageProps = {
  isLoading?: boolean
  title?: string
  items?: TaskData[]
  onLikeTask?: (data: TaskData) => void;
  onSaveTask?: (data: TaskData) => void;
  onAssignTask?: (data: TaskData) => void;
};

/**
 * SearchPage
 * @param props
 * @constructor
 */
export function SearchPage(props: SearchPageProps) {
  const theme = useMantineTheme()
  const tasks = props.items?.map((p) => {
    return <TaskCard
      size="lg"
      key={p.url}
      data={p}
      onLikeClick={() => props.onLikeTask && props.onLikeTask(p)}
      onSave={() => props.onSaveTask && props.onSaveTask(p)}
      onAssign={() => props.onAssignTask && props.onAssignTask(p)}
    />
  });

  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

  return <Container size="lg" pb="xl">
    {/* Content tasks */}
    <Box pos="relative">
      <Stack spacing="lg">
        <Flex align="center" gap={5}>
          <IconSearch size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Search</Title>
        </Flex>
        { !!props.title && <Title size={20} color="dark.4">{props.title}</Title> }
        <Stack spacing={10}>
          {tasks}
        </Stack>
      </Stack>
    </Box>
  </Container>
}

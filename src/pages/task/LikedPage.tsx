import * as React from "react";
import { TaskCard } from "../../components/task/TaskCard";
import {TaskModel } from "../../models/task";
import {
  Box,
  Center,
  Container,
  Flex,
  Loader,
  SimpleGrid,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { IconThumbUp } from "@tabler/icons-react";
import { PlaceholderBanner } from "../../components/common/placeholder/PlaceholderBanner";

/**
 * LikedPageProps
 */
export type LikedPageProps = {
  isLoading?: boolean
  items?: TaskModel[]
  onLikeTask?: (data: TaskModel) => void;
  onSaveTask?: (data: TaskModel) => void;
  onAssignTask?: (data: TaskModel) => void;
  onOpenTask?: (data: TaskModel) => void;
};

/**
 * LikedPage
 * @param props
 * @constructor
 */
export function LikedPage(props: LikedPageProps) {
  const theme = useMantineTheme()
  const tasks = props.items?.map((p) => {
    return <TaskCard
      key={p.url}
      size="sm"
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
          <IconThumbUp size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Liked</Title>
        </Flex>
        { !!props.items?.length && <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "70rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
        {tasks}
        </SimpleGrid> }
        {!props.items?.length && <PlaceholderBanner title="You don't have any liked tasks yet." />}
      </Stack>
    </Box>
  </Container>
}
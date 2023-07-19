import * as React from "react";
import { TaskCard } from "../../components/task/TaskCard";
import {
  Anchor,
  Box,
  Center,
  Container,
  Flex, Loader,
  SimpleGrid,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import { IconBook } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { TaskData } from "../../models/task";

/**
 * LibraryPageProps
 */
export type LibraryPageProps = {
  isLoading?: boolean
  items?: {title: string, href: string, content: TaskData[]}[]
  onLikeTask?: (data: TaskData) => void;
  onSaveTask?: (data: TaskData) => void;
  onAssignTask?: (data: TaskData) => void;
};

/**
 * LibraryPage
 * @param props
 * @constructor
 */
export function LibraryPage(props: LibraryPageProps) {
  const theme = useMantineTheme()
  const dates = props.items?.map((d) => {
    return (
      <React.Fragment key={d.title}>
        <Flex>
          <Title w="100%" size={30} color="dark.4">{d.title}</Title>
          <Anchor<typeof Link> to={d.href} component={Link} size="sm" weight={600} underline miw="max-content">See all</Anchor>
        </Flex>
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
                key={`${d.title}${p.url}`}
                size="sm"
                data={p}
                onLikeClick={() => props.onLikeTask && props.onLikeTask(p)}
                onSave={() => props.onSaveTask && props.onSaveTask(p)}
                onAssign={() => props.onAssignTask && props.onAssignTask(p)}
              />
            })
          }
        </SimpleGrid>
      </React.Fragment>
    );
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
          <IconBook size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Library</Title>
        </Flex>
        {dates}
      </Stack>
    </Box>
  </Container>
}

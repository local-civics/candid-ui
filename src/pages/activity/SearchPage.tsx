import * as React from "react";
import { ActivityCard } from "../../components/core/activity/ActivityCard";
import { Box, Container, Flex, LoadingOverlay, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { ActivityData } from "../../components/core/activity/data";

/**
 * SearchPageProps
 */
export type SearchPageProps = {
  loading?: boolean
  title?: string
  data?: ActivityData[]
  onLikeActivity?: (data: ActivityData) => void;
  onSaveActivity?: (data: ActivityData) => void;
  onAssignActivity?: (data: ActivityData) => void;
  onOpenActivity?: (data: ActivityData) => void;
};

/**
 * SearchPage
 * @param props
 * @constructor
 */
export function SearchPage(props: SearchPageProps) {
  const theme = useMantineTheme()
  const activities = props.data?.map((p) => {
    return <ActivityCard
      size="lg"
      key={p.href}
      data={p}
      onLikeClick={() => props.onLikeActivity && props.onLikeActivity(p)}
      onSave={() => props.onSaveActivity && props.onSaveActivity(p)}
      onAssign={() => props.onAssignActivity && props.onAssignActivity(p)}
      onOpen={() => props.onOpenActivity && props.onOpenActivity(p)}
    />
  });

  return <Container size="lg" pb="xl">
    {/* Content activities */}
    <Box pos="relative">
      <LoadingOverlay visible={!!props.loading} overlayBlur={2} />
      <Stack spacing="lg">
        <Flex align="center" gap={5}>
          <IconSearch size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Search</Title>
        </Flex>
        { !!props.title && <Title size={20} color="dark.4">{props.title}</Title> }
        <Stack spacing={10}>
          {activities}
        </Stack>
      </Stack>
    </Box>
  </Container>
}

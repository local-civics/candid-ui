import * as React from "react";
import { ActivityCard } from "../../components/core/activity/ActivityCard";
import {ActivityData } from "../../components/core/activity/data";
import { Box, Container, Flex, LoadingOverlay, SimpleGrid, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconThumbUp } from "@tabler/icons-react";

/**
 * LikedPageProps
 */
export type LikedPageProps = {
  loading?: boolean
  data?: ActivityData[]
  onLikeActivity?: (data: ActivityData) => void;
  onSaveActivity?: (data: ActivityData) => void;
  onAssignActivity?: (data: ActivityData) => void;
  onOpenActivity?: (data: ActivityData) => void;
};

/**
 * LikedPage
 * @param props
 * @constructor
 */
export function LikedPage(props: LikedPageProps) {
  const theme = useMantineTheme()
  const activities = props.data?.map((p) => {
    return <ActivityCard
      key={p.href}
      size="sm"
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
          <IconThumbUp size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Liked</Title>
        </Flex>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "70rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
        {activities}
        </SimpleGrid>
      </Stack>
    </Box>
  </Container>
}

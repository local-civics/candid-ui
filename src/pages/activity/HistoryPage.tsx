import * as React from "react";
import { ActivityCard } from "../../components/core/activity/ActivityCard";
import { Box, Container, LoadingOverlay, Title, Stack, SimpleGrid, Flex, useMantineTheme } from "@mantine/core";
import { IconTimelineEvent } from "@tabler/icons-react";
import { formatDate } from "../../utils/dates";
import { ActivityData } from "../../components/core/activity/data";

/**
 * HistoryPageProps
 */
export type HistoryPageProps = {
  loading?: boolean
  data?: {date: string, content: ActivityData[]}[]
  onLikeActivity?: (data: ActivityData) => void;
  onSaveActivity?: (data: ActivityData) => void;
  onAssignActivity?: (data: ActivityData) => void;
  onOpenActivity?: (data: ActivityData) => void;
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
            return <ActivityCard
              key={`${d.date}${p.href}`}
              size="sm"
              data={p}
              onLikeClick={() => props.onLikeActivity && props.onLikeActivity(p)}
              onSave={() => props.onSaveActivity && props.onSaveActivity(p)}
              onAssign={() => props.onAssignActivity && props.onAssignActivity(p)}
              onOpen={() => props.onOpenActivity && props.onOpenActivity(p)}
            />
          })
        }
        </SimpleGrid>
      </React.Fragment>
    );
  });

  return <Container size="lg" pb="xl">
    {/* Content activities */}
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

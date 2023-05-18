import * as React from "react";
import { PostCard, PostCardData } from "../../components/core/post/PostCard";
import { Box, Container, LoadingOverlay, Title, Stack, SimpleGrid, Flex, useMantineTheme } from "@mantine/core";
import { IconTimelineEvent } from "@tabler/icons-react";
import { formatDate } from "../../utils/dates";

/**
 * VisitedContentPageProps
 */
export type VisitedContentPageProps = {
  loading?: boolean
  data?: {date: string, content: PostCardData[]}[]
  onLikePost?: (post: PostCardData) => void;
  onSavePost?: (post: PostCardData) => void;
  onAssignPost?: (post: PostCardData) => void;
  onOpenPost?: (post: PostCardData) => void;
};

/**
 * VisitedContentPage
 * @param props
 * @constructor
 */
export function VisitedContentPage(props: VisitedContentPageProps) {
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
            return <PostCard
              key={`${d.date}${p.href}`}
              size="sm"
              data={p}
              onLikeClick={() => props.onLikePost && props.onLikePost(p)}
              onSave={() => props.onSavePost && props.onSavePost(p)}
              onAssign={() => props.onAssignPost && props.onAssignPost(p)}
              onOpen={() => props.onOpenPost && props.onOpenPost(p)}
            />
          })
        }
        </SimpleGrid>
      </React.Fragment>
    );
  });

  return <Container size="lg" pb="xl">
    {/* Content posts */}
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

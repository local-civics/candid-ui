import * as React from "react";
import { PostCard, PostCardData } from "../../components/core/post/PostCard";
import { Box, Container, Flex, LoadingOverlay, SimpleGrid, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconThumbUp } from "@tabler/icons-react";

/**
 * LikedContentPageProps
 */
export type LikedContentPageProps = {
  loading?: boolean
  data?: PostCardData[]
  onLikePost?: (post: PostCardData) => void;
  onSavePost?: (post: PostCardData) => void;
  onAssignPost?: (post: PostCardData) => void;
  onOpenPost?: (post: PostCardData) => void;
};

/**
 * LikedContentPage
 * @param props
 * @constructor
 */
export function LikedContentPage(props: LikedContentPageProps) {
  const theme = useMantineTheme()
  const posts = props.data?.map((p) => {
    return <PostCard
      key={p.href}
      size="sm"
      data={p}
      onLikeClick={() => props.onLikePost && props.onLikePost(p)}
      onSave={() => props.onSavePost && props.onSavePost(p)}
      onAssign={() => props.onAssignPost && props.onAssignPost(p)}
      onOpen={() => props.onOpenPost && props.onOpenPost(p)}
    />
  });

  return <Container size="lg" pb="xl">
    {/* Content posts */}
    <Box pos="relative">
      <LoadingOverlay visible={!!props.loading} overlayBlur={2} />
      <Stack spacing="lg">
        <Flex align="center" gap={5}>
          <IconThumbUp size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Liked content</Title>
        </Flex>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "70rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
        {posts}
        </SimpleGrid>
      </Stack>
    </Box>
  </Container>
}
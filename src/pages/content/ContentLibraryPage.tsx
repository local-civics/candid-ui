import * as React from "react";
import { PostCard, PostCardData } from "../../components/core/post/PostCard";
import { Anchor, Box, Container, Flex, LoadingOverlay, SimpleGrid, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";
import { Link } from "react-router-dom";

/**
 * ContentLibraryPageProps
 */
export type ContentLibraryPageProps = {
  loading?: boolean
  data?: {title: string, href: string, content: PostCardData[]}[]
  onLikePost?: (post: PostCardData) => void;
  onSavePost?: (post: PostCardData) => void;
  onAssignPost?: (post: PostCardData) => void;
  onOpenPost?: (post: PostCardData) => void;
};

/**
 * ContentLibraryPage
 * @param props
 * @constructor
 */
export function ContentLibraryPage(props: ContentLibraryPageProps) {
  const theme = useMantineTheme()
  const dates = props.data?.map((d) => {
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
              return <PostCard
                key={`${d.title}${p.href}`}
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
          <IconBook size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Library</Title>
        </Flex>
        {dates}
      </Stack>
    </Box>
  </Container>
}

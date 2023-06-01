import * as React from "react";
import { ActivityCard } from "../../components/core/activity/ActivityCard";
import { Anchor, Box, Container, Flex, LoadingOverlay, SimpleGrid, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { ActivityData } from "../../components/core/activity/data";

/**
 * LibraryPageProps
 */
export type LibraryPageProps = {
  loading?: boolean
  data?: {title: string, href: string, content: ActivityData[]}[]
  onLikeActivity?: (data: ActivityData) => void;
  onSaveActivity?: (data: ActivityData) => void;
  onAssignActivity?: (data: ActivityData) => void;
  onOpenActivity?: (data: ActivityData) => void;
};

/**
 * LibraryPage
 * @param props
 * @constructor
 */
export function LibraryPage(props: LibraryPageProps) {
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
              return <ActivityCard
                key={`${d.title}${p.href}`}
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
          <IconBook size={30} color={theme.colors.dark[4]}/>
          <Title size={30} color="dark.4">Library</Title>
        </Flex>
        {dates}
      </Stack>
    </Box>
  </Container>
}

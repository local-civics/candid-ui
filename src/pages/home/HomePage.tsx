import * as React from "react";
import { Container, Stack, Button, Center, SimpleGrid, Box, LoadingOverlay, rem, useMantineTheme } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { ActivityCard } from "../../components/core/activity/ActivityCard";
import {ActivityData } from "../../components/core/activity/data";

const DEFAULT_FILTERS_PREFIX = ["All"];

const DEFAULT_FILTERS_SUFFIX = [
  "Trending",
  "Top Rated",
  "Under 5min.",
  "Elementary (K-5)",
  "Middle (6-8)",
  "High School (9-12)",
  "College",
  "Career",
  "Work-Based Learning",
  "Student Leadership",
  "Civics",
  "Project-Based Learning",
  "Recreation",
  "Arts & Culture",
  "Volunteer",
  "Live",
  "New to you",
];

/**
 * HomePageProps
 */
export type HomePageProps = {
  data?: ActivityData[];
  loading?: boolean;
  defaultActiveFilter?: string;
  filters?: string[];
  onFilterClick?: (name: string) => void;
  onLikeActivity?: (data: ActivityData) => void;
  onSaveActivity?: (data: ActivityData) => void;
  onAssignActivity?: (data: ActivityData) => void;
  onOpenActivity?: (data: ActivityData) => void;
};

/**
 * HomePage
 * @param props
 * @constructor
 */
export function HomePage(props: HomePageProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [activeFilter, setActiveFilter] = React.useState(props.defaultActiveFilter || "All");
  const onFilterClick = (name: string) => {
    setActiveFilter(name);
    props.onFilterClick && props.onFilterClick(name);
  };
  const filterNames = [...new Set([...DEFAULT_FILTERS_PREFIX, ...(props.filters || []), ...DEFAULT_FILTERS_SUFFIX])];
  const filters = filterNames.map((f) => {
    return (
      <Carousel.Slide key={f} py={6} size={f.length}>
        <Center>
          <Button
            onClick={() => onFilterClick(f)}
            color={activeFilter === f ? "filled" : "gray"}
            variant={activeFilter === f ? "filled" : "light"}
            size="xs"
            fw={500}
          >
            {f}
          </Button>
        </Center>
      </Carousel.Slide>
    );
  });
  const activities = props.data?.map((p) => {
    return (
      <ActivityCard
        key={p.href}
        data={p}
        onLikeClick={() => props.onLikeActivity && props.onLikeActivity(p)}
        onSave={() => props.onSaveActivity && props.onSaveActivity(p)}
        onAssign={() => props.onAssignActivity && props.onAssignActivity(p)}
        onOpen={() => props.onOpenActivity && props.onOpenActivity(p)}
      />
    );
  });

  return (
    <Container size="lg" pb="xl">
      <Stack spacing="lg">
        {/* Content filters */}
        <Carousel
          pl="2rem"
          pr={0}
          slideGap="xs"
          align="start"
          slidesToScroll={mobile ? 2 : 4}
          withIndicators
          styles={{
            controls: {
              paddingLeft: 0,
              paddingRight: 0,
            },
            indicators: {
              bottom: "-0.5rem",
            },
            indicator: {
              backgroundColor: theme.colors.gray[6],
              width: rem(12),
              height: rem(4),
              transition: "width 250ms ease",

              "&[data-active]": {
                width: rem(40),
              },
            },
          }}
        >
          {filters}
        </Carousel>

        {/* Content activities */}
        <Box pos="relative">
          <LoadingOverlay visible={!!props.loading} overlayBlur={2} />
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
        </Box>
      </Stack>
    </Container>
  );
}

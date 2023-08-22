import * as React from "react";
import {
  Container,
  Stack,
  Button,
  Center,
  SimpleGrid,
  rem,
  useMantineTheme,
  Loader
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { TaskCard } from "../../components/task/TaskCard";
import {TaskModel } from "../../models/task";
import { PlaceholderBanner } from "../../components/common/placeholder/PlaceholderBanner";

const DEFAULT_FILTERS_PREFIX = ["All"];

const DEFAULT_FILTERS_SUFFIX = [
  "Trending",
  "Top Rated",
  "New To You",
  "Under 15min.",
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
];

/**
 * HomePageProps
 */
export type HomePageProps = {
  isLoading?: boolean;
  defaultActiveFilter?: string;
  filters?: string[];
  items?: TaskModel[];
  onFilterClick?: (name: string) => void;
  onLikeTask?: (data: TaskModel) => void;
  onSaveTask?: (data: TaskModel) => void;
  onAssignTask?: (data: TaskModel) => void;
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
  const tasks = props.items?.map((p) => {
    return (
      <TaskCard
        key={p.url}
        data={p}
        onLikeClick={() => props.onLikeTask && props.onLikeTask(p)}
        onSave={() => props.onSaveTask && props.onSaveTask(p)}
        onAssign={() => props.onAssignTask && props.onAssignTask(p)}
      />
    );
  });

  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

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

        {/* Content tasks */}
        { !!props.items?.length && <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: "70rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
          {tasks}
        </SimpleGrid>}

        {!props.items?.length && <PlaceholderBanner title="No results matching selected filter." />}
      </Stack>
    </Container>
  );
}
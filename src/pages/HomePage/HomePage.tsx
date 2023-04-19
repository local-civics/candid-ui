import * as React                                                             from 'react';
import {
    Container, Stack, Button, Center, SimpleGrid,
    rem, useMantineTheme
} from '@mantine/core'
import {Carousel}                                                             from '@mantine/carousel'
import {useMediaQuery}                                                        from "@mantine/hooks";
import {Link}                    from "react-router-dom";
import {PostCard, PostCardProps} from "../../components/PostCard/PostCard"

const DEFAULT_FILTERS_PREFIX = [
    "All"
]

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
]

/**
 * HomePageProps
 */
export type HomePageProps = {
    posts: PostCardProps[],
    defaultActiveFilter?: string
    filters?: string[]
}

/**
 * HomePage
 * @param props
 * @constructor
 */
export function HomePage(props: HomePageProps){
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const [activeFilter, setActiveFilter] = React.useState(props.defaultActiveFilter || "All")
    const filterNames = [...new Set([...DEFAULT_FILTERS_PREFIX, ...props.filters||[], ...DEFAULT_FILTERS_SUFFIX])]
    const filters = filterNames.map(f => {
        return <Carousel.Slide py={6} size={f.length}>
            <Center>
                <Button<typeof Link>
                    component={Link}
                    onClick={() => setActiveFilter(f)}
                    to={`/feeds/${feedName(f)}`}
                    color={activeFilter === f ? "filled" : "gray"}
                    variant={activeFilter === f ? "filled": "light"}
                    size="sm"
                    fw={500}>
                    {f}
                </Button>
            </Center>
        </Carousel.Slide>
    })
    const posts = props.posts.map(p => {
        return <PostCard {...p}/>
    })

    return <Container size="lg" py="xl">
        <Stack spacing="lg">
            {/* Content filters */}
            <Carousel
                px={50}
                slideGap="xs"
                align="start"
                slidesToScroll={mobile ? 2 : 4}
                withIndicators
                styles={{
                    indicators: {
                      bottom: '-0.5rem'
                    },
                    indicator: {
                        backgroundColor: theme.colors.gray[6],
                        width: rem(12),
                        height: rem(4),
                        transition: 'width 250ms ease',

                        '&[data-active]': {
                            width: rem(40),
                        },
                    },
                }}
            >
                {filters}
            </Carousel>

            {/* Content posts */}
            <SimpleGrid
                cols={3}
                spacing="lg"
                breakpoints={[
                    { maxWidth: '70rem', cols: 2, spacing: 'sm' },
                    { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                ]}
            >
                {posts}
            </SimpleGrid>
        </Stack>
    </Container>
}

function feedName(from: string){
    return ""
}
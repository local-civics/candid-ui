import { IconThumbUp, IconStarFilled } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    Flex,
    Spoiler,
    createStyles,
    rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    section: {
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    like: {
        color: theme.colors.blue[6],
    },

    rating: {
        color: theme.colors.yellow[6],
    },

    label: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        lineHeight: 1,
    },

    image: {
        cursor: 'pointer',
    }
}));

const MIN_RATING = 0

/**
 * PostCardProps
 */
export type PostCardProps = {
    image: string;
    title: string;
    category: string;
    description: string;
    rating?: number
    onClick?: () => void
    onLikeClick?: () => void;
}

/**
 * PostCard
 * @param props
 * @constructor
 */
export function PostCard(props: PostCardProps) {
    const { classes } = useStyles();
    const rating = props.rating || 0

    return <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
            <Image onClick={props.onClick} className={classes.image} src={props.image} alt={props.title} height={180} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
            <Spoiler
                maxHeight={120}
                hideLabel="Show less"
                showLabel="Show more"
                styles={{
                    control: {
                        fontSize: '0.9rem',
                    },
                }}
            >
                <Group position="apart" spacing={0}>
                    <Text fz="lg" fw={500}>
                        {props.title}
                    </Text>
                    <Badge size="sm">{props.category}</Badge>
                </Group>
                <Text fz="0.8rem" mt="xs">
                    {props.description}
                </Text>
            </Spoiler>
    </Card.Section>

        <Group mt="xs">
            <Button onClick={props.onClick} px={5} radius="md" style={{ flex: 1 }}>
                Show details
            </Button>
            <ActionIcon onClick={props.onLikeClick} variant="default" radius="md" size={36}>
                <IconThumbUp size="1.1rem" className={classes.like} stroke={1.5} />
            </ActionIcon>
            { rating > MIN_RATING && <Flex gap="0.2rem" align="center">
                <Text ta="center" fz="sm" className={classes.label}>
                    {rating.toFixed(1)}
                </Text>
                <IconStarFilled className={classes.rating} size="0.8rem"/>
            </Flex> }
        </Group>
    </Card>;
}
import * as React        from 'react';
import {
    IconThumbUp,
    IconStarFilled,
    IconDotsVertical,
    IconBookmark,
    IconTransitionRight,
    IconThumbUpFilled
} from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    Group,
    Button,
    ActionIcon,
    Flex,
    Spoiler,
    UnstyledButton,
    Menu,
    createStyles,
    rem,
}             from '@mantine/core';
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        height: 'max-content'
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
    description: string;
    href: string;
    assignURL: string
    rating?: number
    liked?: boolean
    onLikeClick?: () => void;
    onSave?: () => void;
}

/**
 * PostCard
 * @param props
 * @constructor
 */
export function PostCard(props: PostCardProps) {
    const { classes } = useStyles();
    const rating = props.rating || 0
    const LikeIcon = !props.liked ? IconThumbUp : IconThumbUpFilled

    return <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
            <UnstyledButton<typeof Link> component={Link} to={props.href}>
                <Image className={classes.image} src={props.image} alt={props.title} height={180} />
            </UnstyledButton>
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
                <Group grow align="start" position="apart" spacing={0}>
                    <Text fz="lg" maw="initial" fw={500}>
                        {props.title}
                    </Text>
                    <Menu
                        transitionProps={{ transition: 'pop' }}
                        withArrow
                        position="bottom-end"
                        withinPortal
                    >
                        <Menu.Target>
                            <ActionIcon maw="max-content">
                                <IconDotsVertical size="1rem" stroke={1.5} />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item onClick={props.onSave} icon={<IconBookmark size="1rem" stroke={1.5} />}>Save for later</Menu.Item>
                            <Menu.Item<typeof Link>
                                component={Link}
                                to={props.assignURL}
                                icon={<IconTransitionRight size="1rem" stroke={1.5} />}>Assign</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
                <Text fz="0.8rem" mt="xs">
                    {props.description}
                </Text>
            </Spoiler>
    </Card.Section>

        <Group mt="xs">
            <Button<typeof Link> component={Link} to={props.href} px={5} radius="md" style={{ flex: 1 }}>
                Show details
            </Button>
            <ActionIcon onClick={props.onLikeClick} variant="default" radius="md" size={36}>
                <LikeIcon size="1.1rem" className={classes.like} stroke={1.5} />
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
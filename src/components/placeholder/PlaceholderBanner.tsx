import * as React                                              from 'react'
import { Group, rem, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.radius.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
        }`,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column-reverse',
            padding: theme.spacing.xl,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(100),
        maxWidth: '50rem',
        lineHeight: 1,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(50),
        },
    },
}));

/**
 * PlaceholderBannerProps
 */
export type PlaceholderBannerProps = {
    title: string,
}

/**
 * PlaceholderBanner
 * @param props
 * @constructor
 */
export function PlaceholderBanner(props: PlaceholderBannerProps){
    const { classes } = useStyles();
    return (
        <Group spacing={20} p={50} className={classes.wrapper}>
            <div className={classes.title}>{props.title}</div>
        </Group>
    );
}
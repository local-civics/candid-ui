import * as React from "react";
import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        minHeight: 650,
    },

    title: {
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },

    item: {
        borderRadius: theme.radius.md,
        marginBottom: theme.spacing.lg,
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },
}));

/**
 * PostFAQProps
 */
export type PostFAQProps = {
    questions: {control: string, panel: string}[]
}

/**
 * PostFAQ
 * @param props
 * @constructor
 */
export function PostFAQ(props: PostFAQProps) {
    const { classes } = useStyles();
    const questions = props.questions.map(q => {
        return <Accordion.Item className={classes.item} value={q.control}>
            <Accordion.Control>{q.control}</Accordion.Control>
            <Accordion.Panel>{q.panel}</Accordion.Panel>
        </Accordion.Item>
    })

    return (
        <Container size="sm" p={25} mx={0} className={classes.wrapper}>
            <Title className={classes.title}>
                Frequently Asked Questions
            </Title>

            <Accordion variant="separated">
                {questions}
            </Accordion>
        </Container>
    );
}
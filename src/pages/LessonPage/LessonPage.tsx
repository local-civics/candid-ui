import * as React     from 'react';
import {
    Container,
    Tabs,
    Stack,
    Button,
    Title,
    Text,
    createStyles, rem,
}                     from '@mantine/core'
import {Dots}         from "./Dots";
import {IconTargetArrow, IconShare3, IconThumbUp, IconBookmark} from "@tabler/icons-react";

const useStyles = createStyles((theme) => {
    return {
        root: {
            marginTop: '-1rem',
            marginLeft: '-1rem',
        },
        inner: {
            display: 'flex',
            position: 'relative',
            justifyContent: 'space-between',

            [theme.fn.smallerThan('md')]: {
                flexDirection: 'column',
            },
        },

        dots: {
            position: 'absolute',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

            [theme.fn.smallerThan('md')]: {
                display: 'none',
            },
        },

        content: {
            zIndex: 1,
            paddingTop: `calc(${theme.spacing.xl} * 3)`,
            paddingBottom: `calc(${theme.spacing.xl} * 3)`,
            width: '100%',
            overflowX: 'hidden',

            [theme.fn.smallerThan('md')]: {
                marginRight: 0,
            },
        },

        title: {
            color: theme.white,
            textAlign: 'center',
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            lineHeight: 1.05,
            maxWidth: rem(500),
            fontSize: rem(48),
        },

        control: {
            paddingLeft: rem(50),
            paddingRight: rem(50),
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontSize: rem(22),

            [theme.fn.smallerThan('md')]: {
                width: '100%',
            },
        },
    }
})

/**
 * LessonPageProps
 */
export type LessonPageProps = {

}

/**
 * LessonPage
 * @param props
 * @constructor
 */
export function LessonPage(props: LessonPageProps){
    const {classes} = useStyles()
    return <Container className={classes.root} fluid size="lg" px={0} pb="xl">
        <Stack
               pl={0}
               pr={5}
               pb={5}
               sx={(theme) => ({
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundImage: theme.fn.gradient({ from: 'blue.9', to: 'blue.5', deg: 20 }),
                   color: theme.white,
               })}
        >
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 25, top: 60 }} />

            {/* todo: hero, name, start */}
            <Stack className={classes.content} align="center">
                <IconTargetArrow size={24} />

                <Title className={classes.title}>
                    A fully featured React components library
                </Title>

                <div style={{width: "max-content"}}>
                    <Button
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan' }}
                        size="xl"
                        className={classes.control}
                        mt={40}
                    >
                        Get started
                    </Button>
                </div>
            </Stack>

            <Button.Group ml="auto">
                <Button leftIcon={<IconThumbUp size="1rem"/>} variant="filled">Like</Button>
                <Button leftIcon={<IconShare3 size="1rem"/>} variant="filled">Share</Button>
                <Button leftIcon={<IconBookmark size="1rem"/>} variant="filled">Save</Button>
            </Button.Group>
        </Stack>

        <Tabs defaultValue="overview">
            <Tabs.List>
                <Tabs.Tab value="overview"><Text px={15} py={10}>Overview</Text></Tabs.Tab>
                <Tabs.Tab value="preview"><Text px={15} py={10}>Preview</Text></Tabs.Tab>
                <Tabs.Tab value="faq"><Text px={15} py={10}>FAQ</Text></Tabs.Tab>
            </Tabs.List>
        </Tabs>

        {/* todo: description, tags, uploaded at,  */}
        {/* todo: like lesson */}
        {/* todo: share via copy link, assign lesson */}
        {/* todo: save lesson for later */}
    </Container>
}
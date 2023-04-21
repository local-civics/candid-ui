import * as React        from 'react';
import {
    Container,
    Title,
    Button,
    Divider,
    Group, Flex, Stack,
    Tooltip,
    useMantineTheme, Card, Text, Menu, ActionIcon, createStyles, rem,
} from '@mantine/core'
import {
    IconPlus,
    IconLayoutKanban, IconDotsVertical, IconAbc, IconArchive,
    IconPresentationAnalytics, IconUserEdit, IconFocusCentered,
}             from '@tabler/icons-react'

const useStyles = createStyles((theme) => {
    return {
        card: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            height: 'max-content',
            width: '20rem',
        },

        section: {
            borderBottom: `${rem(1)} solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            paddingBottom: theme.spacing.md,
        },
    }
})

/**
 * AssignmentListPageProps
 */
export type AssignmentListPageProps = {
    assignments: {title: string, status: "open" | "assigned to me" | "archived"}[]
}

/**
 * AssignmentListPage
 * @param props
 * @constructor
 */
export function AssignmentListPage(props: AssignmentListPageProps){
    const theme = useMantineTheme()
    const {classes} = useStyles()
    const openAssignments = props.assignments.filter(a => a.status === 'open').map(a => {
        return <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section
                sx={(theme) => ({
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: theme.fn.gradient({ from: 'blue.8', to: 'blue.7', deg: 20 }),
                    color: theme.white,
                })}
                px={20} pt={20} pb={50}>
                <Group grow align="start" position="apart" spacing={0}>
                    <Text fz="lg" maw="initial" fw={500}>
                        {a.title}
                    </Text>
                    <Menu
                        transitionProps={{ transition: 'pop' }}
                        withArrow
                        position="bottom-end"
                        withinPortal
                    >
                        <Menu.Target>
                            <ActionIcon variant="transparent" maw="max-content">
                                <IconDotsVertical color="white" size="1rem" stroke={1.5} />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item icon={<IconAbc size="1rem" stroke={1.5} />}>Rename</Menu.Item>
                            <Menu.Item color="red" icon={<IconArchive size="1rem" stroke={1.5} />}>Archive</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group spacing={20}>
                    <Tooltip label="Open assignment">
                        <ActionIcon color="blue"><IconFocusCentered /></ActionIcon>
                    </Tooltip>
                    <Tooltip label="View progress">
                        <ActionIcon color="blue"><IconPresentationAnalytics /></ActionIcon>
                    </Tooltip>
                    <Tooltip label="Edit assignees">
                        <ActionIcon color="blue"><IconUserEdit /></ActionIcon>
                    </Tooltip>
                </Group>
            </Card.Section>
        </Card>
    })

    const assignedToMe = props.assignments.filter(a => a.status === 'assigned to me').map(a => {
        return <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section
                sx={(theme) => ({
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: theme.fn.gradient({ from: 'blue.8', to: 'blue.7', deg: 20 }),
                    color: theme.white,
                })}
                px={20} pt={20} pb={50}>
                <Group grow align="start" position="apart" spacing={0}>
                    <Text fz="lg" maw="initial" fw={500}>
                        {a.title}
                    </Text>
                </Group>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group spacing={20}>
                    <Tooltip label="Open assignment">
                        <ActionIcon color="blue"><IconFocusCentered /></ActionIcon>
                    </Tooltip>
                </Group>
            </Card.Section>
        </Card>
    })

    const archivedAssignments = props.assignments.filter(a => a.status === 'archived').map(a => {
        return <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section
                sx={(theme) => ({
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: theme.fn.gradient({ from: 'blue.8', to: 'blue.7', deg: 20 }),
                    color: theme.white,
                })}
                px={20} pt={20} pb={50}>
                <Group grow align="start" position="apart" spacing={0}>
                    <Text fz="lg" maw="initial" fw={500}>
                        {a.title}
                    </Text>
                </Group>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group spacing={20}>
                    <Tooltip label="Open assignment">
                        <ActionIcon color="blue"><IconFocusCentered /></ActionIcon>
                    </Tooltip>
                    <Tooltip label="View progress">
                        <ActionIcon color="blue"><IconPresentationAnalytics /></ActionIcon>
                    </Tooltip>
                </Group>
            </Card.Section>
        </Card>
    })

    // todo: new assignment action
    // todo: open/check progress assignment action
    // todo: edit assignees action
    // todo: rename assignment action
    // todo: delete assignment action
    return <Container size="lg" pb="xl">
        <Stack spacing={10}>
            <Group>
                <IconLayoutKanban color={theme.colors.dark[4]}/>
                <Title color="dark.4">Assignments</Title>
            </Group>
            <Divider/>
            <Button maw="max-content" variant="subtle" leftIcon={<IconPlus />}>New assignment</Button>
            <Flex mt={10} gap={15}>
                {openAssignments}
            </Flex>
            <Title mt={40} underline size="sm" color="dark.4">Assigned to me</Title>
            <Flex mt={10} gap={15}>
                {assignedToMe}
            </Flex>
            <Title mt={40} underline size="sm" color="dark.4">Archived</Title>
            <Flex mt={10} gap={15}>
                {archivedAssignments}
            </Flex>
        </Stack>
    </Container>
}
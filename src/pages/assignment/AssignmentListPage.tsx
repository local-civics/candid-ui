import {useForm as useMantineForm}       from "@mantine/form";
import {useDisclosure} from "@mantine/hooks";
import * as React      from 'react';
import {
    Container,
    Title,
    Button,
    Divider,
    Group, Flex, Stack,
    Tooltip,
    Modal,
    Card,
    Text,
    ActionIcon,
    Menu,
    Box,
    TextInput,
    useMantineTheme, createStyles, rem, TransferListData,
} from '@mantine/core'
import {
    IconPlus,
    IconLayoutKanban, IconDotsVertical, IconAbc, IconArchive,
    IconPresentationAnalytics, IconUserEdit, IconFocusCentered,
    IconFlag3, IconUserCircle,
}                               from '@tabler/icons-react'
import {PlaceholderBanner}                                   from "../../components/placeholder/PlaceholderBanner";
import {AssignmentTransferList} from "./AssignmentTransferList";

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
    permissionRequired: boolean
    assigneeData: TransferListData,
    assignments: {title: string, status: "open" | "assigned to me" | "archived"}[]
    onSubmit?: (data: TransferListData) => void;
}

/**
 * AssignmentListPage
 * @param props
 * @constructor
 */
export function AssignmentListPage(props: AssignmentListPageProps){
    const theme = useMantineTheme()
    const {classes} = useStyles()
    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm(props.assigneeData, close, props.onSubmit)
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

    if(props.permissionRequired){
        return <Container size="lg" pb="xl">
            <Stack mx="auto" mt={100} maw="max-content" align="center" justify="center" spacing={20} px={30} py={20}>
                <Group mx="auto">
                    <IconFlag3 size={75} color={theme.colors.dark[4]}/>
                </Group>
                <Title size={20} align="center" color="dark.4">Track progress on your assignments</Title>
                <Text align="center" color="dark.4">Sign in to access Assignments</Text>
                <Button variant="filled" color="dark" mx="auto" maw="max-content" leftIcon={<IconUserCircle size={16} />}>Sign in</Button>
            </Stack>
        </Container>
    }

    return <>
        <Modal opened={opened} onClose={close} size="auto" withCloseButton={false} centered>
            <Box maw={400} mx="auto">
                {form}
            </Box>
        </Modal>
        <Container size="lg" pb="xl">
            <Stack spacing={10}>
                <Group>
                    <IconLayoutKanban color={theme.colors.dark[4]}/>
                    <Title color="dark.4">Assignments</Title>
                </Group>
                <Divider/>
                <Button onClick={open} maw="max-content" variant="subtle" leftIcon={<IconPlus />}>New assignment</Button>
                <Flex mt={10} gap={15}>
                    {openAssignments}
                </Flex>
                <Title mt={40} underline size="sm" color="dark.4">Assigned to me</Title>
                <Flex mt={10} gap={15}>
                    {!!assignedToMe.length && assignedToMe}
                    {!assignedToMe.length && <PlaceholderBanner title="Nothing assigned" />}
                </Flex>
                <Title mt={40} underline size="sm" color="dark.4">Archived</Title>
                <Flex mt={10} gap={15}>
                    {!!archivedAssignments.length && archivedAssignments}
                    {!archivedAssignments.length && <PlaceholderBanner title="Nothing archived" />}
                </Flex>
            </Stack>
        </Container>
     </>
}

function useForm(initialAssigneeData: TransferListData, close: () => void, onSubmit?: (data: TransferListData) => void){
    const [assigneeData, setAssigneeData] = React.useState(initialAssigneeData)
    const form = useMantineForm({
        initialValues: {
            stage: 0,
            name: '',
            assignees: [],
        },
    });
    const submit = () => {
        close()
        form.reset()
        onSubmit && onSubmit(assigneeData)
    }

    switch(form.getInputProps('stage').value){
    case 0:
        return <>
            <TextInput
                miw="25rem"
                label="Assignment Name"
                placeholder="Assignment Name"
                {...form.getInputProps('name')}
            />
            <Group mt="lg" spacing={5}>
                <Button variant="outline" type="button" onClick={close}>
                    Cancel
                </Button>
                <Button disabled={!form.getInputProps("name").value} type="button" onClick={() => form.setValues({...form.values, stage: form.values.stage + 1})}>
                    Next
                </Button>
            </Group>
        </>
    default:
        return <>
            <AssignmentTransferList data={initialAssigneeData} onChange={setAssigneeData}/>
            <Group mt="md" spacing={5}>
                <Button variant="outline" type="button" onClick={() => form.setValues({...form.values, stage: form.values.stage - 1})}>
                    Back
                </Button>
                <Button type="submit" onClick={submit}>
                    Submit
                </Button>
            </Group>
        </>
    }
}
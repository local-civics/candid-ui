import {useForm as useMantineForm}       from "@mantine/form";
import { modals } from '@mantine/modals';
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
    TextInput,
    useMantineTheme, createStyles, rem, TransferListData,
} from '@mantine/core'
import {
    IconPlus,
    IconLayoutKanban, IconDotsVertical, IconAbc, IconArchive,
    IconPresentationAnalytics, IconUserEdit, IconFocusCentered,
    IconWorldShare,
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
 * AssignmentData
 */
export type AssignmentData = {title: string, status: "open" | "assigned to me" | "archived"}

/**
 * AssignmentListPageProps
 */
export type AssignmentListPageProps = {
    assignees: TransferListData,
    assignments: AssignmentData[]
    onCreate?: (name: string, assignees: TransferListData) => void;
    onRename?: (data: AssignmentData, newName: string) => void;
    onArchive?: (data: AssignmentData) => void;
    onOpen?: (data: AssignmentData) => void;
    onViewProgress?: (data: AssignmentData) => void;
    onUpdateAssignees?: (newAssignees: TransferListData) => void;
    onGeneratePublicLink?: (data: AssignmentData) => void;
}

/**
 * AssignmentListPage
 * @param props
 * @constructor
 */
export function AssignmentListPage(props: AssignmentListPageProps){
    const theme = useMantineTheme()
    const {classes} = useStyles()
    const form = useForm(props)
    const openAssignments = props.assignments.filter(v => v.status === 'open').map(v => {
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
                        {v.title}
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
                            <Menu.Item icon={<IconAbc size="1rem" stroke={1.5} />}
                                       onClick={() => {
                                           modals.open({
                                               title: 'Rename assignment',
                                               centered: true,
                                               children: <RenameAssignment {...props} data={v} />,
                                           });
                                       }}>
                                Rename
                            </Menu.Item>
                            <Menu.Item color="red" icon={<IconArchive size="1rem" stroke={1.5} />}
                                       onClick={() => {
                                           modals.openConfirmModal({
                                               title: 'Archive assignment',
                                               centered: true,
                                               children: (
                                                   <Text size="sm">
                                                       Are you sure you want to archive your assignment? You will no longer be able to track progress on it.
                                                   </Text>
                                               ),
                                               labels: { confirm: 'Archive assignment', cancel: "No don't archive it" },
                                               confirmProps: { color: 'red' },
                                               onConfirm: () => props.onArchive && props.onArchive(v),
                                           });
                                       }}>
                                Archive
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group spacing={20}>
                    <Tooltip label="Open assignment">
                        <ActionIcon onClick={() => props.onOpen && props.onOpen(v)} color="blue"><IconFocusCentered /></ActionIcon>
                    </Tooltip>
                    <Tooltip label="View progress">
                        <ActionIcon onClick={() => props.onViewProgress && props.onViewProgress(v)} color="blue"><IconPresentationAnalytics /></ActionIcon>
                    </Tooltip>
                    <Tooltip label="Edit assignees">
                        <ActionIcon onClick={form.editAssignees} color="blue"><IconUserEdit /></ActionIcon>
                    </Tooltip>
                    <Tooltip label="Generate public link">
                        <ActionIcon onClick={() => props.onGeneratePublicLink && props.onGeneratePublicLink(v)} color="blue"><IconWorldShare /></ActionIcon>
                    </Tooltip>
                </Group>
            </Card.Section>
        </Card>
    })

    const assignedToMe = props.assignments.filter(v => v.status === 'assigned to me').map(v => {
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
                        {v.title}
                    </Text>
                </Group>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group spacing={20}>
                    <Tooltip label="Open assignment">
                        <ActionIcon onClick={() => props.onOpen && props.onOpen(v)} color="blue"><IconFocusCentered /></ActionIcon>
                    </Tooltip>
                </Group>
            </Card.Section>
        </Card>
    })

    const archivedAssignments = props.assignments.filter(v => v.status === 'archived').map(v => {
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
                        {v.title}
                    </Text>
                </Group>
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group spacing={20}>
                    <Tooltip label="Open assignment">
                        <ActionIcon onClick={() => props.onOpen && props.onOpen(v)} color="blue"><IconFocusCentered /></ActionIcon>
                    </Tooltip>
                </Group>
            </Card.Section>
        </Card>
    })

    return <>
        <Modal opened={form.opened} onClose={close} size="auto" withCloseButton={false} centered>
            {form.children()}
        </Modal>
        <Container size="lg" pb="xl">
            <Stack spacing={10}>
                <Group>
                    <IconLayoutKanban color={theme.colors.dark[4]}/>
                    <Title color="dark.4">Assignments</Title>
                </Group>
                <Divider/>
                <Button onClick={form.open} maw="max-content" variant="subtle" leftIcon={<IconPlus />}>New assignment</Button>
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

function RenameAssignment(props: AssignmentListPageProps & {data: AssignmentData}){
    const [newName, setNewName] = React.useState("")
    const rename = (data: AssignmentData, newName: string) => {
        props.onRename && props.onRename(data, newName)
        setNewName("")
        modals.closeAll()
    }
    return (
        <>
            <TextInput label="New name" defaultValue={props.data.title} placeholder="Assignment name" data-autofocus onChange={(e) => setNewName(e.target.value)} />
            <Button fullWidth onClick={() => rename(props.data, newName)} mt="md">
                Rename
            </Button>
        </>
    )
}

function useForm(props: AssignmentListPageProps){
    const form = useMantineForm({
        initialValues: {
            opened: false,
            stage: 0,
            node: undefined as React.ReactNode,
            name: '',
            assignees: props.assignees,
        },
        transformValues: (values) => {
            return {
                name: values.name,
                assignees: values.assignees,
            }
        },
    });
    const open = () => form.setValues({...form.values, opened: true})
    const close = () => form.setValues({...form.values, opened: false})
    const openStage = (stage: number, node?: React.ReactNode) => form.setValues({...form.values, opened: true, stage, node})
    const previous = () => openStage(form.values.stage - 1)
    const next = () => openStage(form.values.stage + 1)
    const setAssignees = (assignees: TransferListData) => form.setValues({...form.values, assignees})
    const submit = () => {
        close()
        form.reset()
        props.onCreate && props.onCreate(form.values.name, form.values.assignees)
    }

    const cancel = () => {
        close()
        form.reset()
    }

    return {
        opened: form.values.opened,
        open,
        editAssignees: () => openStage(1, <>
            <AssignmentTransferList data={form.values.assignees} onChange={(assignees) => setAssignees(assignees)}/>
            <Group ml="auto" w="max-content" mt="md" spacing={10}>
                <Button variant="outline" type="button" onClick={cancel}>
                    Cancel
                </Button>
                <Button type="submit"
                        onClick={() => {
                            close()
                            form.reset()
                            props.onUpdateAssignees && props.onUpdateAssignees(form.values.assignees)
                        }}>
                    Submit
                </Button>
            </Group>
        </>),
        children: () => {
            if(form.values.node){
                return form.values.node
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
                    <Group ml="auto" w="max-content" mt="md" spacing={10}>
                        <Button variant="default" type="button" onClick={cancel}>
                            Cancel
                        </Button>
                        <Button disabled={!form.getInputProps("name").value} type="button" onClick={next}>
                            Next
                        </Button>
                    </Group>
                </>
            default:
                return <>
                    <AssignmentTransferList data={form.values.assignees} onChange={(assignees) => setAssignees(assignees)}/>
                    <Group ml="auto" w="max-content" mt="md" spacing={10}>
                        <Button variant="outline" type="button" onClick={previous}>
                            Back
                        </Button>
                        <Button type="submit" onClick={submit}>
                            Submit
                        </Button>
                    </Group>
                </>
            }
        }
    }
}
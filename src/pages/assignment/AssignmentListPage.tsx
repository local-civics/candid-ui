import { useForm as useMantineForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import * as React from "react";
import {
  Container,
  Title,
  Button,
  Divider,
  Group,
  Flex,
  Stack,
  Tooltip,
  Card,
  Text,
  ActionIcon,
  Menu,
  TextInput,
  useMantineTheme,
  TransferListData, Autocomplete, AutocompleteItem, Stepper, Center, Loader, CopyButton
} from "@mantine/core";
import {
  IconPlus,
  IconClipboardList,
  IconDotsVertical,
  IconAbc,
  IconArchive,
  IconPlayerPlay,
  IconUserEdit,
  IconAnalyze,
  IconLink, IconMaximize
} from "@tabler/icons-react";
import { PlaceholderBanner } from "../../components/common/placeholder/PlaceholderBanner";
import { DataTransferList } from "../../components/common/data/DataTransferList";
import { AssigneeModel, AssignmentModel } from "../../models/assignment";
import { useAssignmentStyles } from "../../components/assignment/styles";
import { SummaryGrid } from "../../components/common/summary/SummaryGrid";
import { SummaryModel } from "../../components/common/summary/data";
import { Link } from "react-router-dom";
import { TaskModel } from "../../models/task";
import { fqdn } from "../../utils/urls";

/**
 * AssignmentListPageProps
 */
export type AssignmentListPageProps = {
  isLoading?: boolean
  noCreateButton?: boolean
  taskURL?: string
  summary?: SummaryModel;
  taskOptions?: TaskModel[]
  assigneeOptions?: AssigneeModel[],
  items?: AssignmentModel[],
  onCreate?: (name: string, taskURL: string, assignees: AssigneeModel[]) => void;
  onRename?: (data: AssignmentModel, newName: string) => void;
  onArchive?: (data: AssignmentModel) => void;
  onUpdateAssignees?: (data: AssignmentModel, newAssignees: AssigneeModel[]) => void;
};

/**
 * AssignmentListPage
 * @param props
 * @constructor
 */
export function AssignmentListPage(props: AssignmentListPageProps) {
  const theme = useMantineTheme();
  const { classes } = useAssignmentStyles();

  React.useEffect(() => {
    if(!props.isLoading && !!props.taskURL){
      openNewAssignmentModal()
    }
  }, [props.isLoading, props.taskURL])

  const openAssignments = props.items?.filter((v) => !v.isArchived && v.isAssignor)
    .map((v) => {
      return (
        <Card key={v.name} withBorder radius="md" p="md" className={classes.card}>
          <Card.Section
            sx={(theme) => ({
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: theme.fn.gradient({ from: "blue.8", to: "blue.7", deg: 20 }),
              color: theme.white,
            })}
            px={20}
            pt={20}
            pb={50}
          >
            <Group grow align="start" position="apart" spacing={0}>
              <Text fz="lg" maw="initial" fw={500}>
                {v.name}
              </Text>
              <Menu transitionProps={{ transition: "pop" }} withArrow position="bottom-end" withinPortal>
                <Menu.Target>
                  <ActionIcon variant="transparent" maw="max-content">
                    <IconDotsVertical color="white" size="1rem" stroke={1.5} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    icon={<IconAbc size="1rem" stroke={1.5} />}
                    onClick={() => {
                      modals.open({
                        title: <Title mb={5} size={16} color="dark.4">Rename assignment</Title>,
                        centered: true,
                        children: <RenameAssignment {...v} onRename={props.onRename} />,
                      });
                    }}
                  >
                    Rename
                  </Menu.Item>
                  <Menu.Item
                    color="red"
                    icon={<IconArchive size="1rem" stroke={1.5} />}
                    onClick={() => {
                      modals.openConfirmModal({
                        title: <Title mb={5} size={16} color="dark.4">Archive assignment</Title>,
                        centered: true,
                        children: (
                          <Text size="sm">
                            Are you sure you want to archive your assignment? You will no longer be able to track
                            progress on it.
                          </Text>
                        ),
                        labels: { confirm: "Archive assignment", cancel: "No don't archive it" },
                        confirmProps: { color: "red" },
                        onConfirm: () => props.onArchive && props.onArchive(v),
                      });
                    }}
                  >
                    Archive
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group spacing={20}>
              <Tooltip label="Check progress">
                <ActionIcon<typeof Link> component={Link} to={fqdn(v.url)} color="blue">
                  <IconAnalyze />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Preview task">
                <ActionIcon<typeof Link> component={Link} to={fqdn(v.taskURL)} color="blue">
                  <IconMaximize />
                </ActionIcon>
              </Tooltip>
              { !props.noCreateButton && <Tooltip label="Edit assignees">
                <ActionIcon
                  color="blue"
                  onClick={() => {
                    modals.open({
                      title: <Title mb={5} size={16} color="dark.4">Edit assignees</Title>,
                      size: "auto",
                      centered: true,
                      children: <EditAssignees {...v} assigneeOptions={props.assigneeOptions} onUpdateAssignees={props.onUpdateAssignees} />,
                    });
                  }}>
                  <IconUserEdit />
                </ActionIcon>
              </Tooltip>}
              <CopyButton value={fqdn(v.startURL).replace(":start", "/start")}>
                {
                  ({copied, copy}) => <Tooltip label={copied ? "Copied invite link" : "Copy invite link"}>
                    <ActionIcon
                      color={copied ? "teal" : "blue"}
                      onClick={() => {
                        modals.openConfirmModal({
                          title: `Invite makes this assignment publicly accessible`,
                          centered: true,
                          children: (
                            <Text size="sm">
                              Are you sure you want to copy invite for {`${v.name}`}?
                            </Text>
                          ),
                          labels: { confirm: "Copy", cancel: "No don't copy" },
                          confirmProps: { color: "blue" },
                          onConfirm: copy,
                        });
                      }}>
                      <IconLink />
                    </ActionIcon>
                  </Tooltip>
                }
              </CopyButton>
            </Group>
          </Card.Section>
        </Card>
      );
    });

  const assignedToMe = props.items?.filter((v) => !v.isArchived && !v.isAssignor)
    .map((v) => {
      return (
        <Card key={v.name} withBorder radius="md" p="md" className={classes.card}>
          <Card.Section
            sx={(theme) => ({
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: theme.fn.gradient({ from: "blue.8", to: "blue.7", deg: 20 }),
              color: theme.white,
            })}
            px={20}
            pt={20}
            pb={50}
          >
            <Group grow align="start" position="apart" spacing={0}>
              <Text fz="lg" maw="initial" fw={500}>
                {v.name}
              </Text>
            </Group>
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group spacing={20}>
              <Tooltip label="Start assignment">
                <ActionIcon<typeof Link> component={Link} to={fqdn(v.startURL).replace(":start", "/start")} color="blue">
                  <IconPlayerPlay />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Preview task">
                <ActionIcon<typeof Link> component={Link} to={v.taskURL || ""} color="blue">
                  <IconMaximize />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Card.Section>
        </Card>
      );
    });

  const archivedAssignments = props.items?.filter((v) => v.isArchived)
    .map((v) => {
      return (
        <Card key={v.name} withBorder radius="md" p="md" className={classes.card}>
          <Card.Section
            sx={(theme) => ({
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: theme.fn.gradient({ from: "blue.8", to: "blue.7", deg: 20 }),
              color: theme.white,
            })}
            px={20}
            pt={20}
            pb={50}
          >
            <Group grow align="start" position="apart" spacing={0}>
              <Text fz="lg" maw="initial" fw={500}>
                {v.name}
              </Text>
            </Group>
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group spacing={20}>
              { !!v.isAssignor && <Tooltip label="Check progress">
                <ActionIcon<typeof Link> component={Link} to={v.url || ""} color="blue">
                  <IconAnalyze />
                </ActionIcon>
              </Tooltip> }
              <Tooltip label="Preview task">
                <ActionIcon<typeof Link> component={Link} to={v.taskURL || ""} color="blue">
                  <IconMaximize />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Card.Section>
        </Card>
      );
    });

  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }
  const openNewAssignmentModal = () => {
    modals.open({
      title: <Title mb={5} size={16} color="dark.4">New assignment</Title>,
      size: "auto",
      centered: true,
      closeOnClickOutside: !props.taskURL,
      closeOnEscape: !props.taskURL,
      withCloseButton: !props.taskURL,
      children: <CreateAssignment {...props} />,
    });
  }

  return (
    <>
      <Container size="lg" pb="xl">
        <Stack spacing={10}>
          <Group>
            <IconClipboardList color={theme.colors.dark[4]} />
            <Title color="dark.4">Assignments</Title>
          </Group>
          <SummaryGrid data={props.summary}/>
          <Divider />
          { !props.noCreateButton && <Button
            maw="max-content"
            variant="subtle"
            leftIcon={<IconPlus />}
            onClick={openNewAssignmentModal}>
            New assignment
          </Button> }
          <Flex mt={10} gap={15} wrap="wrap">
            {openAssignments}
          </Flex>
          <Title mt={40} underline size="sm" color="dark.4">
            Assigned to me
          </Title>
          <Flex mt={10} gap={15} wrap="wrap">
            {!!assignedToMe?.length && assignedToMe}
            {!assignedToMe?.length && <PlaceholderBanner title="You don't have any tasks assigned." />}
          </Flex>
          { !!archivedAssignments?.length && <>
            <Title mt={40} underline size="sm" color="dark.4">Archived</Title>
            <Flex mt={10} gap={15} wrap="wrap">{archivedAssignments}</Flex>
          </>}
        </Stack>
      </Container>
    </>
  );
}

function CreateAssignment(props: AssignmentListPageProps){
  const form = useMantineForm({
    initialValues: {
      name: "",
      task: "",
      assignees: assigneesToTransferListData(props.assigneeOptions),
      taskURL: props.taskURL,
    },
    transformValues: (values) => {
      return {
        taskURL: values.taskURL,
        name: values.name,
        assignees: values.assignees,
      };
    },
  });

  const [active, setActive] = React.useState(!!props.taskURL ? 1 : 0);
  const [highestStepVisited, setHighestStepVisited] = React.useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if(nextStep <= 0 && !!props.taskURL){
      return
    }

    if(nextStep === -1){
      modals.closeAll()
      form.reset();
      return;
    }

    if(nextStep === 3){
      props.onCreate && props.onCreate(form.values.name, form.values.taskURL || "", form.values.assignees[1] as AssigneeModel[]);
      modals.closeAll()
      form.reset();

      return;
    }

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => {
    const hasTaskURL = !!form.values.taskURL || !!props.taskURL
    const hasName = !!form.values.name

    if(step <= 0 && !!props.taskURL){
      return false
    }

    if(step >= 0 && !hasTaskURL){
      return false
    }

    if(step >= 2 && !hasName){
      return false
    }

    return highestStepVisited >= step && active !== step
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowStep = (step: number) => {
    const hasTaskURL = !!form.values.taskURL || !!props.taskURL
    const hasName = !!form.values.name

    if(step <= 0 && !!props.taskURL){
      return false
    }

    if(step > 0 && !hasTaskURL){
      return false
    }

    return !(step > 2 && !hasName);
  };

  return <>
    <Stepper h="auto" w="auto" size="sm" active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="First step" description="Select a task" allowStepSelect={shouldAllowSelectStep(0)}>
        <Autocomplete
          withAsterisk
          disabled={!!props.taskURL}
          label="Select a task"
          placeholder="Search tasks"
          data={tasksToAutocompleteModel(props.taskOptions)}
          onItemSubmit={(item) => form.setValues({...form.values, taskURL: item.value, task: item.title})}
          filter={(value, item) =>
            item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
            item.title.toLowerCase().includes(value.toLowerCase().trim())
          }
          {...form.getInputProps("task")}
        />
      </Stepper.Step>
      <Stepper.Step label="Second step" description="Set assignees" allowStepSelect={shouldAllowSelectStep(1)}>
        <DataTransferList {...form.getInputProps("assignees")} />
      </Stepper.Step>
      <Stepper.Step label="Final step" description="Set assignment name" allowStepSelect={shouldAllowSelectStep(2)}>
        <TextInput
          withAsterisk
          label="Assignment Name"
          placeholder="Assignment Name"
          {...form.getInputProps("name")}
        />
      </Stepper.Step>
    </Stepper>

    <Group position="center" mt="xl">
      <Button variant="default" onClick={() => handleStepChange(active - 1)}>
        Back
      </Button>
      <Button disabled={!shouldAllowStep(active+1)} onClick={() => handleStepChange(active + 1)}>{active < 2 ? "Next step": "Submit"}</Button>
    </Group>
  </>
}

type RenameAssignmentProps = AssignmentModel & {
  onRename?: (data: AssignmentModel, newName: string) => void;
}

function RenameAssignment(props: RenameAssignmentProps) {
  const [newName, setNewName] = React.useState("");
  return (
    <>
      <TextInput
        label="New name"
        defaultValue={props.name}
        placeholder="Assignment name"
        data-autofocus
        onChange={(e) => setNewName(e.target.value)}
      />
      <Button fullWidth mt="md"
              onClick={() => {
                props.onRename && props.onRename(props, newName);
                modals.closeAll()
              }}>
        Rename
      </Button>
    </>
  );
}

type EditAssigneesProps = AssignmentModel & {
  assigneeOptions?: AssigneeModel[],
  onUpdateAssignees?: (data: AssignmentModel, newAssignees: AssigneeModel[]) => void;
}

function EditAssignees(props: EditAssigneesProps) {
  const [newAssignees, setNewAssignees] = React.useState(assigneesToTransferListData(props.assigneeOptions, props.assignees));
  return <>
    <DataTransferList value={newAssignees} onChange={setNewAssignees} />
    <Group ml="auto" w="max-content" mt="md" spacing={10}>
      <Button variant="outline" type="button" onClick={() => modals.closeAll()}>
        Cancel
      </Button>
      <Button type="submit"
              onClick={() => {
                props.onUpdateAssignees && props.onUpdateAssignees(props, newAssignees[1] as AssigneeModel[]);
                modals.closeAll()
              }}>
        Submit
      </Button>
    </Group>
  </>
}

const tasksToAutocompleteModel = (data?: TaskModel[]) => {
  return (data || []).map(v => {
    return {
      ...v,
      value: v.url,
      label: v.title,
      description: v.description,
      group: v.group,
    }
  }) as AutocompleteItem[]
}

const assigneesToTransferListData = (available?: AssigneeModel[], selected?: AssigneeModel[]) => {
  const cache: Record<string, boolean> = {}
  const selectedItems = (selected || []).map(v => {
    const cacheId = v.url || ""
    cache[cacheId] = true
    return {
      ...v,
      value: v.url,
      label: v.name,
      description: v.description,
      group: v.group
    }
  })

  const availableItems = (available || []).map(v => {
    const cacheId = v.url || ""
    if(cacheId in cache){
      return null
    }

    return {
      ...v,
      value: v.url,
      label: v.name,
      description: v.description,
      group: v.group
    }
  }).filter(v => v)

  return [availableItems, selectedItems] as TransferListData
}
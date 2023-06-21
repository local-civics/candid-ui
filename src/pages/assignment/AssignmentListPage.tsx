import { useForm as useMantineForm, UseFormReturnType } from "@mantine/form";
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
  Modal,
  Card,
  Text,
  ActionIcon,
  Menu,
  TextInput,
  useMantineTheme,
  TransferListData, Autocomplete, AutocompleteItem, Stepper
} from "@mantine/core";
import {
  IconPlus,
  IconClipboardList,
  IconDotsVertical,
  IconAbc,
  IconArchive,
  IconPlayerPlay,
  IconUserEdit,
  IconMaximize,
  IconLink
} from "@tabler/icons-react";
import { PlaceholderBanner } from "../../components/core/placeholder/PlaceholderBanner";
import { DataTransferList } from "../../components/core/data/DataTransferList";
import { AssignmentData } from "../../components/assignment/data";
import { useAssignmentStyles } from "../../components/assignment/styles";
import { SummaryGrid } from "../../components/core/summary/SummaryGrid";
import { SummaryData } from "../../components/core/summary/data";

/**
 * AssignmentListPageProps
 */
export type AssignmentListPageProps = {
  data: {
    isCreateOpen?: boolean
    createAssignmentStep?: number
    summary: SummaryData;
    activities: AutocompleteItem[]
    assignees: TransferListData
    assignments: AssignmentData[];
  }
  onCreate?: (name: string, activity: AutocompleteItem, assignees: TransferListData) => void;
  onRename?: (data: AssignmentData, newName: string) => void;
  onArchive?: (data: AssignmentData) => void;
  onOpen?: (data: AssignmentData) => void;
  onStart?: (data: AssignmentData) => void;
  onUpdateAssignees?: (newAssignees: TransferListData) => void;
  onCopyInviteLink: (data: AssignmentData) => void;
};

/**
 * AssignmentListPage
 * @param props
 * @constructor
 */
export function AssignmentListPage(props: AssignmentListPageProps) {
  const theme = useMantineTheme();
  const { classes } = useAssignmentStyles();
  const form = useForm(props);
  const openAssignments = props.data.assignments
    .filter((v) => v.status === "open")
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
                        title: "Rename assignment",
                        centered: true,
                        children: <RenameAssignment {...props} data={v} />,
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
                        title: "Archive assignment",
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
              <Tooltip label="Open assignment">
                <ActionIcon onClick={() => props.onOpen && props.onOpen(v)} color="blue">
                  <IconMaximize />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Start assignment">
                <ActionIcon onClick={() => props.onStart && props.onStart(v)} color="blue">
                  <IconPlayerPlay />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Edit assignees">
                <ActionIcon onClick={form.editAssignees} color="blue">
                  <IconUserEdit />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Copy invite link">
                <ActionIcon onClick={() => props.onCopyInviteLink && props.onCopyInviteLink(v)} color="blue">
                  <IconLink />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Card.Section>
        </Card>
      );
    });

  const assignedToMe = props.data.assignments
    .filter((v) => v.status === "assigned to me")
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
                <ActionIcon onClick={() => props.onStart && props.onStart(v)} color="blue">
                  <IconPlayerPlay />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Card.Section>
        </Card>
      );
    });

  const archivedAssignments = props.data.assignments
    .filter((v) => v.status === "archived")
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
              <Tooltip label="Open assignment">
                <ActionIcon onClick={() => props.onOpen && props.onOpen(v)} color="blue">
                  <IconMaximize />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Card.Section>
        </Card>
      );
    });

  return (
    <>
      <Modal opened={form.opened} onClose={close} size="auto" withCloseButton={false} centered>
        {form.children()}
      </Modal>
      <Container size="lg" pb="xl">
        <Stack spacing={10}>
          <Group>
            <IconClipboardList color={theme.colors.dark[4]} />
            <Title color="dark.4">Assignments</Title>
          </Group>
          <SummaryGrid data={props.data.summary}/>
          <Divider />
          <Button onClick={form.open} maw="max-content" variant="subtle" leftIcon={<IconPlus />}>
            New assignment
          </Button>
          <Flex mt={10} gap={15}>
            {openAssignments}
          </Flex>
          <Title mt={40} underline size="sm" color="dark.4">
            Assigned to me
          </Title>
          <Flex mt={10} gap={15}>
            {!!assignedToMe.length && assignedToMe}
            {!assignedToMe.length && <PlaceholderBanner title="Nothing assigned" />}
          </Flex>
          <Title mt={40} underline size="sm" color="dark.4">
            Archived
          </Title>
          <Flex mt={10} gap={15}>
            {!!archivedAssignments.length && archivedAssignments}
            {!archivedAssignments.length && <PlaceholderBanner title="Nothing archived" />}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

type RenameAssignmentProps = {
  data: AssignmentData
  onRename?: (data: AssignmentData, newName: string) => void
}

function RenameAssignment(props: RenameAssignmentProps) {
  const [newName, setNewName] = React.useState("");
  const rename = (data: AssignmentData, newName: string) => {
    props.onRename && props.onRename(data, newName);
    setNewName("");
    modals.closeAll();
  };
  return (
    <>
      <TextInput
        label="New name"
        defaultValue={props.data.name}
        placeholder="Assignment name"
        data-autofocus
        onChange={(e) => setNewName(e.target.value)}
      />
      <Button fullWidth onClick={() => rename(props.data, newName)} mt="md">
        Rename
      </Button>
    </>
  );
}

function useForm(props: AssignmentListPageProps) {
  const form = useMantineForm({
    initialValues: {
      opened: props.data.isCreateOpen || false,
      stage: props.data.createAssignmentStep || 0,
      node: undefined as React.ReactNode,
      name: "",
      assignees: props.data.assignees,
      activity: '',
    },
    transformValues: (values) => {
      return {
        name: values.name,
        assignees: values.assignees,
      };
    },
  });
  const open = () => form.setValues({ ...form.values, opened: true });
  const close = () => form.setValues({ ...form.values, opened: false });
  const openStage = (stage: number, node?: React.ReactNode) =>
    form.setValues({ ...form.values, opened: true, stage, node });
  const setAssignees = (assignees: TransferListData) => form.setValues({ ...form.values, assignees });

  const cancel = () => {
    close();
    form.reset();
  };

  return {
    opened: form.values.opened,
    open,
    editAssignees: () =>
      openStage(
        1,
        <>
          <DataTransferList value={form.values.assignees} onChange={(assignees) => setAssignees(assignees)} />
          <Group ml="auto" w="max-content" mt="md" spacing={10}>
            <Button variant="outline" type="button" onClick={cancel}>
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                close();
                form.reset();
                props.onUpdateAssignees && props.onUpdateAssignees(form.values.assignees);
              }}
            >
              Submit
            </Button>
          </Group>
        </>
      ),
    children: () => {
      if (form.values.node) {
        return form.values.node;
      }

      return <AssignmentStepper {...props} form={form} />
    },
  };
}

function AssignmentStepper(props: AssignmentListPageProps & {form: UseFormReturnType<any>}){
  const [active, setActive] = React.useState(props.data.createAssignmentStep || 0);
  const [highestStepVisited, setHighestStepVisited] = React.useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if(nextStep === -1){
      modals.closeAll()
      props.form.reset();
      return;
    }

    if(nextStep === 3){
      modals.closeAll()
      props.form.reset();
      props.onCreate && props.onCreate(props.form.values.name, props.form.values.activity, props.form.values.assignees);
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
    const hasActivity = !!props.form.getInputProps("activity").value
    const hasName = !!props.form.getInputProps("name").value

    if(step >= 0 && !hasActivity){
      return false
    }

    if(step >= 2 && !hasName){
      return false
    }

    return highestStepVisited >= step && active !== step
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowStep = (step: number) => {
    const hasActivity = !!props.form.getInputProps("activity").value
    const hasName = !!props.form.getInputProps("name").value

    if(step > 0 && !hasActivity){
      return false
    }

    if(step > 2 && !hasName){
      return false
    }

    return true
  };

  return <>
    <Stepper h={400} w={600} size="sm" active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="First step" description="Select an activity" allowStepSelect={shouldAllowSelectStep(0)}>
        <Autocomplete
          withAsterisk
          label="Select an activity"
          placeholder="Search activities"
          data={props.data.activities}
          {...props.form.getInputProps("activity")}
        />
      </Stepper.Step>
      <Stepper.Step label="Second step" description="Set assignees" allowStepSelect={shouldAllowSelectStep(1)}>
        <DataTransferList {...props.form.getInputProps("assignees")} />
      </Stepper.Step>
      <Stepper.Step label="Final step" description="Set assignment name" allowStepSelect={shouldAllowSelectStep(2)}>
        <TextInput
          withAsterisk
          label="Assignment Name"
          placeholder="Assignment Name"
          {...props.form.getInputProps("name")}
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
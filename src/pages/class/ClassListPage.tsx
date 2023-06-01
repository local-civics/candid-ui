import * as React from "react";
import {
  ActionIcon, Button,
  Card,
  Container,
  createStyles, Divider, Flex,
  Group,
  Menu,
  Modal, PinInput,
  rem, Stack,
  Text, TextInput, Title,
  Tooltip, TransferListData,
  useMantineTheme
} from "@mantine/core";
import {
  IconAbc,
  IconArchive,
  IconDotsVertical,
  IconClipboardList, IconChalkboard, IconPlus,
  IconUserEdit, IconLink, IconBarcode, IconDoorExit, IconMaximize,
} from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { PlaceholderBanner } from "../../components/core/placeholder/PlaceholderBanner";
import { useForm as useMantineForm } from "@mantine/form";
import { DataTransferList } from "../../components/core/data/DataTransferList";
import { ClassData } from "../../components/class/data";

const useStyles = createStyles((theme) => {
  return {
    card: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      height: "max-content",
      width: "20rem",
    },

    section: {
      borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
  };
});

/**
 * ClassListPageProps
 */
export type ClassListPageProps = {
  data: {members: TransferListData, classes: ClassData[]};
  onCreate?: (name: string, members: TransferListData) => void;
  onJoin?: (code: string) => void;
  onRename?: (data: ClassData, newName: string) => void;
  onArchive?: (data: ClassData) => void;
  onLeave?: (data: ClassData) => void;
  onOpen?: (data: ClassData) => void;
  onOpenAssignments?: (data: ClassData) => void;
  onUpdateMembers?: (newMembers: TransferListData) => void;
  onCopyInviteLink?: (data: ClassData) => void;
};

/**
 * ClassListPage
 * @param props
 * @constructor
 */
export function ClassListPage(props: ClassListPageProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const form = useForm(props);
  const adminClasses = props.data.classes
    .filter((v) => v.status === "admin")
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
                        title: "Rename Class",
                        centered: true,
                        children: <RenameClass {...props} data={v} />,
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
                        title: "Archive Class",
                        centered: true,
                        children: (
                          <Text size="sm">
                            Are you sure you want to archive your class? You will no longer be able to track
                            progress on it.
                          </Text>
                        ),
                        labels: { confirm: "Archive Class", cancel: "No don't archive it" },
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
              <Tooltip label="Open class">
                <ActionIcon onClick={() => props.onOpen && props.onOpen(v)} color="blue">
                  <IconMaximize />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Open assignments">
                <ActionIcon onClick={() => props.onOpenAssignments && props.onOpenAssignments(v)} color="blue">
                  <IconClipboardList />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Edit members">
                <ActionIcon onClick={form.editMembers} color="blue">
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

  const joined = props.data.classes
    .filter((v) => v.status === "member")
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
                    color="red"
                    icon={<IconDoorExit size="1rem" stroke={1.5} />}
                    onClick={() => {
                      modals.openConfirmModal({
                        title: "Leave Class",
                        centered: true,
                        children: (
                          <Text size="sm">
                            Are you sure you want to leave your class? You will no longer be able to work it's assignments.
                          </Text>
                        ),
                        labels: { confirm: "Leave Class", cancel: "No don't leave" },
                        confirmProps: { color: "red" },
                        onConfirm: () => props.onLeave && props.onLeave(v),
                      });
                    }}
                  >
                    Leave
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group spacing={20}>
              <Tooltip label="Open assignments">
                <ActionIcon onClick={() => props.onOpenAssignments && props.onOpenAssignments(v)} color="blue">
                  <IconClipboardList />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Card.Section>
        </Card>
      );
    });

  const archivedClasses = props.data.classes
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
              <Tooltip label="Open assignments">
                <ActionIcon onClick={() => props.onOpenAssignments && props.onOpenAssignments(v)} color="blue">
                  <IconClipboardList />
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
          <Flex>
            <Group w="100%">
              <IconChalkboard color={theme.colors.dark[4]} />
              <Title color="dark.4">Classes</Title>
            </Group>
            <Button onClick={() => form.open(2)} maw="max-content" variant="subtle" leftIcon={<IconBarcode />}>
              Join
            </Button>
          </Flex>
          <Divider />
          <Button onClick={() => form.open(0)} maw="max-content" variant="subtle" leftIcon={<IconPlus />}>
            New class
          </Button>
          <Flex mt={10} gap={15}>
            {adminClasses}
          </Flex>
          <Title mt={40} underline size="sm" color="dark.4">
            Joined
          </Title>
          <Flex mt={10} gap={15}>
            {!!joined.length && joined}
            {!joined.length && <PlaceholderBanner title="No joined classes" />}
          </Flex>
          <Title mt={40} underline size="sm" color="dark.4">
            Archived
          </Title>
          <Flex mt={10} gap={15}>
            {!!archivedClasses.length && archivedClasses}
            {!archivedClasses.length && <PlaceholderBanner title="No archived classes" />}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

type RenameClassProps = {
  data: ClassData
  onRename?: (data: ClassData, newName: string) => void;
}

function RenameClass(props: RenameClassProps) {
  const [newName, setNewName] = React.useState("");
  const rename = (data: ClassData, newName: string) => {
    props.onRename && props.onRename(data, newName);
    setNewName("");
    modals.closeAll();
  };
  return (
    <>
      <TextInput
        label="New name"
        defaultValue={props.data.name}
        placeholder="Class name"
        data-autofocus
        onChange={(e) => setNewName(e.target.value)}
      />
      <Button fullWidth onClick={() => rename(props.data, newName)} mt="md">
        Rename
      </Button>
    </>
  );
}

function useForm(props: ClassListPageProps) {
  const form = useMantineForm({
    initialValues: {
      opened: false,
      stage: -1,
      node: undefined as React.ReactNode,
      name: "",
      members: props.data.members,
      code: "",
    },
    transformValues: (values) => {
      return {
        name: values.name,
        members: values.members,
      };
    },
  });
  const open = (stage?: number) => form.setValues({ ...form.values, opened: true, stage });
  const close = () => form.setValues({ ...form.values, opened: false });
  const openStage = (stage: number, node?: React.ReactNode) =>
    form.setValues({ ...form.values, opened: true, stage, node });
  const previous = () => openStage(form.values.stage - 1);
  const next = () => openStage(form.values.stage + 1);
  const setMembers = (members: TransferListData) => form.setValues({ ...form.values, members });
  const submit = () => {
    close();
    form.reset();
    props.onCreate && props.onCreate(form.values.name, form.values.members);
  };

  const join = () => {
    close();
    form.reset();
    props.onJoin && props.onJoin(form.values.code);
  };

  const cancel = () => {
    close();
    form.reset();
  };

  return {
    opened: form.values.opened,
    open,
    editMembers: () =>
      openStage(
        1,
        <>
          <DataTransferList value={form.values.members} onChange={(members) => setMembers(members)} />
          <Group ml="auto" w="max-content" mt="md" spacing={10}>
            <Button variant="outline" type="button" onClick={cancel}>
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                close();
                form.reset();
                props.onUpdateMembers && props.onUpdateMembers(form.values.members);
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

      switch (form.getInputProps("stage").value) {
        case 0:
          return (
            <>
              <TextInput
                miw="25rem"
                label="Class Name"
                placeholder="Class Name"
                {...form.getInputProps("name")}
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
          );
        case 1:
          return (
            <>
              <DataTransferList value={form.values.members} onChange={(members) => setMembers(members)} />
              <Group ml="auto" w="max-content" mt="md" spacing={10}>
                <Button variant="outline" type="button" onClick={previous}>
                  Back
                </Button>
                <Button type="submit" onClick={submit}>
                  Submit
                </Button>
              </Group>
            </>
          );
        case 2:
          return <>
            <Text size={14} pb={10}>Class code</Text>
            <PinInput
              {...form.getInputProps("code")}
              length={6}
            />
            <Group ml="auto" w="max-content" mt="md" spacing={10}>
              <Button variant="default" type="button" onClick={cancel}>
                Cancel
              </Button>
              <Button disabled={form.values.code.length < 6} type="submit" onClick={join}>
                Join
              </Button>
            </Group>
          </>
        default:
          return null
      }
    },
  };
}

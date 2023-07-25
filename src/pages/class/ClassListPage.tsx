import * as React from "react";
import {
  ActionIcon, Button,
  Card, Center,
  Container, CopyButton,
  createStyles, Divider, Flex,
  Group, Loader,
  Menu,
  PinInput,
  rem, Stack,
  Text, TextInput, Title,
  Tooltip,
  useMantineTheme
} from "@mantine/core";
import {
  IconAbc,
  IconArchive,
  IconDotsVertical,
  IconClipboardList, IconChalkboard, IconPlus,
  IconLink, IconBarcode, IconDoorExit, IconMaximize,
} from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { PlaceholderBanner } from "../../components/common/placeholder/PlaceholderBanner";
import { ClassModel } from "../../models/class";
import { SummaryGrid } from "../../components/common/summary/SummaryGrid";
import { SummaryModel } from "../../components/common/summary/data";
import { Link } from "react-router-dom";
import { fqdn } from "../../utils/urls";

const useStyles = createStyles((theme) => {
  return {
    card: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      height: "max-content",
      width: "20rem",
      minWidth: "20rem",
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
  isLoading?: boolean
  summary?: SummaryModel
  items?: ClassModel[]
  onCreate?: (name: string) => void;
  onJoin?: (code: string) => void;
  onRename?: (data: ClassModel, newName: string) => void;
  onArchive?: (data: ClassModel) => void;
  onLeave?: (data: ClassModel) => void;
};

/**
 * ClassListPage
 * @param props
 * @constructor
 */
export function ClassListPage(props: ClassListPageProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const adminClasses = props.items?.filter((v) => !v.isArchived && !!v.isManager)
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
                        children: <RenameClass {...v} onRename={props.onRename} />,
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
                <ActionIcon<typeof Link> component={Link} to={fqdn(v.url)} color="blue">
                  <IconMaximize />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Open assignments">
                <ActionIcon<typeof Link> component={Link} to={fqdn(v.assignmentsURL)} color="blue">
                  <IconClipboardList />
                </ActionIcon>
              </Tooltip>
              <CopyButton value={fqdn(v.inviteURL).replace(":invite", "/invite")}>
                {
                  ({copied, copy}) => <Tooltip label={copied ? "Copied invite link" : "Copy invite link"}>
                    <ActionIcon onClick={copy} color={copied ? "teal" : "blue"}>
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

  const joined = props.items?.filter((v) => !v.isArchived && !v.isManager)
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
                <ActionIcon<typeof Link> component={Link} to={fqdn(v.assignmentsURL)} color="blue">
                  <IconClipboardList />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Card.Section>
        </Card>
      );
    });

  const archivedClasses = props.items?.filter((v) => !!v.isArchived)
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
                <ActionIcon<typeof Link> component={Link} to={fqdn(v.assignmentsURL)} color="blue">
                  <IconClipboardList />
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

  return (
    <>
      <Container size="lg" pb="xl">
        <Stack spacing={10}>
          <Flex>
            <Group w="100%">
              <IconChalkboard color={theme.colors.dark[4]} />
              <Title color="dark.4">Classes</Title>
            </Group>
            <Button
              maw="max-content"
              variant="subtle"
              leftIcon={<IconBarcode />}
              onClick={() => {
                modals.open({
                  title: <Title mb={5} size={16} color="dark.4">Join class</Title>,
                  size: "auto",
                  centered: true,
                  children: <JoinClass {...props} />,
                });
              }}>
              Join
            </Button>
          </Flex>
          <SummaryGrid data={props.summary}/>
          <Divider />
          <Button
            maw="max-content"
            variant="subtle"
            leftIcon={<IconPlus />}
            onClick={() => {
              modals.open({
                title: <Title mb={5} size={16} color="dark.4">New class</Title>,
                centered: true,
                children: <CreateClass {...props}/>,
              });
            }}>
            New class
          </Button>
          <Flex mt={10} gap={15} wrap="wrap">
            {adminClasses}
          </Flex>
          <Title mt={40} underline size="sm" color="dark.4">
            Joined
          </Title>
          <Flex mt={10} gap={15} wrap="wrap">
            {!!joined?.length && joined}
            {!joined?.length && <PlaceholderBanner title="You have not joined any classes yet." />}
          </Flex>
          { !!archivedClasses?.length && <>
            <Title mt={40} underline size="sm" color="dark.4">Archived</Title>
            <Flex mt={10} gap={15} wrap="wrap">{archivedClasses}</Flex>
          </>}
        </Stack>
      </Container>
    </>
  );
}

function CreateClass(props: ClassListPageProps) {
  const [newName, setNewName] = React.useState("");
  return (
    <>
      <TextInput
        label="New name"
        placeholder="Class name"
        data-autofocus
        onChange={(e) => setNewName(e.target.value)}
      />
      <Button fullWidth mt="md"
              disabled={!newName}
              onClick={() => {
                props.onCreate && props.onCreate(newName);
                modals.closeAll()
              }}>
        Create
      </Button>
    </>
  );
}

type RenameClassProps = ClassModel & {
  onRename?: (data: ClassModel, newName: string) => void;
}

function RenameClass(props: RenameClassProps) {
  const [newName, setNewName] = React.useState("");
  return (
    <>
      <TextInput
        label="New name"
        defaultValue={props.name}
        placeholder="Class name"
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

function JoinClass(props: ClassListPageProps){
  const [code, setCode] = React.useState("")
  return <>
    <Text size={14} pb={10}>Class code</Text>
    <PinInput autoFocus onChange={setCode} length={6}/>
    <Group ml="auto" w="max-content" mt="md" spacing={10}>
      <Button
        variant="default"
        type="button"
        onClick={() => modals.closeAll()}>
        Cancel
      </Button>
      <Button
        disabled={code.length < 6}
        type="submit"
        onClick={() => {
          props.onJoin && props.onJoin(code);
          modals.closeAll()
        }}>
        Join
      </Button>
    </Group>
  </>
}
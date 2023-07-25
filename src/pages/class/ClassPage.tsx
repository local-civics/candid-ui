import * as React from "react";
import { ClassModel, ClassUserModel } from "../../models/class";
import {
  Container, Title, Stack, Divider, Button, Box, Avatar, Menu, Flex, Text,
  useMantineTheme, ActionIcon, Card, Group, Center, Loader, TextInput, Select, CopyButton
} from "@mantine/core";
import {
  IconPlus,
  IconTrash,
  IconUserCircle,
  IconArrowsExchange,
  IconDotsVertical,
  IconRefresh,
  IconCopy,
  IconSum,
  IconUpload,
  IconGripVertical,
  IconRowInsertBottom,
  IconDownload, IconX, IconCloudUpload
} from "@tabler/icons-react";
import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from "mantine-react-table";
import { useMemo } from "react";
import { buildAvatarURL } from "../../utils/avatars";
import { useClassStyles } from "../../components/class/styles";
import { modals } from "@mantine/modals";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useForm } from "@mantine/form";
import { parse, ParseResult, unparse } from "papaparse";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { fqdn } from "../../utils/urls";
import { Link } from "react-router-dom";

/**
 * ClassPageProps
 */
export type ClassPageProps = ClassModel & {
  isLoading?: boolean
  onRefreshCode?: (c: ClassModel) => void;
  onChangeRole?: (c: ClassModel, user: ClassUserModel, isEducator: boolean) => void;
  onRemoveUser?: (c: ClassModel, user: ClassUserModel) => void;
  onBatchAddUsers?: (c: ClassModel, newUsers: ClassUserModel[]) => void;
};

/**
 * ClassPage
 * @param props
 * @constructor
 */
export function ClassPage(props: ClassPageProps) {
  const theme = useMantineTheme();
  const { classes } = useClassStyles();
  const dataKey = JSON.stringify(props.users)
  const columns = useMemo<MRT_ColumnDef<ClassUserModel>[]>(
    () => [
      {
        accessorFn: (row) => row.name, //accessorFn used to join multiple data into a single cell
        id: 'name',
        header: 'Name',
        size: 250,
        Cell: ({ renderedCellValue, row }) => {
          const avatarURL = buildAvatarURL(row.original.avatarURL, row.original.name);

          return <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Avatar size={30} className={classes.userAvatar} src={avatarURL} radius="xl" />
            <span>{renderedCellValue}</span>
          </Box>
        },
        Footer: () => <Flex align="center">
          <IconSum color={theme.colors.dark[4]} size="1rem"/>
          <Text>Count: {Math.round(props.users?.length || 0)}</Text>
        </Flex>
      },
      {
        accessorKey: 'email',
        enableClickToCopy: true,
        header: 'Email',
        size: 300,
      },
      {
        accessorKey: 'role',
        id: 'role',
        header: 'Role',
        filterVariant: "select",
        accessorFn: (originalRow) => originalRow.isEducator ? "Educator" : "Student",
        mantineFilterSelectProps: {
          data: ["Student", "Educator"] as any
        },
        Footer: () => <Flex align="center">
          <IconSum color={theme.colors.dark[4]} size="1rem"/>
          <Text>Students: {Math.round((props.users || []).filter(m => !m.isEducator).length)}</Text>
        </Flex>
      },
      {
        accessorKey: 'status',
        accessorFn: (originalRow) => originalRow.isJoined ? "Active" : "Inactive",
        id: 'status',
        header: 'Status',
        filterVariant: "select",
        mantineFilterSelectProps: {
          data: ["Active", "Inactive"] as any
        },
        size: 200,
        Footer: () => <Flex align="center">
          <IconSum color={theme.colors.dark[4]} size="1rem"/>
          <Text>Active: {Math.round((props.users || []).filter(s => !!s.isJoined).length)}</Text>
        </Flex>
      },
      {
        accessorKey: 'impactStatement',
        header: 'Impact Statement',
        size: 300,
      },
    ],
    [dataKey],
  );

  const table = useMantineReactTable({
    enableColumnOrdering: true,
    enableColumnFilterModes: true,
    enableRowActions: true,
    columns: columns,
    data: props.users || [],
    initialState: { showColumnFilters: true },
    renderRowActionMenuItems: ({row}) => (
    <>
      { !!row.original.isJoined && <Menu.Item
        <typeof Link>
        component={Link}
        to={fqdn(row.original.url)}
        icon={<IconUserCircle size={16} color={theme.colors.dark[4]}/>}
      >View Profile</Menu.Item>}
      <Menu.Item
        icon={<IconArrowsExchange size={16} color={theme.colors.dark[4]} />}
        onClick={() => {
          modals.open({
            title: <Title mb={5} size={16} color="dark.4">{row.original.name}</Title>,
            centered: true,
            children: <ChangeRole {...props} data={row.original} onChangeRole={(u, role) => props.onChangeRole && props.onChangeRole(props, u, role)} />,
          });
        }}
      >Change role</Menu.Item>
      <Menu.Item
        icon={<IconTrash size={16} color={theme.colors.dark[4]}/>}
        onClick={() => {
          modals.openConfirmModal({
            title: <Title mb={5} size={16} color="dark.4">{`Remove ${row.original.name}`}</Title>,
            centered: true,
            children: (
              <Text size="sm">
                Are you sure you want to remove {`${row.original.name}`}?
              </Text>
            ),
            labels: { confirm: "Remove", cancel: "No don't remove" },
            confirmProps: { color: "red" },
            onConfirm: () => props.onRemoveUser && props.onRemoveUser(props, row.original),
          });
        }}
      >Remove</Menu.Item>
    </>
  )})

  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

  return <>
    <Container size="lg" pb="xl">
      <Stack spacing={10}>
        <Title color="dark.4">{props.name}</Title>
        <Divider />
        <Card withBorder radius="md" p="md" className={classes.card}>
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
              <Stack spacing={1}>
                <Text weight={600} size="sm">Class code</Text>
                <Flex align="center" gap={5}>
                  <Title size="xx-large">{props.code}</Title>
                </Flex>
              </Stack>
              <Menu transitionProps={{ transition: "pop" }} withArrow position="bottom-end" withinPortal>
                <Menu.Target>
                  <ActionIcon variant="transparent" maw="max-content">
                    <IconDotsVertical color="white" size="1rem" stroke={1.5} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <CopyButton value={props.code || ""}>
                    {
                      ({copied, copy}) => <Menu.Item
                        closeMenuOnClick={false}
                        icon={<IconCopy size="1rem" stroke={1.5} />}
                        onClick={copy}>
                        { copied ? "Copied code" : "Copy code" }
                      </Menu.Item>
                    }
                  </CopyButton>
                    <Menu.Item
                      icon={<IconRefresh size="1rem" stroke={1.5} />}
                      onClick={() => props.onRefreshCode && props.onRefreshCode(props)}
                    >
                      Refresh code
                    </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Card.Section>
        </Card>

        <Flex>
          <Button
            maw="max-content"
            variant="subtle"
            leftIcon={<IconPlus />}
            onClick={() => {
              modals.open({
                title: <Title mb={5} size={16} color="dark.4">Add students</Title>,
                centered: true,
                children: <AddStudents {...props} onAddStudents={(ns) => props.onBatchAddUsers && props.onBatchAddUsers(props, ns)} />,
              });
            }}>
            Add students
          </Button>
          <Button
            maw="max-content"
            variant="subtle"
            leftIcon={<IconUpload />}
            onClick={() => {
              modals.open({
                title: <Title mb={5} size={16} color="dark.4">Upload csv</Title>,
                centered: true,
                children: <UploadCSV {...props} onUploadCSV={(ns) => props.onBatchAddUsers && props.onBatchAddUsers(props, ns)} />,
              });
            }}>
            Upload csv
          </Button>
        </Flex>

        <MantineReactTable table={table}/>
      </Stack>
    </Container>
  </>
}

/**
 * AddStudentsProps
 */
type AddStudentsProps = {
  onAddStudents?: (newStudents: ClassUserModel[]) => void;
}

/**
 * AddStudents
 * @param props
 * @constructor
 */
function AddStudents(props: AddStudentsProps){
  const form = useForm<{students: ClassUserModel[]}>({
    initialValues: {
      students: [{}],
    },
  });

  const fields = form.values.students.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Flex ref={provided.innerRef} mt="xs" {...provided.draggableProps} gap={5}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size="1.2rem" />
          </Center>
          <TextInput placeholder="John Doe" {...form.getInputProps(`students.${index}.name`)} />
          <TextInput
            placeholder="example@mail.com"
            {...form.getInputProps(`students.${index}.email`)}
          />
        </Flex>
      )}
    </Draggable>
  ));

  return (
    <Stack spacing={5}>
      <Button maw="max-content" variant="subtle" leftIcon={<IconRowInsertBottom />}
              onClick={() => form.insertListItem('students', {})}>
        New row
      </Button>
      <Box maw={500} mx="auto">
        <DragDropContext
          onDragEnd={({ destination, source }) =>
            form.reorderListItem('students', { from: source.index, to: destination ? destination.index : source.index })
          }
        >
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {fields}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
      <Button
        mt={20}
        onClick={() => {
          close();
          form.reset();
          props.onAddStudents && props.onAddStudents(form.values.students);
          modals.closeAll()
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}

/**
 * ChangeRoleProps
 */
type ChangeRoleProps = {
  data: ClassUserModel
  onChangeRole?: (data: ClassUserModel, isEducator: boolean) => void;
}

/**
 * ChangeRole
 * @param props
 * @constructor
 */
function ChangeRole(props: ChangeRoleProps) {
  const [newRole, setNewRole] = React.useState("");
  const changeRole = (data: ClassUserModel, newRole: string) => {
    props.onChangeRole && props.onChangeRole(data, newRole === "educator");
    modals.closeAll();
  };
  return (
    <>
      <Select
        label="New role"
        defaultValue={props.data.isEducator ? "Educator" : "Student"}
        placeholder="Pick one"
        dropdownPosition="bottom"
        mb={50}
        data={[{
          value: "student",
          label: "Student",
        },{
          value: "educator",
          label: "Educator"
        }]}
        onChange={(e) => setNewRole(e || "")}
      />
      <Button type="submit" fullWidth mt="md" onClick={() => changeRole(props.data, newRole)}>
        Submit
      </Button>
    </>
  );
}

/**
 * UploadCSVProps
 */
type UploadCSVProps = {
  onUploadCSV?: (newStudents: ClassUserModel[]) => void;
}

/**
 * UploadCSV
 * @param props
 * @constructor
 */
function UploadCSV(props: UploadCSVProps){
  const { classes, theme } = useClassStyles();
  const openRef = React.useRef<() => void>(null);
  const [loading, setLoading] = React.useState(false)
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setLoading(true)
    acceptedFiles.forEach((file) => {
      parse(file, {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        worker: true,
        complete: function(results: ParseResult<ClassUserModel>) {
          const data = results.data
          data.length > 0 && props.onUploadCSV && props.onUploadCSV(data)
          setLoading(false)
          modals.closeAll()
        }
      })
    })

  }, [])

  return (
    <div className={classes.addStudentsWrapper}>
      <Button mb={10} maw="max-content" variant="subtle" leftIcon={<IconDownload />}
              onClick={() => {
                const csv = unparse([
                  ['name', 'email'],
                  ['John Doe', 'example@mail.com']
                ])
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const filename = "localcivics-template.csv"
                const link = document.createElement("a");
                if (link.download !== undefined) { // feature detection
                  // Browsers that support HTML5 download attribute
                  const url = URL.createObjectURL(blob);
                  link.setAttribute("href", url);
                  link.setAttribute("download", filename);
                  link.style.visibility = 'hidden';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }
              }}>
        Download template
      </Button>

      <Dropzone
        loading={loading}
        openRef={openRef}
        onDrop={onDrop}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.csv]}
        maxSize={5 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload size={50} color={theme.colors[theme.primaryColor][6]} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={50}
                color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text align="center" weight={700} size="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Csv file less than 5mb</Dropzone.Reject>
            <Dropzone.Idle>Upload csv</Dropzone.Idle>
          </Text>
          <Text align="center" size="sm" mt="xs" color="dimmed">
            Drag&apos;n&apos;drop files here to upload. We can accept only <i>.csv</i> files that
            are less than 5mb in size.
          </Text>
        </div>
      </Dropzone>

      <Button className={classes.selectFileBtnControl} size="md" radius="xl" onClick={() => openRef.current?.()}>
        Select file
      </Button>
    </div>
  );
}

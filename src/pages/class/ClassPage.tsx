import * as React from "react";
import { ClassData, ClassMemberData } from "../../components/class/data";
import {
  Container, Title, Stack, Divider, Button, Box, Avatar, Menu, Flex, Text,
  useMantineTheme, ActionIcon, Card, Group,
} from "@mantine/core";
import {
  IconPlus,
  IconTrash,
  IconUserCircle,
  IconArrowsExchange,
  IconDotsVertical, IconLink, IconRefresh, IconCopy, IconSum, IconUpload
} from "@tabler/icons-react";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { buildAvatarURL } from "../../components/core/avatar/helpers";
import { useClassStyles } from "../../components/class/styles";
import { modals } from "@mantine/modals";
import { ChangeRole } from "../../components/class/modal/ChangeRole";
import { AddStudents } from "../../components/class/modal/AddStudents";
import { UploadCSV } from "../../components/class/modal/UploadCSV";

/**
 * ClassPageProps
 */
export type ClassPageProps = ClassData & {
  onCopyCode?: () => void;
  onCopyInviteLink?: () => void;
  onRefreshCode?: () => void;
  onViewProfile?: (data: ClassMemberData) => void;
  onChangeRole?: (data: ClassMemberData, newRole: "student" | "educator") => void;
  onRemove?: (data: ClassMemberData) => void;
  onAddStudents?: (newStudents: ClassMemberData[]) => void;
  onUploadCSV?: (newStudents: ClassMemberData[]) => void;
  onDownloadTemplate?: () => void;
};

/**
 * ClassPage
 * @param props
 * @constructor
 */
export function ClassPage(props: ClassPageProps) {
  const theme = useMantineTheme();
  const { classes } = useClassStyles();
  const columns = useMemo<MRT_ColumnDef<ClassMemberData>[]>(
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
          <Text>Count: {Math.round(props.members.length)}</Text>
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
        accessorFn: (originalRow) => originalRow.role.charAt(0).toUpperCase() + originalRow.role.substr(1).toLowerCase(),
        mantineFilterSelectProps: {
          data: ["Student", "Educator"] as any
        },
        Footer: () => <Flex align="center">
          <IconSum color={theme.colors.dark[4]} size="1rem"/>
          <Text>Students: {Math.round(props.members.filter(m => m.role === 'student').length)}</Text>
        </Flex>
      },
      {
        accessorKey: 'status',
        accessorFn: (originalRow) => originalRow.status.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase()),
        id: 'status',
        header: 'Status',
        filterVariant: "select",
        mantineFilterSelectProps: {
          data: ["Active", "Inactive"] as any
        },
        size: 200,
        Footer: () => <Flex align="center">
          <IconSum color={theme.colors.dark[4]} size="1rem"/>
          <Text>Active: {Math.round(props.members.filter(s => s.status === 'active').length)}</Text>
        </Flex>
      },
      {
        accessorKey: 'numberOfBadgesEarned',
        header: 'Badges Earned',
        filterVariant: 'range',
        size: 100,
        Footer: () => <Flex align="center">
          <IconSum color={theme.colors.dark[4]} size="1rem"/>
          <Text>Sum: {Math.round(props.members.map(s => s.numberOfBadgesEarned).reduce((a, b) => a + b, 0))}</Text>
        </Flex>
      },
      {
        accessorKey: 'numberOfLessonsCompleted',
        header: 'Lessons Completed',
        filterVariant: 'range',
        size: 100,
        Footer: () => <Flex align="center">
          <IconSum color={theme.colors.dark[4]} size="1rem"/>
          <Text>Sum: {Math.round(props.members.map(s => s.numberOfLessonsCompleted).reduce((a, b) => a + b, 0))}</Text>
        </Flex>
      },
      {
        accessorKey: 'impactStatement',
        header: 'Impact Statement',
        size: 300,
      },
    ],
    [],
  );

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
                  <Menu.Item
                    icon={<IconCopy size="1rem" stroke={1.5} />}
                    onClick={props.onCopyCode}
                  >
                    Copy code
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconLink size="1rem" stroke={1.5} />}
                    onClick={props.onCopyInviteLink}
                  >
                    Copy invite link
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconRefresh size="1rem" stroke={1.5} />}
                    onClick={props.onRefreshCode}
                  >
                    Refresh code
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Card.Section>
        </Card>

        <Flex>
          <Button maw="max-content" variant="subtle" leftIcon={<IconPlus />}
                  onClick={() => {
                    modals.open({
                      title: <Title size="medium">Add students</Title>,
                      centered: true,
                      children: <AddStudents {...props} />,
                    });
                  }}>
            Add students
          </Button>
          <Button maw="max-content" variant="subtle" leftIcon={<IconUpload />}
                  onClick={() => {
                    modals.open({
                      title: <Title size="medium">Upload csv</Title>,
                      centered: true,
                      children: <UploadCSV {...props} />,
                    });
                  }}>
            Upload csv
          </Button>
        </Flex>

        <MantineReactTable
          enableColumnOrdering
          enableColumnFilterModes
          enableRowActions
          columns={columns}
          data={props.members}
          initialState={{ showColumnFilters: true }}
          renderRowActionMenuItems={({row}) => (
            <>
              <Menu.Item
                icon={<IconUserCircle size={16} color={theme.colors.dark[4]}/>}
                onClick={() => props.onViewProfile && props.onViewProfile(row.original)}
              >View Profile</Menu.Item>
              <Menu.Item
                icon={<IconArrowsExchange size={16} color={theme.colors.dark[4]} />}
                onClick={() => {
                  modals.open({
                    title: <Title size="medium">{row.original.name}</Title>,
                    centered: true,
                    children: <ChangeRole {...props} data={row.original} />,
                  });
                }}
              >Change role</Menu.Item>
              <Menu.Item
                icon={<IconTrash size={16} color={theme.colors.dark[4]}/>}
                onClick={() => {
                  modals.openConfirmModal({
                    title: `Remove ${row.original.name}`,
                    centered: true,
                    children: (
                      <Text size="sm">
                        Are you sure you want to remove {`${row.original.name}`}?
                      </Text>
                    ),
                    labels: { confirm: "Remove", cancel: "No don't remove" },
                    confirmProps: { color: "red" },
                    onConfirm: () => props.onRemove && props.onRemove(row.original),
                  });
                }}
              >Remove</Menu.Item>
            </>
          )}
        />
      </Stack>
    </Container>
  </>
}

import * as React from "react";
import {
  ActionIcon, Button,
  Card,
  Container, createStyles, Divider,
  Flex,
  Group,
  Menu,
  Modal, PinInput, rem,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import {
  IconBarcode, IconBuildingCommunity, IconDoorExit,
  IconDotsVertical,
} from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { PlaceholderBanner } from "../../components/core/placeholder/PlaceholderBanner";
import { OrganizationData } from "../../components/organization/data";
import { useForm as useMantineForm } from "@mantine/form";

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
 * OrganizationListPageProps
 */
export type OrganizationListPageProps = {
  data: {organizations: OrganizationData[]};
  onJoin?: (code: string) => void;
  onLeave?: (data: OrganizationData) => void;
  onOpen?: (data: OrganizationData) => void;
};

/**
 * OrganizationListPage
 * @param props
 * @constructor
 */
export function OrganizationListPage(props: OrganizationListPageProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const form = useForm(props);

  const joined = props.data.organizations
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
                        title: "Leave Organization",
                        centered: true,
                        children: (
                          <Text size="sm">
                            Are you sure you want to leave your organization? You will no longer be able to access it's content.
                          </Text>
                        ),
                        labels: { confirm: "Leave Organization", cancel: "No don't leave" },
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
              <IconBuildingCommunity color={theme.colors.dark[4]} />
              <Title color="dark.4">Organizations</Title>
            </Group>
            <Button onClick={() => form.open(0)} maw="max-content" variant="subtle" leftIcon={<IconBarcode />}>
              Join
            </Button>
          </Flex>
          <Divider />
          <Title mt={10} underline size="sm" color="dark.4">
            Joined
          </Title>
          <Flex mt={10} gap={15}>
            {!!joined.length && joined}
            {!joined.length && <PlaceholderBanner title="No joined organizations" />}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

function useForm(props: OrganizationListPageProps) {
  const form = useMantineForm({
    initialValues: {
      opened: false,
      stage: -1,
      node: undefined as React.ReactNode,
      name: "",
      code: "",
    },
    transformValues: (values) => {
      return {
        name: values.name,
      };
    },
  });
  const open = (stage?: number) => form.setValues({ ...form.values, opened: true, stage });
  const close = () => form.setValues({ ...form.values, opened: false });
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
    children: () => {
      if (form.values.node) {
        return form.values.node;
      }

      switch (form.getInputProps("stage").value) {
        case 0:
          return <>
            <Text size={14} pb={10}>Organization code</Text>
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

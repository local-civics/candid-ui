import * as React from "react";
import {
  ActionIcon, Button,
  Card, Center,
  Container, CopyButton, createStyles, Divider,
  Flex,
  Group, Loader,
  Menu,
  PinInput, rem,
  Stack,
  Text,
  Title, Tooltip,
  useMantineTheme
} from "@mantine/core";
import {
  IconBarcode, IconBuildingCommunity, IconDoorExit,
  IconDotsVertical, IconLink
} from "@tabler/icons-react";
import { modals } from "@mantine/modals";
import { PlaceholderBanner } from "../../components/common/placeholder/PlaceholderBanner";
import { OrganizationModel } from "../../models/organization";
import { SummaryModel } from "../../components/common/summary/data";
import { SummaryGrid } from "../../components/common/summary/SummaryGrid";
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
 * OrganizationListPageProps
 */
export type OrganizationListPageProps = {
  isLoading?: boolean
  summary?: SummaryModel
  items?: OrganizationModel[];
  onJoin?: (code: string) => void;
  onLeave?: (data: OrganizationModel) => void;
};

/**
 * OrganizationListPage
 * @param props
 * @constructor
 */
export function OrganizationListPage(props: OrganizationListPageProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const joined = props.items?.map((v) => {
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
              <IconBuildingCommunity color={theme.colors.dark[4]} />
              <Title color="dark.4">Organizations</Title>
            </Group>
            <Button
              maw="max-content"
              variant="subtle"
              leftIcon={<IconBarcode />}
              onClick={() => {
                modals.open({
                  title: <Title mb={5} size={16} color="dark.4">Join organization</Title>,
                  centered: true,
                  size: "auto",
                  children: <JoinOrganization {...props}/>,
                });
              }}>
              Join
            </Button>
          </Flex>
          <SummaryGrid data={props.summary}/>
          <Divider />
          <Title mt={10} underline size="sm" color="dark.4">
            Joined
          </Title>
          <Flex mt={10} gap={15} wrap="wrap">
            {!!joined?.length && joined}
            {!joined?.length && <PlaceholderBanner title="You have not joined any organizations yet." />}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

function JoinOrganization(props: OrganizationListPageProps){
    const [code, setCode] = React.useState("")
    return <>
      <Text size={14} pb={10}>Organization code</Text>
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

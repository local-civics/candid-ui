import * as React from "react";
import { Avatar, Menu, createStyles, Text, Button } from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconCertificate2,
  IconUserCircle,
  IconBatteryEco,
  IconAdjustmentsDollar,
  IconChalkboard,
  IconBuildingCommunity,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { buildUserAvatarURL } from "./helpers";
import { UserData } from "./data";
import { useUserStyles } from "./styles";

/**
 * UserAvatarButtonProps
 */
export type UserAvatarButtonProps = UserData & {
  icon?: React.ReactNode;
  onSignIn?: () => void;
}

/**
 * UserAvatarButton
 * @param props
 * @constructor
 */
export function UserAvatarButton(props: UserAvatarButtonProps) {
  const { classes } = useUserStyles();
  if (!props.userFullName || !props.userEmail) {
    return (
      <Button onClick={props.onSignIn} leftIcon={<IconUserCircle size={16} />} variant="outline">
        Sign in
      </Button>
    );
  }

  const avatarURL = buildUserAvatarURL(props.userAvatarURL, props.userFullName);
  return (
    <Menu transitionProps={{ transition: "pop" }} withArrow position="bottom-end" withinPortal>
      <Menu.Target>
        <Avatar size={30} className={classes.userAvatarButton} src={avatarURL} radius="xl" />
      </Menu.Target>
      <Menu.Dropdown>
        <div style={{ minWidth: "12rem", padding: "0.5rem", flex: 1 }}>
          <Text size="sm" weight={500}>
            {props.userFullName}
          </Text>

          <Text color="dimmed" size="xs">
            {props.userEmail}
          </Text>
        </div>
        <Menu.Divider />
        <Menu.Item<typeof Link> component={Link} to="/my/profile" icon={<IconCertificate2 size="1rem" stroke={1.5} />}>
          My profile
        </Menu.Item>
        <Menu.Item<typeof Link> component={Link} to="/my/classes" icon={<IconChalkboard size="1rem" stroke={1.5} />}>
          My classes
        </Menu.Item>
        <Menu.Item<typeof Link>
          component={Link}
          to="/my/organizations"
          icon={<IconBuildingCommunity size="1rem" stroke={1.5} />}
        >
          My organizations
        </Menu.Item>
        <Menu.Item<typeof Link> component={Link} to="/my/settings" icon={<IconSettings size="1rem" stroke={1.5} />}>
          My settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item<typeof Link>
          component={Link}
          to="/upgrade"
          icon={<IconAdjustmentsDollar size="1rem" stroke={1.5} />}
        >
          Upgrade
        </Menu.Item>
        <Menu.Item<typeof Link> component={Link} to="/log-service" icon={<IconBatteryEco size="1rem" stroke={1.5} />}>
          Log service
        </Menu.Item>
        <Menu.Item<typeof Link> component={Link} to="/sign-out" icon={<IconLogout size="1rem" stroke={1.5} />}>
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

import * as React from "react";
import { Avatar, Menu, Text, Button } from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconCertificate2,
  IconUserCircle,
  IconAdjustmentsDollar,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { buildAvatarURL } from "../../utils/avatars";
import { UserModel } from "../../models/user";
import { useUserStyles } from "./styles";

/**
 * UserAvatarButtonProps
 */
export type UserAvatarButtonProps = UserModel & {
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
  if (!props.email) {
    return (
      <Button onClick={props.onSignIn} leftIcon={<IconUserCircle size={16} />} variant="outline">
        Sign in
      </Button>
    );
  }

  const avatarURL = buildAvatarURL(props.avatarURL, (props.fullName || props.email).toUpperCase());
  return (
    <Menu transitionProps={{ transition: "pop" }} withArrow position="bottom-end" withinPortal>
      <Menu.Target>
        <Avatar size={30} className={classes.userAvatarButton} src={avatarURL} radius="xl" />
      </Menu.Target>
      <Menu.Dropdown>
        <div style={{ minWidth: "12rem", padding: "0.5rem", flex: 1 }}>
          <Text size="sm" weight={500}>
            {props.fullName}
          </Text>

          <Text color="dimmed" size="xs">
            {props.email}
          </Text>
        </div>
        <Menu.Divider />
        <Menu.Item<typeof Link> component={Link} to="/profile" icon={<IconCertificate2 size="1rem" stroke={1.5} />}>
          My profile
        </Menu.Item>
        <Menu.Item<typeof Link> component={Link} to="/profile/settings" icon={<IconSettings size="1rem" stroke={1.5} />}>
          My settings
        </Menu.Item>
        <Menu.Item<typeof Link>
          component={Link}
          to="https://www.localcivics.io/trial-upgrade-form"
          icon={<IconAdjustmentsDollar size="1rem" stroke={1.5} />}
        >
          Upgrade
        </Menu.Item>
        <Menu.Item<typeof Link> component={Link} to="/sign-out" icon={<IconLogout size="1rem" stroke={1.5} />}>
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

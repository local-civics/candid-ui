import * as React from "react";
import {
  Loader,
  Center,
  Container,
  Group,
  Text,
  Title,
  Stack,
  Button,
  useMantineTheme
} from "@mantine/core";
import {
  IconEyeExclamation,
  IconUserCircle,
  IconAt
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

/**
 * AuthLayoutProps
 */
export type AuthLayoutProps = {
  children?: React.ReactNode
  isLoading?: boolean;
  isSignInRequired?: boolean;
  isPermissionRequired?: boolean;
  signInRequiredTitle?: string;
  signInRequiredDescription?: string;
  onSignIn?: () => void;
};

/**
 * AuthLayout
 * @param props
 * @constructor
 */
export const AuthLayout = (props: AuthLayoutProps) => {
  return <div style={{ position: "relative" }}>
    <Page {...props} />
  </div>
};

function Page(props: AuthLayoutProps) {
  const theme = useMantineTheme();

  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

  if (props.isSignInRequired) {
    return (
      <Container size="lg" pb="xl">
        <Stack mx="auto" mt={100} maw="max-content" align="center" justify="center" spacing={20} px={30} py={20}>
          <Group mx="auto">
            <IconEyeExclamation size={75} color={theme.colors.dark[4]} />
          </Group>
          {props.signInRequiredTitle && (
            <Title size={20} align="center" color="dark.4">
              {props.signInRequiredTitle}
            </Title>
          )}
          {props.signInRequiredDescription && (
            <Text align="center" color="dark.4">
              {props.signInRequiredDescription}
            </Text>
          )}
          <Button
            variant="filled"
            color="dark"
            mx="auto"
            maw="max-content"
            onClick={props.onSignIn}
            leftIcon={<IconUserCircle size={16} />}
          >
            Sign in
          </Button>
        </Stack>
      </Container>
    );
  }

  if (props.isPermissionRequired) {
    return (
      <Container size="lg" pb="xl">
        <Stack mx="auto" mt={100} maw="max-content" align="center" justify="center" spacing={20} px={30} py={20}>
          <Group mx="auto">
            <IconEyeExclamation size={75} color={theme.colors.dark[4]} />
          </Group>
          <Title size={20} align="center" color="dark.4">
            You don't have permission
          </Title>
          <Text align="center" color="dark.4">
            Contact customer support if you believe you should have access
          </Text>
          <Button<typeof Link>
            component={Link}
            variant="filled"
            color="dark"
            mx="auto"
            maw="max-content"
            to="mailto:support@localcivics.io"
            leftIcon={<IconAt size={16} />}
          >
            Contact us
          </Button>
        </Stack>
      </Container>
    );
  }

  return <>{props.children}</>;
}

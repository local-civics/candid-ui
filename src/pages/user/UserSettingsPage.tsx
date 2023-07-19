import * as React from "react";
import { useForm } from "@mantine/form";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Textarea,
  TextInput,
  Title,
  Text,
  FileInput, Center, Loader
} from "@mantine/core";
import { useUserStyles } from "../../components/user/styles";
import { buildAvatarURL } from "../../components/core/avatar/helpers";
import { UserData } from "../../models/user";
import { IconPhotoEdit } from "@tabler/icons-react";

/**
 * UserSettingsPageProps
 */
export type UserSettingsPageProps = UserData & {
  isLoading?: boolean
  onSubmit?: (user: UserData) => void;
  onEditAvatar?: (file: File | null) => void;
};

/**
 * UserSettingsPage
 * @param props
 * @constructor
 */
export function UserSettingsPage(props: UserSettingsPageProps) {
  const {classes} = useUserStyles()
  const avatarURL = buildAvatarURL(props.avatarURL, props.fullName || props.email, {
    size: 200,
    fontSize: 50,
  });

  const ref = React.useRef<HTMLButtonElement>(null);

  const form = useForm({
    initialValues: props,
    transformValues: (values) => ({
      ...values,
    }),
  });

  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

  return (
    <Container size="lg" pb="xl" pt="lg">
      <Title size={25} color="dark.4">{props.fullName}</Title>
      <Text color="dark.4" size={16}>{props.email}</Text>
      <Box mt={20} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => props.onSubmit && props.onSubmit(values))}
      >
        <Grid>
          <Grid.Col md={4}>
            <div style={{position: "relative", width: "max-content"}}>
              <Avatar size={200} className={classes.userAvatar} src={avatarURL} radius={200} />
              <div style={{position: "absolute", right: "0px", bottom: "20px", zIndex: 5}}>
                <FileInput sx={{display: "none"}} onChange={props.onEditAvatar} ref={ref}/>
                <Button onClick={() => ref.current?.click()} compact variant="default" leftIcon={<IconPhotoEdit size="1rem" />}>
                  Edit
                </Button>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col md={8}>
            <Text color="dark.4" size={16} weight={800}>Profile</Text>
            <Divider mt={5} mb={10}/>
            <TextInput
              label="First name"
              description="What is your first name?"
              placeholder="First name"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              label="Last name"
              description="What is your last name?"
              placeholder="Last name"
              mt="md"
              {...form.getInputProps('lastName')}
            />
            <Textarea
              label="Impact statement"
              description="How would you like to contribute to your community?"
              placeholder="Impact statement"
              minRows={5}
              mt="md"
              {...form.getInputProps('impactStatement')}
            />

            <Button type="submit" mt="xl">
              Update settings
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
    </Container>
  );
}

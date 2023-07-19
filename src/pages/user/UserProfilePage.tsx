import * as React from "react";
import {
  Container,
  Grid,
  Title,
  Text,
  Avatar,
  Stack,
  Button,
  Flex,
  useMantineTheme,
  Divider,
  Center, Loader
} from "@mantine/core";
import { IconAward } from "@tabler/icons-react";
import { buildAvatarURL } from "../../components/core/avatar/helpers";
import { UserData } from "../../models/user";
import { useUserStyles } from "../../components/user/styles";
import {BadgeButton} from "../../components/badge/BadgeButton";
import { TaskData } from "../../models/task";
import { IconBlockquote } from "@tabler/icons-react";

/**
 * UserProfilePageProps
 */
export type UserProfilePageProps = UserData & {
  isLoading?: boolean
  ctaLabel?: string
  onCtaClick?: () => void;
  onBadgeClick?: (badge: TaskData) => void;
};

/**
 * UserProfilePage
 * @param props
 * @constructor
 */
export function UserProfilePage(props: UserProfilePageProps) {
  const theme = useMantineTheme()
  const { classes } = useUserStyles();
  const avatarURL = buildAvatarURL(props.avatarURL, props.fullName || props.email, {
    size: 200,
    fontSize: 50,
  });

  const badgeAchievements = (props.badges || []).map(b => {
    return <BadgeButton
      key={b.url}
      {...b}
      onClick={() => props.onBadgeClick && props.onBadgeClick(b)}
    />
  })

  if (props.isLoading) {
    return (
      <Center style={{ height: 400 }}>
        <Loader />
      </Center>
    );
  }

  return (
    <Container size="lg" pb="xl" pt="lg">
      <Grid>
        <Grid.Col md={4}>
          <Stack>
            <Avatar size={200} className={classes.userAvatar} src={avatarURL} radius={200} />
            <Title color="dark.4">{props.fullName}</Title>
            <Text>{props.email}</Text>
            <Button onClick={props.onCtaClick} type="button">{props.ctaLabel}</Button>
            <Divider/>
            <Flex gap={10} align="center">
              <IconBlockquote color={theme.colors.dark[4]} size={16}/>
              <Text color="dark.4" size={16} weight={800}>My impact statement</Text>
            </Flex>
            <Text>{props.impactStatement || "I haven't set my impact statement yet."}</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col md={8}>
          <Flex align="center" gap={5}>
            <IconAward size={30} color={theme.colors.dark[4]}/>
            <Title size={30} color="dark.4">Achievements</Title>
          </Flex>
          {!badgeAchievements.length && <Text size={18} mt={25}>I don't have any achievements yet.</Text>}
          {!!badgeAchievements.length && <Flex gap={5} py={15} wrap="wrap">
            {badgeAchievements}
          </Flex>}
        </Grid.Col>
      </Grid>
    </Container>
  )
}

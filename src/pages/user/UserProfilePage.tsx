import * as React from "react";
import { Container, Grid, Title, Text, Avatar, Stack, Button, Flex, useMantineTheme, Divider } from "@mantine/core";
import { IconAward } from "@tabler/icons-react";
import { buildUserAvatarURL } from "../../components/user/helpers";
import { UserData } from "../../components/user/data";
import { useUserStyles } from "../../components/user/styles";
import {BadgeButton} from "../../components/badge/BadgeButton";
import { BadgeData } from "../../components/badge/data";
import { IconBlockquote } from "@tabler/icons-react";

/**
 * UserProfilePageProps
 */
export type UserProfilePageProps = UserData & {
  ctaLabel: string
  onCtaClick?: () => void;
  onBadgeClick?: (badge: BadgeData) => void;
};

/**
 * UserProfilePage
 * @param props
 * @constructor
 */
export function UserProfilePage(props: UserProfilePageProps) {
  const theme = useMantineTheme()
  const { classes } = useUserStyles();
  const avatarURL = buildUserAvatarURL(props.userAvatarURL, props.userFullName, {
    size: 200,
    fontSize: 50,
  });

  const badgeAchievements = props.userBadgeAchievements?.map(b => {
    return <BadgeButton
      {...b}
      onClick={() => props.onBadgeClick && props.onBadgeClick(b)}
    />
  })

  return (
    <Container size="lg" pb="xl" pt="lg">
      <Grid>
        <Grid.Col md={4}>
          <Stack>
            <Avatar size={200} className={classes.userAvatar} src={avatarURL} radius={200} />
            <Title color="dark.4">{props.userFullName}</Title>
            <Text>{props.userEmail}</Text>
            <Button onClick={props.onCtaClick} type="button">{props.ctaLabel}</Button>
            <Divider/>
            <Flex gap={10} align="center">
              <IconBlockquote color={theme.colors.dark[4]} size={16}/>
              <Text color="dark.4" size={16} weight={800}>My impact statement</Text>
            </Flex>
            <Text>{props.userImpactStatement || "I haven't set my impact statement yet."}</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col md={8}>
          <Flex align="center" gap={5}>
            <IconAward size={30} color={theme.colors.dark[4]}/>
            <Title size={30} color="dark.4">Achievements</Title>
          </Flex>
          {!badgeAchievements?.length && <Text size={18} mt={25}>I don't have any achievements yet.</Text>}
          {badgeAchievements?.length && <Flex gap={5} py={15} wrap="wrap">
            {badgeAchievements}
          </Flex>}
        </Grid.Col>
      </Grid>
    </Container>
  )
}

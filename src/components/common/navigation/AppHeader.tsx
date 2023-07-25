import * as React from "react";
import {
  Header as MantineHeader,
  TextInput,
  ActionIcon,
  Flex,
  useMantineTheme,
  Group,
  Center,
  Avatar,
  Image,
  Burger,
  createStyles,
} from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
import { UserAvatarButton, UserAvatarButtonProps } from "../../user/UserAvatarButton";

const useStyles = createStyles((theme) => {
  return {
    search: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
  };
});

/**
 * AppHeaderProps
 */
export type AppHeaderProps = UserAvatarButtonProps & {
  initialQuery?: string
  isMenuOpen?: boolean
  onMenuClick?: (next: boolean) => void;
  onSearch?: (q: string) => void;
};

/**
 * AppHeader
 * @param props
 * @constructor
 */
export function AppHeader(props: AppHeaderProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [query, setQuery] = React.useState(props.initialQuery||"");

  return (
    <MantineHeader height={60} px="xl" py="xs">
      <Group position="apart">
        <Group position="apart" spacing="sm">
          <Burger opened={false} onClick={() => props.onMenuClick && props.onMenuClick(!props.isMenuOpen)} size="sm" />
          <Center>
            <Avatar color="blue" radius="sm">
              <div style={{ width: 15, marginLeft: "auto", marginRight: "auto" }}>
                <Image fit="contain" src="https://cdn.localcivics.io/brand/l.png" />
              </div>
            </Avatar>
          </Center>
        </Group>
        <Flex
          className={classes.search}
          w={{ base: 200, sm: "auto" }}
          mx="auto"
          gap="sm"
          justify="center"
          align="center"
        >
          <TextInput
            miw={{ sm: 450 }}
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xl"
            size="md"
            defaultValue={props.initialQuery}
            onKeyUp={(e) => e.key === 'Enter' && props.onSearch && props.onSearch(query)}
            onChange={(e) => setQuery(e.target.value)}
            rightSection={
              <ActionIcon
                onClick={() => props.onSearch && props.onSearch(query)}
                size={32}
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
              >
                <IconArrowRight size="1.1rem" stroke={1.5} />
              </ActionIcon>
            }
            placeholder="Search"
            rightSectionWidth={42}
          />
        </Flex>
        <UserAvatarButton {...props} />
      </Group>
    </MantineHeader>
  );
}

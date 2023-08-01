import * as React from "react";
import {
  IconThumbUp,
  IconStarFilled,
  IconDotsVertical,
  IconBookmark,
  IconTransitionRight,
  IconThumbUpFilled,
} from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Button,
  ActionIcon,
  Flex,
  Spoiler,
  UnstyledButton,
  Menu,
  createStyles,
  rem,
  Box,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { TaskModel } from "../../models/task";
import { TaskIcon } from "./TaskIcon";
import { fqdn } from "../../utils/urls";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: "max-content",
  },

  cardLg: {
    display: 'flex',
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: "max-content",
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  sectionRight: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
    flexBasis: '90%',
  },

  like: {
    color: theme.colors.blue[6],
  },

  rating: {
    color: theme.colors.yellow[6],
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },

  image: {
    cursor: "pointer",
  },
}));

const MIN_RATING = 0;

/**
 * TaskCardProps
 */
export type TaskCardProps = {
  size?: "sm" | "md" | "lg"
  data: TaskModel;
  onLikeClick?: () => void;
  onSave?: () => void;
  onAssign?: () => void;
};

/**
 * TaskCard
 * @param props
 * @constructor
 */
export function TaskCard(props: TaskCardProps) {
  const { classes } = useStyles();
  const rating = props.data.avgRating || 0;
  const LikeIcon = !props.data.userLiked ? IconThumbUp : IconThumbUpFilled;

  if(props.size === "sm"){
    return (
      <Card withBorder radius="md" p="md" pt="xl" className={classes.card}>
        <Card.Section className={classes.section} mt="md">
          <Spoiler
            maxHeight={120}
            hideLabel="Show less"
            showLabel="Show more"
            styles={{
              control: {
                fontSize: "0.9rem",
              },
            }}
          >
            <Box mih={136}>
              <Flex align="start" wrap="nowrap">
                <Text fz="lg" w="100%" fw={500}>
                  {props.data.title}
                </Text>
                <Menu transitionProps={{ transition: "pop" }} withArrow position="bottom-end" withinPortal>
                  <Menu.Target>
                    <ActionIcon maw="max-content">
                      <IconDotsVertical size="1rem" stroke={1.5} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item color={props.data.userSaved ? "blue" : undefined} onClick={props.onSave} icon={<IconBookmark size="1rem" stroke={1.5} />}>
                      { props.data.userSaved ? "Saved for later" : "Save for later"}
                    </Menu.Item>
                    <Menu.Item onClick={props.onAssign} icon={<IconTransitionRight size="1rem" stroke={1.5} />}>
                      Assign
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Flex>
              <Text fz="0.8rem" mt="xs">
                {props.data.description}
              </Text>
            </Box>
          </Spoiler>
        </Card.Section>

        <Group mt="xs">
          <Button<typeof Link>
            component={Link}
            to={fqdn(props.data.url)}
            px={5}
            radius="md"
            style={{ flex: 1 }}
          >
            Show details
          </Button>
          <ActionIcon onClick={props.onLikeClick} variant="default" radius="md" size={36}>
            <LikeIcon size="1.1rem" className={classes.like} stroke={1.5} />
          </ActionIcon>
          {rating > MIN_RATING && (
            <Flex gap="0.2rem" align="center">
              <Text ta="center" fz="sm" className={classes.label}>
                {rating.toFixed(1)}
              </Text>
              <IconStarFilled className={classes.rating} size="0.8rem" />
            </Flex>
          )}
        </Group>
      </Card>
    );
  }

  if(props.size === "lg"){
    return <Card withBorder radius="md" className={classes.cardLg} p={0}>
      <Card.Section w={300} p={0}>
        {!!props.data.iconURL && <UnstyledButton<typeof Link> component={Link} to={props.data.url||""}>
          <Flex sx={{overflow: "hidden"}} py={30} pl={25} h={225} w={300}>
            <TaskIcon {...props.data}/>
          </Flex>
        </UnstyledButton>}

        {!props.data.iconURL && <UnstyledButton<typeof Link> component={Link} to={props.data.url||""}>
          <Image fit="cover" sx={{overflow: "hidden"}} height={225} width={300} className={classes.image} src={props.data.imageURL} alt={props.data.title} />
        </UnstyledButton>}
      </Card.Section>

      <Card.Section className={classes.sectionRight} px={30} pt={20} pb={30} ml={15}>
        <Flex align="start" wrap="nowrap">
          <Text fz="lg" fw={500} lineClamp={1}>
            {props.data.title}
          </Text>
          <Box ml="auto">
            <Menu transitionProps={{ transition: "pop" }} withArrow position="bottom-end" withinPortal>
              <Menu.Target>
                <ActionIcon maw="max-content">
                  <IconDotsVertical size="1rem" stroke={1.5} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item color={props.data.userSaved ? "blue" : undefined} onClick={props.onSave} icon={<IconBookmark size="1rem" stroke={1.5} />}>
                  { props.data.userSaved ? "Saved for later" : "Save for later"}
                </Menu.Item>
                <Menu.Item onClick={props.onAssign} icon={<IconTransitionRight size="1rem" stroke={1.5} />}>
                  Assign
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Flex>
        <Text fz="0.8rem" mt="xs" lineClamp={3} pr={25} mih={60}>
          {props.data.description}
        </Text>

        <Group mt="2rem">
          <ActionIcon onClick={props.onLikeClick} variant="default" radius="md" size={36}>
            <LikeIcon size="1.1rem" className={classes.like} stroke={1.5} />
          </ActionIcon>
          {rating > MIN_RATING && (
            <Flex gap="0.2rem" align="center">
              <Text ta="center" fz="sm" className={classes.label}>
                {rating.toFixed(1)}
              </Text>
              <IconStarFilled className={classes.rating} size="0.8rem" />
            </Flex>
          )}
        </Group>
      </Card.Section>
    </Card>
  }

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        {!!props.data.iconURL && <UnstyledButton<typeof Link> component={Link} to={props.data.url||""}>
          <Flex py={20} px={10} h={180}>
            <TaskIcon {...props.data} size="lg" />
          </Flex>
        </UnstyledButton>}

        {!props.data.iconURL && <UnstyledButton<typeof Link> component={Link} to={props.data.url||""}>
          <Image className={classes.image} src={props.data.imageURL} alt={props.data.title} height={180} />
        </UnstyledButton>}
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Spoiler
          maxHeight={120}
          hideLabel="Show less"
          showLabel="Show more"
          styles={{
            control: {
              fontSize: "0.9rem",
            },
          }}
        >
          <Box mih={136}>
            <Flex align="start" wrap="nowrap">
              <Text fz="lg" w="100%" fw={500}>
                {props.data.title}
              </Text>
              <Menu transitionProps={{ transition: "pop" }} withArrow position="bottom-end" withinPortal>
                <Menu.Target>
                  <ActionIcon maw="max-content">
                    <IconDotsVertical size="1rem" stroke={1.5} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item color={props.data.userSaved ? "blue" : undefined} onClick={props.onSave} icon={<IconBookmark size="1rem" stroke={1.5} />}>
                    { props.data.userSaved ? "Saved for later" : "Save for later"}
                  </Menu.Item>
                  <Menu.Item onClick={props.onAssign} icon={<IconTransitionRight size="1rem" stroke={1.5} />}>
                    Assign
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Flex>
            <Text fz="0.8rem" mt="xs">
              {props.data.description}
            </Text>
          </Box>
        </Spoiler>
      </Card.Section>

      <Group mt="xs">
        <Button<typeof Link>
          component={Link}
          to={fqdn(props.data.url)}
          px={5}
          radius="md"
          style={{ flex: 1 }}
        >
          Show details
        </Button>
        <ActionIcon onClick={props.onLikeClick} variant="default" radius="md" size={36}>
          <LikeIcon size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
        {rating > MIN_RATING && (
          <Flex gap="0.2rem" align="center">
            <Text ta="center" fz="sm" className={classes.label}>
              {rating.toFixed(1)}
            </Text>
            <IconStarFilled className={classes.rating} size="0.8rem" />
          </Flex>
        )}
      </Group>
    </Card>
  );
}

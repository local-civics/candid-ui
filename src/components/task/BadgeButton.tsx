import * as React from "react";
import "external-svg-loader";
import { useDisclosure } from "@mantine/hooks";
import { UnstyledButton, Text, Popover, Container, createStyles, Stack, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { TaskModel } from "../../models/task";
import { TaskIcon } from "./TaskIcon";

const useStyles = createStyles((theme) => {
  return {
    root: {
      marginTop: "-1rem",
      marginLeft: "-1rem",
      maxWidth: "initial",
    },
  };
});

/**
 * BadgeButtonProps
 */
export type BadgeButtonProps = TaskModel & {
  onClick?: () => void;
};

/**
 * BadgeButton
 * @param props
 * @constructor
 */
export function BadgeButton(props: BadgeButtonProps) {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={400} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <UnstyledButton<typeof Link> component={Link} to={props.url||"#"} onMouseEnter={open} onMouseLeave={close} onClick={props.onClick}>
          <TaskIcon {...props}/>
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown onMouseEnter={open} onMouseLeave={close}>
        <Container className={classes.root} fluid size="lg" py="xl">
          <Stack spacing={10}>
            <Title size={18}>{props.title}</Title>
            <Text>{props.description}</Text>
          </Stack>
        </Container>
      </Popover.Dropdown>
    </Popover>
  );
}


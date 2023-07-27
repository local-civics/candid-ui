import React from "react";
import { LogServiceButtonData, FormPropsData } from "./data"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { Form } from "./Form";


/**
 * LogServiceButtonProps
 */
export type LogServiceButtonProps = LogServiceButtonData & {
  onSubmit?: (responses: any) => Promise<any>,
  onClick?: () => void,
};

/**
 * LogServiceButton
 * @param props
 * @constructor
 */
export const LogServiceButton = (props: LogServiceButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(!!props.isOpen);
  const text = props.text || "Log Service";
  const onOpen = () => {
    if (props.onClick) {
      props.onClick();
    }
    setIsOpen(true);
  };
  const onClose = () => {
    if (props.form && props.form.onClose) {
      props.form.onClose();
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    setIsOpen(!!props.isOpen);
  }, [props.isOpen]);

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <>
        <Modal opened={opened} onClose={close}>
          <Form onSubmit={props.onSubmit} {...props.form} onClose={onClose} />
        </Modal>

        <Group position="center">
          <Button onClick={() => { onOpen(); open() }}>{text}</Button>
        </Group>
      </>

    </>
  );
};

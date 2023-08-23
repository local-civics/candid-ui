import React from "react";
import { Modal, Button, Group, Text } from '@mantine/core';
import { Form } from "./Form";
import { modals } from '@mantine/modals';


export type LogServiceButtonData = {
  text?: string,
  isOpen?: boolean,
  form?: FormPropsData,
};

export type FormPropsData = {
  inReview?: boolean;
  showSubmitDialogue?: boolean;
  showExitDialogue?: boolean;
  children?: React.ReactNode;

  onSubmit?: (responses: any) => Promise<any>;
  onClose?: () => void;

}

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

  const text = props.text || "Log Service";

  const onClose = () => {
    if (props.form && props.form.onClose) {
      props.form.onClose();
    }
  };

  const openModal = () => modals.open({
    closeOnClickOutside: false,
    children: (
      <Form onSubmit={props.onSubmit} {...props.form} onClose={onClose} />
    ),
  });

  return (
    <>
      <>
        <Group position="center">
          <Button onClick={openModal}>{text}</Button>
        </Group>
      </>

    </>
  );
};
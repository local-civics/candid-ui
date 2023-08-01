import React from "react"
import { TaskFormatItemModel } from "../../models/task"
import {
    FileInput,
    Checkbox,
    Radio, Select, Title, Text,
    Paper, Flex, TextInput,
    Textarea, Image, Stack, Box, rem, ActionIcon
} from "@mantine/core";
import { TimeInput } from '@mantine/dates';
import { IconCircleCheck, IconUpload, IconZoomIn, IconZoomOut } from "@tabler/icons-react";

/**
 * TaskFormatItemProps
 */
export type TaskFormatItemProps = TaskFormatItemModel & {
    label?: React.ReactNode
    disabled?: boolean
    children?: React.ReactNode;
    stopWatch?: React.ReactNode;

    onResponseChange?: (item: TaskFormatItemModel, responses?: string[], file?: Blob | null) => void;
};

/**
 * TaskFormatItem
 * @param props
 * @constructor
 */
export const TaskFormatItem = (props: TaskFormatItemProps) => {
    const displayName = props.label || props.title
    const responses = props.userAnswer?.responses || [];
    const notEmpty = responses.length > 0 && responses[0].trim() !== "";
    const label = displayName && (
      <Flex align="center" sx={{display: "inline-flex"}} gap={5}>
          {props.format === "question" && <IconCircleCheck
            style={{margin: "-1px", flexShrink: 0}}
            size={24}
            strokeWidth={2}
            color={notEmpty ? "green" : "grey"}
          />}
          <Title order={4}>{displayName}</Title>
      </Flex>
    )

    return (
        <Paper shadow="md" py={40} px={25} withBorder>
            <Box maw={700}>
                <TaskFormatItemSelector {...props} label={label}  />
            </Box>
        </Paper>
    );
};

const TaskFormatItemSelector = (props: TaskFormatItemProps) => {
    switch (true) {
        case !!props.children:
            return <>
                {props.label}
                {!!props.description && <Text size={12} color="dimmed">{props.description}</Text>}
                {props.children}
            </>
        case props.format === "text":
            return <>{props.label}</>
        case props.format === "embed":
            return <EmbedItem {...props} />;
        case props.format === "image":
            return <ImageItem {...props} />;
        case props.questionType === "radio":
            return <RadioQuestion {...props} />;
        case props.questionType === "checkbox":
            return <CheckboxQuestion {...props} />;
        case props.questionType === "drop down":
            return <DropDownQuestion {...props} />;
        case props.questionType === "file upload":
            return <FileUploadQuestion {...props} />;
        case props.questionType === "text":
            return <TextQuestion {...props} />;
        case props.questionType === "date":
            return <DateQuestion {...props} />;
        case props.questionType === "time":
            return <TimeQuestion {...props} />;
        default:
            return null;
    }
};

const RadioQuestion = (props: TaskFormatItemProps) => {
    const options = props.options || [];
    const responses = props.userAnswer?.responses || [];
    const values: { [key: string]: boolean } = {};
    responses.forEach((key) => (values[key] = true));

    return <Radio.Group
      label={props.label}
      description={<Text mb={15}>{props.description}</Text>}
      required={props.required}>
        <Stack spacing={10}>
            {options.map((option, index) => {
                return <Flex
                  key={option}
                  gap="md"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="wrap">
                    <Radio
                      checked={values[option]}
                      onChange={(e) => props.onResponseChange && props.onResponseChange(props,[e.target.value])}
                      required={props.required}
                      value={option}
                      disabled={props.disabled}
                    />
                    <span style={{ fontWeight: 'bold' }}>{String.fromCharCode(65 + index)}.</span> {option}
                </Flex>
            })}
        </Stack>
    </Radio.Group>
};

const CheckboxQuestion = (props: TaskFormatItemProps) => {
    const options = props.options || [];
    const responses = props.userAnswer?.responses || [];
    const ref = React.useRef<HTMLInputElement>(null)
    const values: { [key: string]: boolean } = {};
    const [otherResponse, setOtherResponse] = React.useState(!!responses.length && responses[0].startsWith("Other: ") ? responses[0] : "")
    const [isOtherEnabled, setOtherEnabled] = React.useState(!!otherResponse)
    for (const val of responses) {
        values[val] = true
    }

    const onChange = (v: string[]) => {
        const next = v.filter(v => v && (!isOtherEnabled || !v.startsWith("Other: ")))
        JSON.stringify(responses) !== JSON.stringify(next) && props.onResponseChange && props.onResponseChange(props, next)
    }

    React.useEffect(() => setOtherEnabled(!!ref.current?.checked), [ref.current?.checked])

    React.useEffect(() => {
        const next = responses.filter(v => v && !v.startsWith("Other: "))
        isOtherEnabled && otherResponse && next.push(otherResponse)
        onChange(next)
    }, [otherResponse])

    const isOneChecked = !!Object.keys(values).length;
    return <Checkbox.Group
      label={props.label}
      description={<Text mb={15}>{props.description}</Text>}
      required={props.required}
      onChange={onChange}>
        <Stack spacing={10}>
            {options.map((option) => {
                return <Flex
                  key={option}
                  gap="md"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="wrap">
                    <Checkbox
                      ref={ref}
                      disabled={props.disabled}
                      required={!!props.required && (!isOneChecked && !otherResponse)}
                      checked={values[option] || isOtherEnabled}
                      value={!option && otherResponse || option}
                      label={option || <Stack spacing={1}>Other: <TextInput
                        size="xs"
                        value={otherResponse && otherResponse.substring("Other: ".length)}
                        onChange={(e) => setOtherResponse(e.target.value ? `Other: ${e.target.value}` : "")}
                      /></Stack>}
                    />
                </Flex>
            })}
        </Stack>
    </Checkbox.Group>
};

const DropDownQuestion = (props: TaskFormatItemProps) => {
    return (
        <Select
          label={props.label}
          description={<Text mb={15}>{props.description}</Text>}
          required={props.required}
          disabled={props.disabled}
          onChange={(v) => props.onResponseChange && props.onResponseChange(props, [v||""])}
          data={props.options || []}
        />
    );
};

const FileUploadQuestion = (props: TaskFormatItemProps) => {
    const responses = props.userAnswer?.responses || [];
    const response = responses.length > 0 ? responses[0] : "";

    return <Stack spacing={10}>
        <FileInput
          withAsterisk={props.required}
          label={props.label}
          description={<Text mb={15}>{props.description}</Text>}
          placeholder="Upload a file"
          icon={<IconUpload size={rem(14)}/>}
          disabled={props.disabled}
          onChange={(file) => props.onResponseChange && props.onResponseChange(props, [], file)}
        />

        <TextInput
          type="url"
          withAsterisk={false}
          disabled={props.disabled}
          required={props.required}
          onChange={(e) => props.onResponseChange && props.onResponseChange(props, [e.target.value])}
          value={response}
          placeholder="Paste a url or upload a file above"
        />
    </Stack>;
};

const TextQuestion = (props: TaskFormatItemProps) => {
    const responses = props.userAnswer?.responses || [];
    const response = responses.length > 0 ? responses[0] : "";

    return (
        <>
            {!props.paragraph && (
                <TextInput
                  label={props.label}
                  description={<Text mb={15}>{props.description}</Text>}
                  required={props.required}
                  onChange={(e) => props.onResponseChange && props.onResponseChange(props, [e.target.value])}
                  disabled={props.disabled}
                  placeholder="Your answer"
                  value={response}
                />
            )}
            {props.paragraph && (
                <Textarea
                  minRows={5}
                  label={props.label}
                  description={<Text mb={15}>{props.description}</Text>}
                  required={props.required}
                  onChange={(e) => props.onResponseChange && props.onResponseChange(props, [e.target.value])}
                  disabled={props.disabled}
                  placeholder="Your answer"
                  value={response}
                />
            )}
        </>
    );
};

const DateQuestion = (props: TaskFormatItemProps) => {
    const responses = props.userAnswer?.responses || [];
    const response = responses.length > 0 ? responses[0] : "";

    return (
        <TextInput
          type="date"
          label={props.label}
          description={<Text mb={15}>{props.description}</Text>}
          required={props.required}
          onChange={(e) => props.onResponseChange && props.onResponseChange(props, [e.target.value])}
          disabled={props.disabled}
          placeholder="Select date"
          value={response}
        />
    );
};

const TimeQuestion = (props: TaskFormatItemProps) => {
    const responses = props.userAnswer?.responses || [];
    const response = responses.length > 0 ? responses[0] : "";

    return (
        <TimeInput
          label={props.label}
          description={<Text mb={15}>{props.description}</Text>}
          required={props.required}
          onChange={(e) => props.onResponseChange && props.onResponseChange(props, [e.target.value])}
          disabled={props.disabled}
          value={response}
        />
    );
};

const ImageItem = (props: TaskFormatItemProps) => {
    const [scale, setScale] = React.useState(1);
    return (
        <Stack spacing={10} sx={{overflow: "hidden"}}>
            <Text>{props.label}</Text>
            <Text size={12} color="dimmed" mb={15}>{props.description}</Text>
            <Box sx={{overflow: "hidden"}}>
                <Image
                  sx={{ scale: `${scale}`}}
                  alt={props.url}
                  src={props.url}
                />
            </Box>
            <Flex gap={5}>
                <ActionIcon color="blue" size={24} onClick={() => scale <= 2 && setScale(scale + 0.25)}>
                    <IconZoomIn />
                </ActionIcon>
                <ActionIcon color="blue" size={24} onClick={() => scale > 0.25 && setScale(scale - 0.25)}>
                    <IconZoomOut />
                </ActionIcon>
            </Flex>
        </Stack>
    );
};

const EmbedItem = (props: TaskFormatItemProps) => {
    return (
      <Stack spacing={10} sx={{overflow: "hidden"}}>
        <Text>{props.label}</Text>
        <Text size={12} color="dimmed" mb={15}>{props.description}</Text>
        <iframe
            style={{ width: '100%' }}
            height="315"
            src={props.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
      </Stack>
    );
};

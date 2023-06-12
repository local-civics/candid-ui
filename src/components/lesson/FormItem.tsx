
import React from "react"
import { FormItemData } from "./data"
import { Text, Title, Paper, Button, Flex, createStyles, Grid, TextInput, Input, Group } from "@mantine/core";
import { TimeInput } from '@mantine/dates';
import { IconCircleCheck, IconCircle } from '@tabler/icons-react';

export type FormItemProps = FormItemData & {
    onResponseChange?: (responses?: string[], file?: Blob) => void;
    onTextBlur?: () => void;
};

const useStyles = createStyles((theme) => {
    return {
        paperContainer: {
            width: "75%",
            // padding: "14rem 14rem",
            marginBottom: "6rem",
            marginLeft: "14rem",
            fontFamily: "ProximaNova, Helvetica, Arial, sans-serif",
        },
        formDescription: {
            width: "40%",
        },
        formDescriptionImage: {
            width: "60%",
        },
        display__name: {
            maxWidth: "32rem",
        },
        fieldset__checkbox: {
            border: "none"
        },
        fieldset__label: {
            marginBottom: "3rem"
        },
        embed__container: {
            maxWidth: '35rem',
            width: '35rem',
            [theme.breakpoints.md]: {
                maxWidth: '40rem',
                width: '40rem',
            },
        },
        image__container: {
            position: 'relative',
            // maxWidth: '25rem',
            [theme.breakpoints.md]: {
                maxWidth: '40rem',
                width: '40rem',
            },
            overflow: 'hidden',
        },
        image__conatainer__image: {
            maxHeight: '25rem',
            width: '100%',
            objectFit: 'cover',
        },
        image__conatainer_operators: {
            position: 'absolute',
            borderRadius: '0.25rem',
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.16)',
            bottom: '1.25rem',
            right: '1.25rem',
            zIndex: 5,
            backgroundColor: '#F3F4F6',
            fontWeight: 'bold',
        }
        ,
        test__question: {
            backgroundColor: 'white',
            color: 'var(--slate-500)',
            fontSize: '14px',
            '::placeholder': { color: 'var(--slate-400)' },
            borderColor: 'var(--slate-300)',
            borderRadius: '4px',
            boxShadow: 'var(--shadow-sm)',
            outline: 'none',
            '::focus': {
                color: 'var(--slate-600)',
                borderColor: 'var(--sky-500)',
                boxShadow: 'var(--ring-1) var(--ring-sky-500)',
            },
            ':disabled': {
                backgroundColor: 'var(--slate-50)',
                color: 'var(--gray-600)',
                borderColor: 'var(--slate-200)',
                boxShadow: 'none',
            },
        },
        text__area: {
            resize: "none",
            color: "#6b7280",
            fontSize: "0.875rem",
            height: "6rem",
            marginTop: "0.25rem",
            display: "block",
            width: '98%',
            padding: "0.75rem 1rem",
            backgroundColor: " #ffffff",
            border: "1px solid #6b7280",
            borderRadius: "0.25rem",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            placeholderColor: " #6b7280",

            '::placeholder': { color: 'var(--slate-400)' },
            '::focus': {
                color: "#4b5563",
                outline: "none",
                borderColor: " #3b82f6",
                boxShadow: "0 0 0 1px #3b82f6, 0 0 0 3px rgba(59, 130, 246, 0.5)"
            },
            ':disabled': {
                color: "#9ca3af",
                backgroundColor: " #f9fafb",
                borderColor: " #d1d5db",
                boxShadow: "none",
            },
        }
    };
});

export const FormItem = (props: FormItemProps) => {
    const { classes } = useStyles();

    const responses = props.responses || [];
    const notEmpty = responses.length > 0 && responses[0].trim() !== "";
    const minimum = props.minText !== undefined ? props.minText : 100;
    const isTextError = notEmpty && props.questionType === "text" && responses[0].trim().length < minimum;
    const isValidAnswer = notEmpty && (props.questionType !== "text" || !isTextError);
    const checkIconColor = isValidAnswer ? <IconCircleCheck
        size={24}
        strokeWidth={2}
        color={'#40bf42'}
    /> : <IconCircleCheck
        size={24}
        strokeWidth={2}
        color={'black'}
    />
    const contentMaxWidth = props.format === "question" ? "max-w-lg" : "";
    const [showError, setShowError] = React.useState(false);
    const itemContainerError = showError && isTextError ? "border-2 border-rose-300" : "";

    const onTextBlur = () => {
        if (isTextError) {
            setShowError(true);
        } else {
            setShowError(false);
        }

        if (props.onTextBlur) {
            props.onTextBlur();
        }
    };

    React.useEffect(() => {
        if (!isTextError) {
            setShowError(false);
        }
    }, [isTextError]);


    return (
        <Paper className={classes.paperContainer} shadow="md" p="xl" withBorder>
            {props.displayName && (
                <Flex gap="md" justify="flex-start" align="flex-start" direction="row" wrap="nowrap">
                    <Flex gap="md" justify="flex-start" align="flex-start" direction="row" wrap="nowrap" >
                        {props.format === "question" && (
                            <div>
                                {checkIconColor}
                            </div>
                        )}
                        <div>
                            {props.displayName && (
                                <Title order={4} style={{ marginBottom: "1rem" }}>
                                    {(props.displayName)}
                                </Title>
                            )}
                            {props.description && (
                                <Text fz="sm">{(props.description)}</Text>
                            )}
                        </div>
                    </Flex>
                    {props.required && <Text c='red' fz="sm">*</Text>}
                </Flex>
            )}

            {!props.children && props.format !== "text" && (
                <div>
                    <Switch {...props} onTextBlur={onTextBlur} />
                    {showError && (
                        <div>
                            <div>
                                <IconCircleCheck
                                    size={24}
                                    strokeWidth={2}
                                    color={'red'}
                                />
                            </div>
                            <span>Must be a minimum of {minimum} characters.</span>
                        </div>
                    )}
                </div>
            )}

            {props.children}
        </Paper>
    );
};

const Switch = (props: FormItemProps) => {
    switch (true) {
        case props.format === "embed":
            return <Embed {...props} />;
        case props.format === "image":
            return <Image {...props} />;
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

const RadioQuestion = (props: FormItemProps) => {
    const { classes } = useStyles()
    const options = props.options || [];
    const responses = props.responses || [];
    const values: { [key: string]: boolean } = {};
    responses.forEach((key) => (values[key] = true));

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onResponseChange) {
            props.onResponseChange([e.target.value]);
        }
    };

    return (
        <Grid >
            <fieldset>
                {options.map((option, index) => {
                    return (
                        <div key={option}>
                            <label>
                                <Flex gap="md"
                                    justify="flex-start"
                                    align="center"
                                    direction="row"
                                    wrap="wrap">
                                    <input
                                        checked={values[option]}
                                        onChange={onChange}
                                        required={props.required}
                                        type="radio"
                                        value={option}
                                        disabled={props.disabled}
                                        name={displayNameString(props.displayName)}
                                    />
                                    <div>
                                        <span style={{ fontWeight: 'bold' }}>{String.fromCharCode(65 + index)}.</span> {option}
                                    </div>
                                </Flex>

                            </label>
                        </div>
                    );
                })}
            </fieldset>
        </Grid >

    );
};

const CheckboxQuestion = (props: FormItemProps) => {
    const { classes } = useStyles()
    const options = props.options || [];
    const responses = props.responses || [];
    const values: { [key: string]: boolean } = {};
    let rawResponse: string = "";
    for (const val of responses) {
        if (val.startsWith("Other: ")) {
            rawResponse = val;
            break
        }
    };



    const response = rawResponse && rawResponse.replace("Other: ", "");
    const isOtherResponse = rawResponse && rawResponse.startsWith("Other: ");

    responses.forEach((key) => (values[key] = true));

    const onOtherChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setResponseValue(e.target.value ? `Other: ${e.target.value}` : "");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setResponseValue(e.target.value);
    const setResponseValue = (value: string) => {
        if (value && props.onResponseChange) {
            const newResponses = [];
            responses.forEach((v) => {

                const outOfScope = !(v.startsWith("Other: ") && value.startsWith("Other: ")) && v !== value;
                if (outOfScope) {
                    newResponses.push(v);
                }
            });

            if (!responses.includes(value)) {
                newResponses.push(value);
            }

            props.onResponseChange(newResponses);
        }
    };
    let isOneChecked = false;
    React.useEffect(() => { }, []);

    return (
        <Grid>
            <fieldset className={classes.fieldset__checkbox}>
                {options.map((option) => {
                    isOneChecked = Object.keys(values).length ? true : false;
                    return (
                        <div key={option} className={classes.fieldset__label}>
                            <label >
                                <Flex gap="md" justify="flex-start" align="center" direction="row" wrap="wrap">
                                    <input
                                        id="checkbox"
                                        disabled={props.disabled}
                                        required={option ? props.required && !isOneChecked && !!isOtherResponse : props.required && !isOneChecked}
                                        checked={values[option] || (!option && values[`Other: ${response}`])}
                                        onChange={option ? onChange : onOtherChange}
                                        type="checkbox"
                                        value={option || response}
                                        name={displayNameString(props.displayName)}
                                    />
                                    {option && <div>{option}</div>}
                                    {!option && (
                                        <>
                                            Other:{" "}
                                            <input

                                                value={isOtherResponse ? response : ""}
                                                required={props.required && !isOneChecked}
                                                disabled={props.disabled}
                                                onChange={onOtherChange}
                                                placeholder="Input another option"

                                            />
                                        </>
                                    )}
                                </Flex>

                            </label>
                        </div>
                    );
                })}
            </fieldset>
        </Grid>

    );
};

const DropDownQuestion = (props: FormItemProps) => {
    const options = props.options || [];
    const responses = props.responses || [];
    const values: { [key: string]: boolean } = {};
    responses.forEach((key) => (values[key] = true));

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.onResponseChange) {
            props.onResponseChange([e.target.value]);
        }
    };

    return (
        <select
            disabled={props.disabled}
            required={props.required}
            name={displayNameString(props.displayName)}
            onChange={onChange}
        >
            <option value="">
                Select one
            </option>

            {options.map((option) => {
                return (
                    <option key={option} selected={values[option]} value={option}>
                        {option}
                    </option>
                );
            })}
        </select>
    );
};

const FileUploadQuestion = (props: FormItemProps) => {
    const responses = props.responses || [];
    const response = responses.length > 0 ? responses[0] : "";
    const [imageURL, setImageURL] = React.useState(response);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onResponseChange) {
            props.onResponseChange([e.target.value]);
        }
    };
    const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        reader.onloadend = () => {
            if (typeof reader.result === "string") {
                setImageURL(reader.result);
                if (props.onResponseChange) {
                    props.onResponseChange(undefined, file);
                }
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    React.useEffect(() => {
        setImageURL(response);
    }, [props.questionId, response]);

    return (
        <Grid gutter="md">
            <Grid.Col span={12}>
                <Group align="center" spacing="xs">
                    <label >
                        <span>Choose image photo</span>
                        <input
                            disabled={props.disabled}
                            onChange={onImageUpload}
                            name="image"
                            type="file"
                            className=""
                        />
                    </label>
                </Group >

                <div>
                    <input
                        type="url"
                        disabled={props.disabled}
                        name={displayNameString(props.displayName)}
                        required={props.required}
                        onChange={onChange}
                        value={imageURL}
                        placeholder="Paste a url or select a file above"

                    />
                </div>
            </Grid.Col>

        </Grid>
    );
};

const TextQuestion = (props: FormItemProps) => {
    const { classes } = useStyles()
    const minimum = props.minText !== undefined ? props.minText : 100;
    const responses = props.responses || [];
    const response = responses.length > 0 ? responses[0] : "";

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (props.onResponseChange) {
            props.onResponseChange([e.target.value]);
        }
    };

    return (
        <>
            {!props.paragraph && (
                <Input
                    className={classes.test__question}
                    required={props.required}
                    minLength={minimum}
                    onChange={onChange}
                    onBlur={props.onTextBlur}
                    name={displayNameString(props.displayName)}
                    disabled={props.disabled}
                    type="text"
                    placeholder="Your answer"
                    value={response}

                />
            )}
            {props.paragraph && (
                <textarea
                    className={classes.text__area}
                    required={props.required}
                    minLength={minimum}
                    onChange={onChange}
                    onBlur={props.onTextBlur}
                    name={displayNameString(props.displayName)}
                    disabled={props.disabled}
                    value={response}
                    placeholder="Your answer"
                />
            )}
        </>
    );
};

const DateQuestion = (props: FormItemProps) => {
    const responses = props.responses || [];
    const response = responses.length > 0 ? responses[0] : "";

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (props.onResponseChange) {
            props.onResponseChange([e.target.value]);
        }
    };

    return (
        <TextInput
            style={{ width: '100%' }}
            radius="sm"
            size="sm"
            placeholder="Select date"
            required={props.required}
            onChange={onChange}
            name={displayNameString(props.displayName)}
            disabled={props.disabled}
            type="date"
            value={response}
        />
    );
};

const TimeQuestion = (props: FormItemProps) => {
    const responses = props.responses || [];
    const response = responses.length > 0 ? responses[0] : "";

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (props.onResponseChange) {
            props.onResponseChange([e.target.value]);
        }
    };

    return (
        <TimeInput
            required={props.required}
            onChange={onChange}
            name={displayNameString(props.displayName)}
            disabled={props.disabled}
            value={response}
        />
    );
};

const Image = (props: FormItemProps) => {
    const { classes } = useStyles()
    const [scale, setScale] = React.useState(1);
    const scaleUp = () => {
        if (scale <= 2) {
            setScale(scale + 0.25);
        }


    };

    const scaleDown = () => {
        if (scale < 0.25) {
            setScale(scale - 0.25);
        }
    };
    const styleObj = {
        scale: `${scale}`
    }

    console.log(`${scale}`)
    return (
        <div className={classes.image__container}>
            <img
                referrerPolicy="no-referrer"
                className={classes.image__conatainer__image}
                style={{ ...styleObj }}
                alt={displayNameString(props.displayName)}
                src={props.url}
            />
            <div className={classes.image__conatainer_operators}>
                <Button onClick={scaleUp}>
                    +
                </Button>
                <Button onClick={scaleDown}>
                    -
                </Button>
            </div>
        </div>
    );
};

const Embed = (props: FormItemProps) => {
    const { classes } = useStyles();
    return (
        <div className={classes.embed__container}>
            <iframe
                style={{ width: '100%' }}
                height="315"
                src={props.url}
                title={displayNameString(props.displayName)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

const displayNameString = (displayName: React.ReactNode) => {
    if (!displayName) {
        return "";
    }

    return displayName.toString();
};

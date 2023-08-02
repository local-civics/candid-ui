import React from "react";
import { FormPropsData } from "./data"
import { FormInput } from "./FormInput";
import { Button, Grid, createStyles } from '@mantine/core';

/**
 * FormProps
 */
export type FormProps = FormPropsData & {
    onSubmit?: (responses: any) => Promise<any>;
    onClose?: () => void;
};

/**
 * Form
 * @param props
 * @constructor
 */

const useStyles = createStyles((theme) => ({
    continueButton: {
        marginTop: "0.5rem"
    },
    logService: {
        fontWeight: "bold"
    }

}));

export const Form = (props: FormProps) => {
    const { classes } = useStyles()

    const [showExitDialogue, setShowExitDialogue] = React.useState(!!props.showExitDialogue);
    const [showSubmitDialogue, setShowSubmitDialogue] = React.useState(!!props.showSubmitDialogue);
    const [responses, setResponses] = React.useState({} as any);
    const [inReview, setInReview] = React.useState(!!props.inReview);
    const setResponse = (key: string, value: string) => {
        setResponses({ ...responses, [key]: value });
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inReview) {
            setInReview(true);
        } else if (inReview && props.onSubmit) {
            props.onSubmit(responses).then((err) => {
                if (!err) {
                    setShowSubmitDialogue(true);
                }
            });
        }
    };

    React.useEffect(() => setInReview(!!props.inReview), [props.inReview]);
    React.useEffect(() => setShowExitDialogue(!!props.showExitDialogue), [props.showExitDialogue]);
    React.useEffect(() => setShowSubmitDialogue(!!props.showSubmitDialogue), [props.showSubmitDialogue]);

    return (
        <>

            <div>
                <div>
                    <div>
                        <div>
                            <p className={classes.logService}>Service Log</p>
                            <p>
                                {inReview ? "Please review your submission." : "Tell us about your service below."}
                            </p>
                        </div>

                        <form onSubmit={onSubmit}>
                            {props.children}

                            {!props.children && (
                                <>
                                    <div>
                                        <Grid>
                                            <Grid.Col span={6}>
                                                <FormInput
                                                    required
                                                    readonly={inReview}
                                                    headline="Organization Name"
                                                    value={responses["organizationName"]}
                                                    onChange={(value) => setResponse("organizationName", value)}
                                                />
                                            </Grid.Col>
                                            <Grid.Col span={6}>
                                                <FormInput
                                                    readonly={inReview}
                                                    headline="Contact Person"
                                                    value={responses["contactPerson"]}
                                                    onChange={(value) => setResponse("contactPerson", value)}
                                                />
                                            </Grid.Col>
                                        </Grid>
                                        <Grid>
                                            <Grid.Col span={6}>
                                                <FormInput
                                                    readonly={inReview}
                                                    headline="Contact Phone Number"
                                                    type="tel"
                                                    value={responses["contactPhoneNumber"]}
                                                    onChange={(value) => setResponse("contactPhoneNumber", value)}
                                                />
                                            </Grid.Col>
                                            <Grid.Col span={6}>
                                                <FormInput
                                                    readonly={inReview}
                                                    headline="Contact Email"
                                                    type="email"
                                                    value={responses["contactEmail"]}
                                                    onChange={(value) => setResponse("contactEmail", value)}
                                                />
                                            </Grid.Col>
                                        </Grid>
                                        <Grid>
                                            <Grid.Col span={4}>
                                                <FormInput
                                                    required
                                                    readonly={inReview}
                                                    headline="Service Date"
                                                    type="date"
                                                    value={responses["date"]}
                                                    onChange={(value) => setResponse("date", value)}
                                                />
                                            </Grid.Col>

                                            <Grid.Col span={4}>
                                                <FormInput
                                                    required
                                                    readonly={inReview}
                                                    headline="Service Hours"
                                                    min={0}
                                                    max={24}
                                                    type="number"
                                                    value={responses["totalHours"]}
                                                    onChange={(value) => setResponse("totalHours", value)}
                                                />
                                            </Grid.Col>
                                            <Grid.Col span={4}>
                                                <FormInput
                                                    required
                                                    readonly={inReview}
                                                    headline="Service Type"
                                                    type="dropdown"
                                                    value={responses["type"]}
                                                    options={["Community Service", "Capstone", "Internship", "Project", "Other"]}
                                                    onChange={(value) => setResponse("type", value)}
                                                />

                                            </Grid.Col>
                                        </Grid>
                                        <div>
                                            <FormInput
                                                required
                                                readonly={inReview}
                                                headline="Tell us about your experience"
                                                paragraph
                                                value={responses["description"]}
                                                onChange={(value) => setResponse("description", value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-x-4 w-max m-auto">
                                        {inReview && (
                                            <Button onClick={() => setInReview(false)} color="dark-blue" size="md"
                                            >
                                                Edit
                                            </Button>
                                        )}
                                        <Button className={classes.continueButton} color="dark-blue" size="md">
                                            {inReview ? "Submit" : "Continue"}
                                        </Button>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

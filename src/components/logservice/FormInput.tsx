import React from "react";
import { FormInputData } from "./data"

import { Input, Select, Textarea } from '@mantine/core';

/**
 * FormInputProps
 */
export type FormInputProps = FormInputData & {
    onChange?: (value: string) => void;
};

/**
 * FormInput
 * @param props
 * @constructor
 */

export const FormInput = (props: FormInputProps) => {
    return (
        <div >
            {props.headline && (
                <div>
                    <div>
                        <div>
                            {props.headline && <p>{""}</p>}
                            {props.summary && <p>{props.summary}</p>}
                        </div>
                    </div>
                </div>
            )}

            <div>
                {(() => {
                    switch (props.type) {
                        case "dropdown":
                            return <DropDownInput {...props} />;
                        default:
                            return <InputLocal {...props} />;
                    }
                })()}
            </div>
        </div>
    );
};

const DropDownInput = (props: FormInputProps) => {

    const options = props.options || [];

    const onChange = (value: string) => {
        if (props.onChange) {
            props.onChange(value);
        }
    };


    return (
        <Select
            label={props.headline}
            disabled={props.readonly}
            required={props.required}
            data={options}
            onChange={onChange}
        >
        </Select>
    );
};

const InputLocal = (props: FormInputProps) => {
    const type = props.readonly ? "text" : props.type;
    const value = props.readonly ? props.value || "N/A" : props.value;
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (props.onChange) {
            props.onChange(e.target.value);
        }
    };
    return (
        <>
            {!props.paragraph && (
                <Input.Wrapper
                    id="input"
                    withAsterisk={!props.readonly && props.required}
                    label={props.headline}
                    error=""
                    style={{ paddingBottom: "1rem" }}
                >
                    <Input
                        id="input"
                        required={props.required}
                        disabled={props.readonly}
                        onChange={onChange}
                        type={type}
                        placeholder={props.placeholder}
                        value={value}

                    />
                </Input.Wrapper>



            )}
            {props.paragraph && (
                <Textarea
                    label={props.headline}
                    disabled={props.readonly}
                    required={props.required}
                    onChange={onChange}
                    value={value}
                    placeholder={props.placeholder}
                />
            )}
        </>
    );
};
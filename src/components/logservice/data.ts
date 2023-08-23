

export type LogServiceButtonData = {
    text?: string,
    isOpen?: boolean,
    form?: FormPropsData,
  };
  
export type FormInputData={
    headline?: string;
    summary?: string;
    value?: string;
    type?: "text" | "number" | "tel" | "email" | "date" | "dropdown";
    options?: string[];
    placeholder?: string;
    paragraph?: boolean;
    readonly?: boolean;
    required?: boolean;
    min?: string | number;
    max?: string | number;
}
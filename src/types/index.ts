export type Operator = "digit" | "operator" | "actions";

export type Button = {
    value: string;
    type: Operator;
};
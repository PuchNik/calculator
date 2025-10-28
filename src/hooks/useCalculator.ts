import { useState } from "react";
import { calculate } from "../utils/calculator";

export const useCalculator = () => {
    const [operand1, setOperand1] = useState("");
    const [operand2, setOperand2] = useState("");
    const [operator, setOperator] = useState("");
    const [display, setDisplay] = useState("0");

    const handleInput = (value: string) => {
        if (value >= "0" && value <= "9") {
            if (operator === "") {
                setOperand1((prev) => prev + value);
                setDisplay((prev) => (prev === "0" ? value : prev + value));
            } else {
                setOperand2((prev) => prev + value);
                setDisplay((prev) => prev + value);
            }
        } else if (
            value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "÷"
        ) {
            if (operand1 !== "" && operator === "") {
                setOperator(value);
                setDisplay((prev) => prev + value);
            }
        } else if (value === "C") {
            setOperand1("");
            setOperand2("");
            setOperator("");
            setDisplay("0");
        } else if (value === "=") {
            if (operand1 !== "" && operand2 !== "" && operator !== "") {
                const result = calculate(operand1, operand2, operator);

                if (result === Infinity || !Number.isFinite(result)) {
                    setDisplay("Error");
                    setOperand1("");
                    setOperand2("");
                    setOperator("");
                    return;
                }
                setDisplay(String(result));
                setOperand1(String(result));
                setOperand2("");
                setOperator("");
            }
        }
    };

    return {
        display,
        handleInput,
    };
};

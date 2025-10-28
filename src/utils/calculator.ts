export const calculate = (op_1: string, op_2: string, op: string): number => {
        const num_1 = parseFloat(op_1);
        const num_2 = parseFloat(op_2);

        switch (op) {
            case "+":
                return num_1 + num_2;

            case "-":
                return num_1 - num_2;

            case "*":
                return num_1 * num_2;

            case "÷":
                return num_2 === 0 ? Infinity : num_1 / num_2;

            default:
                return 0;
        }
    };
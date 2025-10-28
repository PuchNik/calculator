type Props = {
    label: string;
    kind: "digit" | "operator" | "actions";
    onPress: () => void;
};

const baseClasses =
    "font-bold text-lg rounded-lg h-16 shadow-lg hover:shadow-xl transition-all duration-150 transform hover:scale-105";

const buttonStyles = {
    digit: "bg-gray-800 hover:bg-gray-700 text-white",
    operator: "bg-blue-600 hover:bg-blue-700 text-white",
    actions: "bg-red-600 hover:bg-red-700 text-white",
};

export const CalculatorButton = ({ label, kind, onPress }: Props) => {
    return (
        <button
            onClick={onPress}
            className={`${baseClasses} ${buttonStyles[kind]}`}
        >
            {label}
        </button>
    );
};

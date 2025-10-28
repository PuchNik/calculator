import { CalculatorButton } from "./components/CalculatorButton";
import { Display } from "./components/Display";
import { BUTTONS } from "./constants/calculator";
import { useCalculator } from "./hooks/useCalculator";

function App() {
    const { display, handleInput } = useCalculator();

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm border-4 border-black">
                {/* Заголовок */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">Калькулятор</h1>
                </div>

                {/*Дисплей*/}
                <Display value={display} />

                {/* Кнопки */}
                <div className="grid grid-cols-4 gap-3">
                    {BUTTONS.map(({ value, type }) => (
                        <CalculatorButton
                            key={value}
                            label={value}
                            kind={type}
                            onPress={() => handleInput(value)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

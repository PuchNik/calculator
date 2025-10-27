import { useState } from 'react'

function App() {
  interface Button { value: string }

  // Массив цифр для кнопок
  const BUTTONS: Button[] = [
  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: '%' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '*' },
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '-' },
  { value: 'C' },
  { value: '0' },
  { value: '=' },
  { value: '+' }
  ]

  const [operand1, setOperand1] = useState('')
  const [operand2, setOperand2] = useState('')
  const [operator, setOperator] = useState('')
  const [display, setDisplay] = useState('0')

  const calculate = (op_1: string, op_2: string, op: string): number => {
    const num_1 = parseInt(op_1)
    const num_2 = parseInt(op_2)

    switch (op) {
      case ('+'):
        return num_1 + num_2

      case ('-'):
        return num_1 - num_2
      
      case ('*'):
        return num_1 * num_2

      case ('%'):
        return num_1 / num_2

      default: return 0
    }
  }

  const getResultValue = (value: string) => {
    if (value >= '0' && value <= '9') {
      if (operator === '') {
        setOperand1(prev => prev + value)
        setDisplay(prev => prev === '0' ? value : prev + value)
      } else {
        setOperand2(prev => prev + value)
        setDisplay(prev => prev + value)
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '%') {
      if (operand1 !== '' && operator === '') {
        setOperator(value)
        setDisplay(prev => prev + value)
      }
    } else if (value === 'C') {
      setOperand1('')
      setOperand2('')
      setOperator('')
      setDisplay('0')
    } else if (value === '=') {
      if (operand1 !== '' && operand2 !== '' && operator !== '') {
        const result = calculate(operand1, operand2, operator) 

        setDisplay(String(result))
        setOperand1(String(result))
        setOperand2('')
        setOperator('')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm border-4 border-black">
        {/* Заголовок */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Калькулятор
          </h1>
        </div>
        
        {/* Дисплей */}
        <div className="rounded-xl p-4 mb-6 shadow-inner border-4 border-black">
          <div className="text-right text-black text-3xl font-bold font-mono min-h-[3rem] flex items-center justify-end">
            {display}
          </div>
        </div>
        
        {/* Кнопки */}
        <div className="grid grid-cols-4 gap-3">
          {BUTTONS.map(({value}) => (
            <button 
            key={value} 
            onClick={() => getResultValue(value)}
            className="
            bg-black
            hover:from-red-500 
            hover:to-red-600 
            text-white 
            font-bold 
            text-lg 
            rounded-lg 
            h-16 
            shadow-lg 
            hover:shadow-xl 
            transition-all 
            duration-150 
            transform 
            hover:scale-105
            "
            >
            {value}
          </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, subtract, multiply, divide } from './calculatorSlice';

function Calculator() {
  const [value, setValue] = useState(0);
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(value));
  };

  const handleSubtract = () => {
    dispatch(subtract(value));
  };

  const handleMultiply = () => {
    dispatch(multiply(value));
  };

  const handleDivide = () => {
    dispatch(divide(value));
  };

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;

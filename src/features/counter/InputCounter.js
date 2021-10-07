import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementByAmount, incrementAsync } from './counterSlice';

export function InputCounter() {
    const [incrementValue, SetIncrementValue] = useState('2');
    const dispatch = useDispatch();

    return (
        <div>
            <input value={incrementValue} onChange={(e) => SetIncrementValue(e.value)} />
            <button onClick={() => dispatch(incrementByAmount(Number(incrementValue)))}>Increment By Amount</button>
            <button onClick={() => dispatch(incrementAsync(Number(incrementValue)))}>Increment Async</button>
        </div>
    );
}

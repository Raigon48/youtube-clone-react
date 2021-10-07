import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <button aria-label="Increment Value" onClick={() => dispatch(increment())}>
                +
            </button>
            <span>{count}</span>
            <button aria-label="Decrement Value" onClick={() => dispatch(decrement())}>
                -
            </button>
        </div>
    );
}

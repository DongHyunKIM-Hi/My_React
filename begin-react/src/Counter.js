import React, {useState} from 'react';

function Counter(){
    const [base,update1]= useState(0);
    const onIncrease = ()=>{
        update1(base+1)
    };
    const onDecrease = ()=>{
        update1(base-1)
    };
    return (
        <div>
            <h1>{base}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;
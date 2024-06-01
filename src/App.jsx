import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import TotalCount from "./TotalCount";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/CounterSlice";

function App() {

    const counters = useSelector((state) => state.counters);

    const dispatch =useDispatch();



    const handleIncrement = (counterId) => {
        dispatch(increment(counterId));
    };

    const handleDecrement = (counterId) => {
        dispatch(decrement(counterId));
    };

    const totalCount= counters.reduce((sum, current) => sum + current.value, 0);
 
    return (
        <>
            <div className="mx-auto text-center">
                <h1 className="text-4xl py-5 font-bold underline">Do Counting</h1>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
                {counters.map((c) => (
                    <Counter
                        key={c.id}
                        count={c.value}
                        onIncrement={() => handleIncrement(c.id)}
                        onDecrement={() => handleDecrement(c.id)}
                    />
                ))}
                <TotalCount totalCount={totalCount}/>
            </div>
        </>
    );
}

export default App;

import Count from "./Count";

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 bg-slate-600 w-1/2 p-5 text-white text-2xl font-bold">
            <Count count={count} />
            <button className=" p-3 bg-black cursor-pointer" onClick={onIncrement}>
                Increment
            </button>
            <button className=" p-3 bg-black cursor-pointer" onClick={onDecrement}>
                Decrement
            </button>
        </div>
    );
};

export default Counter;

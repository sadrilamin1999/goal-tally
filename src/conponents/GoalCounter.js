import { useState } from "react";
import Buttton from "../utls/Buttton";

const GoalCounter = () => {
  const [argCount, setArgCount] = useState(0);
  const [braCount, setBraCount] = useState(0);

  // Agentina increment counter
  const incrementArgHandler = () => {
    setArgCount((prevargCount) => prevargCount + 1);
  };

  // Argentina decrement counter
  const decrementArgHandle = () => {
    setArgCount((prevargCount) => prevargCount - 1);
  };
  // Brazil increment counter
  const incrementBraHandler = () => {
    setBraCount((prevbraCount) => prevbraCount + 1);
  };

  // Brazil decrement counter
  const decrementBraHandle = () => {
    setBraCount((prevbraCount) => prevbraCount - 1);
  };
  return (
    <div className="counter p-14 flex flex-col gap-16">
      <h1 className="text-6xl font-semibold text-softLight tracking-wider">
        Make Goal
      </h1>
      <div className="counter-field flex flex-col gap-8">
        {/* frist row */}
        <div className="frist-country flex gap-5">
          <h2 className="arg text-softLight text-4xl w-[11rem] ">Argentina</h2>
          <div className="goal-number bg-softLight text-softDark font-semibold w-10 h-10 text-4xl flex justify-center items-center focus:outline-none rounded-sm">
            {argCount}
          </div>
          <button
            onClick={incrementArgHandler}
            disabled={argCount === 10 ? true : false}
            className="text-4xl bg-green-600 hover:bg-green-500 duration-300 text-green-50 w-10 h-10 rounded-sm cursor-pointer"
          >
            +
          </button>
          <button
            onClick={decrementArgHandle}
            disabled={argCount === 0 ? true : false}
            className="text-4xl bg-green-600 hover:bg-green-500 duration-300 text-green-50 w-10 h-10 rounded-sm cursor-pointer"
          >
            -
          </button>
        </div>

        {/* Second row */}
        <div className="second-country flex gap-5">
          <h2 className="bra text-softLight text-4xl w-[11rem] ">Brazil</h2>
          <div className="goal-number bg-softLight text-softDark font-semibold w-10 h-10 text-4xl flex justify-center items-center focus:outline-none rounded-sm">
            {braCount}
          </div>
          <button
            onClick={incrementBraHandler}
            disabled={braCount === 10 ? true : false}
            className="text-4xl bg-green-600 hover:bg-green-500 duration-300 text-green-50 w-10 h-10 rounded-sm cursor-pointer"
          >
            +
          </button>
          <button
            onClick={decrementBraHandle}
            disabled={braCount === 0 ? true : false}
            className="text-4xl bg-green-600 hover:bg-green-500 duration-300 text-green-50 w-10 h-10 rounded-sm cursor-pointer"
          >
            -
          </button>
        </div>
        <Buttton text="Start" />
      </div>
    </div>
  );
};

export default GoalCounter;

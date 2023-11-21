import { useRef, useState } from "react";
import Result from "./Result";

const GoalCounter = () => {
  const [argCount, setArgCount] = useState(0);
  const [braCount, setBraCount] = useState(0);
  const [isModal, setIsModal] = useState(false);

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

  // submit handler
  const submitHandler = () => {
    setIsModal(true);
  };

  return (
    <>
      <div className="counter mx-auto w-[60%] h-[60%] p-14 flex flex-col rounded-md justify-center gap-16 border-solid border-1 bg-softDark border-purple-600 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h1 className="text-6xl font-semibold text-softLight tracking-wider">
          Make Goal
        </h1>
        <div className="counter-field flex flex-col gap-8">
          {/* frist row */}
          <div className="frist-country flex gap-5">
            <h2 className="arg text-softLight text-4xl w-[11rem] ">
              Argentina
            </h2>
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
          <div>
            <button
              type="submit"
              onClick={submitHandler}
              className="bg-green-600 hover:bg-green-500 duration-300 px-8 py-2 text-green-50 font-semibold tracking-widest text-xl rounded-md"
            >
              Submit
            </button>
            {isModal && (
              <Result
                closeModal={setIsModal}
                arg={argCount}
                bra={braCount}
                setArgCount={setArgCount}
                setBraCount={setBraCount}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalCounter;

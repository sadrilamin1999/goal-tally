import { IoMdClose } from "react-icons/io";

const Result = ({ closeModal, arg, bra, setArgCount, setBraCount }) => {
  const closeHandler = () => {
    closeModal(false);
    setArgCount(0);
    setBraCount(0);
  };
  return (
    <div className="bg-gray-600  backdrop-blur-lg p-5 container mx-auto  w-[70%] h-[60%] absolute top-[50%] left-0 right-0 bottom-[50%] -translate-y-[50%] flex justify-center items-center">
      {/* cancle btn */}
      <button
        onClick={closeHandler}
        className=" text-red-500 font-semibold absolute top-4 right-4 text-3xl"
      >
        <IoMdClose />
      </button>

      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className=" text-6xl font-semibold text-green-500">
          Congratulations 🎉
        </h1>
        {arg > bra ? (
          <p className="text-4xl text-green-50 font-semibold">
            Argentina is Won ✌
          </p>
        ) : arg === bra ? (
          <p className="text-4xl text-gray-50 font-semibold">
            The match is draw😒
          </p>
        ) : (
          <p className="text-4xl text-green-50 font-semibold">
            Brazil is won ✌
          </p>
        )}
        <button
          onClick={closeHandler}
          className="bg-green-600 hover:bg-green-500 duration-300 px-8 py-2 text-green-50 font-semibold tracking-widest text-xl rounded-md"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;

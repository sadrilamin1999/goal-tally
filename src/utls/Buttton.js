const Buttton = (props) => {
  return (
    <div className="">
      <button className="text-4xl bg-teal-600 hover:bg-teal-500 duration-300 text-teal-50 px-8 py-2 font-semibold outline-none border-none shadow-md rounded-md inline-block">
        {props.text}
      </button>
    </div>
  );
};

export default Buttton;

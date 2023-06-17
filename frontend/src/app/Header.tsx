"use client";

const Header = () => {
  return (
    <div className=" sticky top-0 z-10 flex h-20 items-center bg-blue-600 px-4 text-white drop-shadow-xl ">
      <h1 className="text-3xl font-bold">Sales and Performance</h1>
      <div className="flex-grow">
        <button className="float-right rounded-md bg-blue-500 px-4 py-2 hover:bg-blue-700">
          FlowAI
        </button>
      </div>
    </div>
  );
};

export default Header;

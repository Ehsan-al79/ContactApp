import React from "react";

export default function Header() {
  return (
    <>
        <div className="flex  py-24  flex-col justify-center items-center gap-y-10">
          <h1 className="text-blue-800 text-5xl font-bold">Contact App</h1>
          <div className="flex justify-center items-center text-2xl gap-x-1">
            <a
              href="#"
              className="bg-blue-200 p-1 px-[6px] -mb-1 text-blue-800 rounded-sm cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-150 ease-in"
            >
              ehsanStart
            </a>
            <h5 className="text-zinc-600">| React.js Full Course</h5>
          </div>
        </div>
    </>
  );
}

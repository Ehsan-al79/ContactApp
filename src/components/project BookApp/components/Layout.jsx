import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col xl:px-80 justify-center bg-[#1e1e1e]">
        <header className="flex w-full justify-between items-center bg-[#303030] p-5 rounded-2xl my-10">
          <h1 className="text-[#e0e0e0] text-5xl font-bold -mt-1">Book App</h1>
          <div className="flex justify-center items-center text-2xl gap-x-1">
            <a
              href="#"
              className="p-1 px-[6px] -mb-1 text-cyan-500 rounded-sm cursor-pointer  hover:text-white transition-all duration-150 ease-in"
            >
              ehsanStart
            </a>
            <h5 className="text-[#e0e0e0]">| React.js Full Course</h5>
          </div>
        </header>
        {children}
        <footer className="flex w-full justify-center items-center bg-[#303030] p-5 rounded-2xl my-10">
          <p className="text-[#e0e0e0] text-2xl font-bold">
            Developed by<span className="text-cyan-500"> Ehsan</span>
          </p>
        </footer>
      </div>
    </>
  );
}

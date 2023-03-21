import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className={
        props.darkMode
          ? "bg-[#21222A]  flex justify-between items-center p-6 shadow-md z-[1] border-white"
          : "bg-[#ffffff] flex justify-between items-center p-6 shadow-md z-[1]"
      }
    >
      <div className="flex">
        <img className="w-10 mr-3" src="/images/react-icon-small.png" />
        <h3 className="text-[#61DAFB] mr-3 text-2xl">ReactFacts</h3>
      </div>

      <div className="flex items-center gap-2 ">
        <p className="text-sm text-[#918E9B]">Light</p>
        <div
          className={props.darkMode ?"justify-end bg-[#2B283A] w-8 h-5 cursor-pointer rounded-[2rem] box-content flex  items-center border border-black":"justify-start bg-[#2B283A] w-8 h-5 cursor-pointer rounded-[2rem] box-content  flex  items-center border border-black"
    }onClick={props.toggleDarkMode}
        >
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <p className="text-[#918E9B] ">Dark</p>
       
      </div>
    </nav>
  );
}

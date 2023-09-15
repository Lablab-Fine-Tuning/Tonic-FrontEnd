import { useNavigate } from "react-router-dom";
import { Info, LogIn, LogOut } from "lucide-react";
// import { useEffect, useState } from "react";

export const Header = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="navbar bg-info shadow-lg h-[4rem] flex justify-between">
        <div className="">
          <div
            className="btn btn-ghost normal-case text-xl"
            onClick={() => nav("/")}
          >
            {/* <img src="logo.svg" alt="Logo" className="w-7 h-7" /> */}
            TonicFineTuned
          </div>
        </div>
        <div className="gap-2">
          <button className="flex-box" onClick={() => nav("/about")}>
            <Info />
            <span className="pl-2 pr-5 py-5">About</span>
          </button>
        </div>
      </div>
    </>
  );
};

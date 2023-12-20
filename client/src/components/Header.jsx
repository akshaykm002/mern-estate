import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <>
      <header className="bg-slate-200 shadow-md px-8 py-2">
        <div className="flex justify-between ">
          <Link to="/">
            <h1 className="font-bold text-xl sm:text-xl flex flex-wrap  cursor-pointer pt-3">
              <span className="text-slate-500 ">Global</span>
              <span className="text-slate-700 pl-2">Estates</span>
            </h1>
          </Link>

          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </form>

          <ul className="flex gap-4 align-items-center">
            <Link to="/">
              <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
                About
              </li>
            </Link>
            <Link to='/profile'>
              {
                currentUser?(<img src =""alt="PROFILE"/>):
                ( <li className="text-slate-700 hover:underline cursor-pointer">
                SignIn
              </li>)
              }
           
            
            </Link>
          
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;

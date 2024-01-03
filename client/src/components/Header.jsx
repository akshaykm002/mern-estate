import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
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

          <form
            onSubmit={handleSubmit}
            className="bg-slate-100 p-3 rounded-lg flex items-center"
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
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
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className=" text-slate-700 hover:underline"> Sign in</li>
              )}
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;

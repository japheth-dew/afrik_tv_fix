import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("Search");
  const placeholders = ["movies", "TV Series", "Shows", "Comedy"];

  const handleSearch = () => {
    // Add your search logic here
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholder(
        placeholders[Math.floor(Math.random() * placeholders.length)]
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (nav) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [nav]);
  return (
    <div className="top-0 relative mx-auto  w-[90%]">
      {/* large screen */}
      <div className="lg:block md:block hidden">
        <div className="flex justify-between">
          <div className="flex space-x-12 items-center justify-center">
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1676710430/AFRIK_TV_knsshh.png"
              alt="logo"
            />
            <ul className="flex space-x-5 text-white text-xl">
              <NavLink to="/home/channel">HOME</NavLink>
              <NavLink to="/movies">MOVIE</NavLink>
              <NavLink to="/series">TV SERIES</NavLink>
            </ul>
          </div>

          <div className="flex space-x-8 items-center justify-between">
            <form className="items-center justify-center relative w-[300px] rounded-[20px]">
              <input
                className="border border-[#E4E5E4] text-white rounded-[20px] py-2 px-4 pr-12 outline-none w-[300px] bg-transparent placeholder:text-white"
                type="text"
                placeholder={` ${currentPlaceholder}`}
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button className="absolute top-0 right-0  font-bold py-2 px-4 text-white text-2xl h-full">
                <AiOutlineSearch />
              </button>
            </form>

            <div className="items-center justify-center cursor-pointer">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1676710438/girl_b1tank.png"
                  alt="profile image"
                  className="rounded-full object-cover cursor-pointer"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                />
                {showDropdown && (
                  <div className="absolute top-[30px] left-[-80%] mt-8">
                    <div className="bg-white rounded-lg shadow-lg w-[130px] h-auto">
                      <ul className="space-y-5 items-center justify-center text-center pt-5 pb-5">
                        <li>Notifications</li>
                        <li>Profile</li>
                        <li>My List</li>
                        <hr className="w-full"/>
                        <li>Sign Out</li>
                      </ul>
                    </div>
                    <div className="absolute top-0 right-[30%] h-4">
                      <div className="inline-block w-8 h-4 bg-white transform rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small screen */}
      <div className="lg:hidden md:hidden block">
        <div className="flex justify-between">
          <div onClick={handleClick}>
            {!nav ? (
              <div className="flex items-center justify-center space-x-5">
                <AiOutlineMenu className="text-[28px] cursor-pointer text-black" />
                <h1 className="text-3xl">FlaireStyle</h1>
              </div>
            ) : (
              <AiOutlineClose className="hidden" />
            )}
          </div>

          <img
            src="https://res.cloudinary.com/dpokiomqq/image/upload/v1676710438/girl_b1tank.png"
            alt="profile image"
          />
          <div
            className={
              !nav
                ? "hidden"
                : "h-full fixed bg-[white] w-[80%] left-0 top-0 z-10 transition-all duration-300 drop-shadow-lg"
            }
          >
            <div className="flex space-x-5 w-full pt-5 p-3">
              <AiOutlineClose
                onClick={handleClose}
                className="text-[28px] items-center justify-center cursor-pointer text-black transition-all duration-300"
              />
              <h1 className="text-3xl">FashionFlair</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

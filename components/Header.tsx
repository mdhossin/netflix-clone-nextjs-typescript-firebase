import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      {/* left side */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          className="cursor-pointer object-contain"
          width={100}
          height={30}
          src="/netflix-logo.svg"
          alt="Netflix"
        />

        <ul className="hidden space-x-3 md:flex">
          <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      {/* right side */}

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <div className="cursor-pointer rounded" onClick={logout}>
          {/* <Link href="/account"> */}
          <Image
            className="cursor-pointer rounded"
            src="/account.png"
            alt=""
            width={32}
            height={32}
          />
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

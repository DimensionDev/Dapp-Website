import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, List } from "@mui/material";
// assets
import Logo from '../images/logo.svg'

export const Navbar = () => {
  const [path, setPath] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return <nav
      className={
        "sticky flex items-center px-7 my-7 justify-between w-full h-10 z-10"
      }
    >
      <Link to="/">
        <img
          alt=""
          src={Logo}
          className="w-52"
        />
      </Link>
      <div
        className={
          "flex text-white items-center w-52 justify-between min-w-nav-links text-xl h-full"
        }
      >
        <Link
          to="/"
          className={
            (["/", "/dapp-website", "/dapp-website/"].includes(path)
              ? "font-bold border-b-2 border-blue-underline transform translate-y-px"
              : "opacity-50") + " flex items-center h-full"
          }
        >
          Home
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://news.mask.io/"
          className="flex items-center opacity-50"
        >
          Item List
        </a>
      </div>
      <div className="w-60">

      </div>
    </nav>
};

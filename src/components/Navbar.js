import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import TwitterIcon from "../images/twitter.svg";
import JadeSvg from '../images/jade.svg'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, List } from "@mui/material";
import Logo from '../images/Logo.svg'

export const Navbar = () => {
  const [path, setPath] = useState("");
  const [open, setOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);

  useEffect(() => {
    setPath(window.location.pathname);
    setDrawerWidth(window.innerWidth)
  }, []);

  return (
    <nav
      className={
        "sticky flex items-center px-7 my-7 justify-between w-full h-10 z-10"
      }
    >
      <Link to="/">
        <img
          alt=""
          src={Logo}
          className="md:w-52 w-32"
        />
      </Link>
      <div
        className={
          "text-white items-center w-52 justify-between min-w-nav-links text-xl h-full hidden md:flex"
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
        <Link
          to="/list"
          className={
            ([
              "/list",
              "/list/",
              "/dapp-website/list",
              "/dapp-website/list/",                  
            ].includes(path)
              ? "font-bold border-b-2 border-blue-underline transform translate-y-px"
              : "opacity-50") + " flex items-center h-full"
          }
        >
          Item list
          </Link>
      </div>
      <div className="w-64 relative h-12 hidden md:flex">
          <div className="w-32 h-full absolute top-0 cursor-pointer z-2" />
          <div className="w-32 h-full absolute left-32 top-0 cursor-pointer z-2" />
          <img src={TwitterIcon} alt="" className="absolute h-full z-1 top-0" />
      </div>
      {!open ? (
        <MenuIcon
          onClick={() => setOpen(true)}
          className="text-white cursor-pointer flex md:hidden transform scale-y-150"
        /> 
      ) : null}
      {open ? (
        <Drawer open={open}>
          <List className="flex flex-col px-4 pt-8 text-xl text-white bg-blue-main h-full" style={{width: drawerWidth}}>
            <div className="flex justify-between max-sm:mb-10 mb-16">
              <img
                alt=""
                src={Logo}
                className="w-28 translate-x-1-1"
              />
              <CloseIcon
                onClick={() => {                  
                  setOpen(false)    
                  setTimeout(() => window.scrollTo(0, 0), 0)              
                }}
                className="text-white cursor-pointer flex md:hidden w-9 h-9"
              />              
            </div>
            <Link
              to="/"
              className={
                "py-2 px-3 text-2xl mb-5 flex justify-between " +
                (["/", "/dapp-website", "/dapp-website/"].includes(path)
                  ? "bg-blue-main-dark text-blue-mask rounded-md font-bold"
                  : "")
              }
            >
              <span>HOME</span>
              {["/", "/dapp-website", "/dapp-website/"].includes(path) ? <div className="flex">
                {(new Array(5).fill('')).map((_v, i) => <img src={JadeSvg} alt="" className={`opacity-${20 + i * 20}`} />)}
              </div> : null}
            </Link>
            <Link
              to="/list"
              className={
                "py-2 px-3 text-2xl mb-5 flex justify-between " +
                ([
                  "/list",
                  "/list/",
                  "/dapp-website/list",
                  "/dapp-website/list/",                  
                ].includes(path)
                  ? "bg-blue-main-dark text-blue-mask rounded-md font-bold"
                  : "")
              }
            >
              <span>LIST</span>
              {[
                "/list",
                "/list/",
                "/dapp-website/list",
                "/dapp-website/list/",
              ].includes(path) ? <div className="flex">
                {(new Array(5).fill('')).map((_v, i) => <img src={JadeSvg} alt="" className={`opacity-${20 + i * 20}`} />)}
              </div> : null}
            </Link>
          </List>
        </Drawer>
      ) : null}        
    </nav>
  )
};

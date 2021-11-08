import * as React from "react"
import Logo from '../images/Logo.svg'
import TwitterIcon from "../images/twitter.svg";

export function Footer(props) {
  return (
    <footer className={(props.isContentEmpty ? "absolute bottom-0 left-1/2 transform -translate-x-2/4" : "") + " max-w-6xl mx-auto mb-16 w-9/12 max-sm:w-10/12 max-sm:mb-8"}>
      <div className="w-full border-blue-underline border-b flex justify-between items-center md:h-auto h-16">
        <img className="w-32 md:mb-3 mb-1 max-sm:w-24" alt="" src={Logo} />
        <div className="md:hidden flex w-60 max-sm:w-36">
          <div className="w-32 h-full absolute top-0 cursor-pointer z-2" />
          <div className="w-32 h-full absolute left-32 top-0 cursor-pointer z-2" />
          <img src={TwitterIcon} alt="" className="w-full" />
        </div>        
      </div>
      <div className="w-full mt-1 h-8 flex justify-between items-center text-white max-sm:text-xxs">
        <p>Privacy · Imprint</p>
        <div className="flex">
          <p className="mr-8 max-sm:mr-2">Last Update</p>
          <p>November 8, 2021</p>
        </div>
      </div>
    </footer>
  )
}
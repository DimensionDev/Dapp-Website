import * as React from "react"
import Logo from '../images/logo.svg'

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto mb-16 w-9/12 max-sm:w-10/12">
      <div className="w-full border-blue-underline border-b">
        <img className="w-32 mb-3" alt="" src={Logo} />
      </div>
      <div className="w-full mt-1 h-8 flex justify-between items-center text-white max-sm:text-xxs">
        <p>Privacy · Imprint</p>
        <div className="flex">
          <p className="mr-8 max-sm:mr-2">Last Update</p>
          <p>May 20, 2021</p>
        </div>
      </div>
    </footer>
  )
}
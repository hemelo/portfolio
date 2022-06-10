import React from "react";
import PropTypes from "prop-types"
import { XIcon } from "@heroicons/react/solid";

export default function SideMenu({ children, isActive, onClick, className }) {

  const hideDropdown = () => onClick()

  return(
    <div className={`${isActive ? "translate-x-0" : "translate-x-full"} flex flex-col overflow-x-hidden scroll-smooth overflow-y-auto overscroll-contain h-full transition-transform z-50 top-0 right-0 fixed w-full sm:w-72 ${className}`}>
      <div className="px-2 py-2 w-full flex items-start justify-between top-0">
        <button onClick={e => hideDropdown(e)} className="inline-flex items-center justify-center rounded-md text-neutral-100 hover:text-neutral-50 hover:scale-110 focus:outline-none focus:text-white-200 transition text-sm pr-1">
          <XIcon className="text-primary dark:text-secondary-500 w-7 h-7" />
        </button>
      </div>
      <div className="px-4 flex flex-col space-y-3">
        {children}
      </div>
    </div>
  )
}

SideMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
import React from "react";

export default function NavIconButton( props ) {

  return (
    <button type="button" onClick={props.onClick} className={`transition flex items-center p-2 text-xs font-medium text-white rounded-lg border border-white hover:text-white hover:border-secondary-500 hover:bg-secondary-500 focus:z-10 focus:ring-2 focus:ring-gray-300 hover:focus:ring-secondary-600 dark:focus:ring-secondary-500 focus:outline-none dark:text-secondary-500 dark:border-secondary-600 dark:hover:text-white dark:hover:bg-secondary-600 ${props.className}`}>
      {props.children}
    </button>
  )
}
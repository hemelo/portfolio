import React from "react";

export default function NavLink({ href, children, className }) {
  return (
    <a href={href} className={`${className} block py-2.5 text-white dark:text-gray-300 border-b-2 border-transparent hover:border-white dark:hover:border-gray-300 hover:-translate-y-[1px] transition duration-150`}>
      {children}
    </a>
  )
}

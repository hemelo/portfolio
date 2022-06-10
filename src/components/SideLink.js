import React from "react";

export default function SideLink ({ children, href, onClick, className }) {
  return (
    <a href={href} onClick={onClick} className={`${className} w-8 h-8 inline text-lg font-medium text-gray-200 py-2 focus:outline-none transition hover:translate-x-2 duration-150`}>{children}</a>
  )
}
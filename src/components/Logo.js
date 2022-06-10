import React from "react"
import { BiCodeCurly } from "react-icons/bi"
export default function Logo() {
  return (
    <div className="flex items-center cursor-pointer gap-2 text-white">
      <span className="self-center text-xl font-semibold whitespace-nowrap">Henrique Melo</span>
      <BiCodeCurly className="mr-3 h-6 w-6 sm:h-9 text-secondary-400 dark:text-secondary-500" />
    </div>
  )   
}

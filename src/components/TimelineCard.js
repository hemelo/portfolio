import React from "react"
import { BsQuestionLg } from "react-icons/bs";
export default function TimelineCard({children, className, title, time, description, ending, bgColor = "bg-secondary-400 dark:bg-secondary-900", ring = "ring-white dark:ring-gray-900" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-center sm:justify-start">
        <div className={`${bgColor} flex z-10 justify-center items-center w-10 h-10 sm:w-8 sm:h-8 rounded-full ring-0  sm:ring-8 ${ring} transition duration-500 shrink-0`}>
          {children}
        </div>
        <div className={`hidden sm:flex ${ending ? "w-1/2": "w-full"} border-b-[3px] border-gray-200`}></div>
        { ending &&
          <>
            <div className="hidden sm:flex w-1/2 border-b-[3px] border-gray-200 border-dotted"></div>
            <BsQuestionLg className="hidden sm:inline-block w-4 h-4 text-white" />
          </>
        }
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-300">{time}</time>
        <p className="text-base font-normal text-gray-200">{description}</p>
      </div>
    </div>
  )
}

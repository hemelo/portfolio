import React from "react"
import { MdLocationOn } from "react-icons/md";

export default function Recommendation( { client, quote, company, image }) {
  return (
    <div className="block items-center p-3 sm:flex bg-secondary-600 dark:bg-secondary-800 rounded-md">
      <img className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src={image} alt={company} />
      <div className="text-white dark:text-gray-200 text-left flex-grow">
        <div className="text-lg font-medium text-white mb-2">{client}</div>
        <div className={`text-sm sm:text-base font-normal ${company ? "mb-2" : ""}`}>&ldquo;{quote}&rdquo;</div>
        {company &&
          <div className="flex items-center gap-1 text-white dark:text-gray-300 justify-end w-full">
            <MdLocationOn className="w-4 h-4 inline-block" />
            <span className="text-sm font-normal">{company}</span>
          </div>
        }
      </div>
    </div>
  )
}

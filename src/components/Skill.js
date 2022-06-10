/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { PlusIcon, StarIcon } from "@heroicons/react/solid";

export default function Skill({ children, label, category, details, isFavorite, onClick }) {

  const hireModal = () => onClick(details)

  return(
    <div className="py-4 sm:px-4 sm:w-1/2 lg:w-1/3 w-full">
      <div className="transition duration-500 bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full justify-between items-center">
        <div className="flex flex-row">
          {React.Children.map(children, child => 
            React.cloneElement(child, { className: child.props.className + " " +"w-6 h-6 flex-shrink-0 mr-3"})
          )}
          <span className="title-font font-medium text-gray-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {label} 
          </span>
          { isFavorite &&
            <StarIcon className="text-yellow-400 ml-2 w-6 h-6 "/>
          }
        </div>
        { details &&
          <PlusIcon className="text-gray-400 hover:text-white w-6 h-6 p-0.5 cursor-pointer hover:bg-secondary-500 hover:scale-110 rounded-full transition duration-200" role="button" onClick={e => hireModal(e)} />
        }
      </div>
    </div>
  )
}

Skill.propTypes = {
  details: PropTypes.string,
  category: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
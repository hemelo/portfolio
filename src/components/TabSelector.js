/* eslint-disable no-unused-vars */
import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"

function Tab({ option, tabIndex, onClick, isActive, extraClasses }) {
  
  return(
    <span tabIndex={tabIndex} role="button" onKeyDown={e => onClick(option)} onClick={e => onClick(option)} className={`flex items-center justify-center cursor-pointer p-4 w-full focus:outline-none ${isActive ? "text-gray-900 bg-secondary-500 dark:bg-secondary-700 dark:text-white" : "bg-gray-100 hover:text-gray-700 hover:bg-gray-200 dark:hover:text-white dark:bg-gray-800 w-full dark:hover:bg-gray-700"} ${extraClasses}`} aria-current="page">
      { option.label }
    </span>
  )
}

export default function TabSelector({ options, className, currentTab, onChange }) {
  const handleSelect = (e) => {
    onChange({value: e.value, label: e.label })
  }

  const handleTab = (option) => {
    onChange(option)
  }

  return(
    <div className={className}>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">Select your country</label>
        <Select className="custom-select-container" classNamePrefix="custom-select" defaultValue={currentTab} options={options} onChange={(e) => handleSelect(e)} />
      </div>
      <div className="hidden transition duration-500 text-sm font-medium text-center text-black rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        {options.map((option, index) => {
          return(
            <Tab
              key={option.label}
              isActive={currentTab.value == option.value}
              option={option}
              tabIndex={index}
              extraClasses={`${(options.length -1 == index) ? "rounded-r-lg" : (index == 0) ? "rounded-l-lg" : ""}`}
              onClick={handleTab}
            />
          )
        })}
      </div>
    </div>
  )
}

Tab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  option: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  extraClasses: PropTypes.string,
}
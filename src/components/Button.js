import React from "react"

export default function Button({ target, href, onSubmit, onClick = (() => null), children, type, link, className, secondary, custom }) {
  return ( 
    <>
      { link && 
      <a target={target} rel="noreferrer" href={href} className={`${className} font-medium transition inline-flex ${custom ? custom : (secondary ? "text-secondary-500 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-900 dark:text-white" : "text-white dark:bg-secondary-600 dark:hover:bg-secondary-700 bg-secondary-500 hover:bg-secondary-600")} border-0 py-2 px-6 focus:outline-none rounded-md text-base lg:text-lg`}>{ children }</a>
      }
      { !link &&
      <button type={type} onSubmit={e => onSubmit(e)} onClick={e => onClick(e)} className={`${className} font-medium transition inline-flex ${custom ? custom : (secondary ? "text-secondary-500 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-900 dark:text-white" : "text-white dark:bg-secondary-600 dark:hover:bg-secondary-700 bg-secondary-500 hover:bg-secondary-600")} border-0 py-2 px-6 focus:outline-none rounded-md text-base lg:text-lg`}>{ children }</button>
      }
    </>
  )
}

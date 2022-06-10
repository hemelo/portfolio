import React from "react";

export default function TextArea({ name, onChange, placeholder, type, className, rows}) {
  return (
    <textarea rows={rows} name={name} onChange={onChange} className={`${className} transition duration-200 block p-3 w-full text-sm font-medium text-gray-900 bg-gray-50 rounded-md border border-secondary-300 focus:ring-secondary-500 focus:border-secondary-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-500 dark:focus:border-secondary-500 focus:outline-none focus:placeholder-shown:text-secondary-600 dark:focus:placeholder-secondary-500 placeholder:font-medium`} placeholder={placeholder} type={type} />
  )
}
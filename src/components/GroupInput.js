import React from "react";
import Input from "./Input";

export default function GroupInput({ children, name, className, placeholder, onChange, onSubmit, type }) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        {React.Children.map(children, child => 
          React.cloneElement(child, { className: child.props.className + " " + "w-5 h-5 text-gray-500 dark:text-gray-400"})
        )}
      </div>
      <Input className="pl-10" name={name} onChange={onChange}  placeholder={placeholder} type={type} />
      {onSubmit && 
          <button onSubmit={onSubmit} className="text-white absolute right-2.5 bottom-2.5 bg-secondary-500 dark:bg-secondary-600 hover:bg-secondary-600 dark:hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-secondary-800 transition">Pesquisar</button>
      }
    </div>
  )
}
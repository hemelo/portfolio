import React from "react";

export default function FormLabel({children, htmlFor, className}) {
  return (
    <label htmlFor={htmlFor} className={`leading-7 font-medium text-sm text-secondary-500 ${className}`}>
      { children }
    </label>
  )
}

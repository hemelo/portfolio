import React from "react";

export default function SectionHeader({children, title, label, className }) {

  const icon = React.Children.toArray(children)[0]

  return (
    <div className="flex flex-col w-full mb-16">
      <span className="p-2.5 mx-auto mb-4 bg-secondary-600 rounded-full">
        {
          React.cloneElement(icon, { className: icon.props.className + " " +"w-9 h-9 inline-block text-white "})
        }
      </span>
      
      <h1 className={`sm:text-4xl text-3xl font-medium mb-4 ${className}`}>
        {title}
      </h1>

      { label && 
        <p className={`lg:w-2/3 mx-auto leading-relaxed text-base opacity-90 ${className}`}>
          {label}
        </p>
      }

      { children[1] && 
        <p className={`lg:w-2/3 mx-auto leading-relaxed text-base opacity-90 ${className}`}>
          {children[1]}
        </p>
      }
    </div>
  )
}
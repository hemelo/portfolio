import React from "react"

export default function ContactCard({ className, children, label, href }) {
  const [isHover, setIsHover] = React.useState(false)

  return (
    <div  onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`cursor-pointer rounded-md relative ${className} ring-1 hover:ring-secondary-600 ring-transparent border-transparent transition duration-300 border-2 hover:border-secondary-500`}>
      <a target="_blank" rel="noreferrer" href={href}>
        <div className={`flex absolute inset-y-0 left-0 pl-3 items-center pointer-events-none  ${isHover ? "translate-x-0" : "-translate-x-3"} transition`}>
          {React.Children.map(children, child => 
            React.cloneElement(child, { className: child.props.className + " " + "w-5 h-5 text-white"})
          )}
        </div>
        <div className={`py-2 pl-10 pr-3 font-medium text-white ${isHover ? "translate-x-0" : "-translate-x-3"} transition`}>
          {label}
        </div>
      </a>
    </div>
  )
}

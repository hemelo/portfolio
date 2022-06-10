import React from "react";
import { CgSpinner } from "react-icons/cg";

export default function Loading({ isLoading, className }) {
  return(
    <div className={className}>
      <CgSpinner className={` animate-spin text-secondary-600 w-6 h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9 ${isLoading ? "" : "hidden"}`}/>
    </div>
  )
}

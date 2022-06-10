import React from "react"
import { BiSearchAlt2 } from "react-icons/bi";
import GroupInput from "./GroupInput";

export default function SearchBar({ className, placeholder, onChange, onSubmit }) {
  return (
    <GroupInput className={className} placeholder={placeholder} onChange={onChange} onSubmit={onSubmit} type="search">
      <BiSearchAlt2 />
    </GroupInput>
  )
}
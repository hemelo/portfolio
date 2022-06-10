/* eslint-disable no-unused-vars */
import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

export default function FavoriteFilter({ value, onChange }) {
  return (
    <div className="flex items-center gap-1">
      <FaRegStar data-tip="Não favoritos, porém tenho conhecimento" role="button" onClick={e => onChange(-1)} className={`${value == -1? "text-yellow-400" : "text-white scale-95"} w-7 h-7 hover:scale-105 transition focus:outline-none`} />
      <FaStarHalfAlt data-tip="Favoritos e não favoritos" role="button" onClick={e => onChange(0)} className={`${value == 0 ? "text-yellow-400" : "text-white scale-95"} w-7 h-7 hover:scale-105 transition focus:outline-none`} />
      <FaStar data-tip="Meus favoritos" role="button" onClick={e => onChange(1)} className={`${value == 1 ? "text-yellow-400" : "text-white scale-95"} w-7 h-7 hover:scale-105 transition focus:outline-none`} />
    </div>
  )
}
import React from "react"
import { socials } from "../socials"
import Button from "./Button"
import { FiExternalLink } from "react-icons/fi"

export default function LinkedinButton() {
  return (
    <Button link target="_blank" href={socials.linkedin} custom="bg-sky-800 hover:bg-sky-900 text-cyan-300 dark:text-cyan-400">
      <span className="flex items-center gap-1">Linkedin <FiExternalLink className="inline-block w-4 h-4" /></span>
    </Button>
  )
}

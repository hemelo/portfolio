/* eslint-disable no-unused-vars */
import React from "react";
import { ChipIcon } from "@heroicons/react/solid";
import TextTransition, { presets } from "react-text-transition";
import { skills } from "../data";
import SectionHeader from "./SectionHeader";
import TabSelector from "./TabSelector";
import Skill from "./Skill";
import Modal from "./Modal";
import SearchBar from "./Searchbar";
import FavoriteFilter from "./FavoriteFilter";

const sectionTitle = "Tecnologias"
const sectionLabel = [
  "Tecnologias que tenho menos experiência",
  "Tecnologias que tenho conhecimento",
  "Tecnologias que tenho mais experiência e bastante conhecimento",
]

const options = [
  { value: "All", label: "Todos" },
  { value: "Backend", label: "Backend" },
  { value: "Frontend", label: "Frontend" },
  { value: "Database", label: "Banco de dados" },
  { value: "Devops", label: "DevOps" },
]

const filterAndSortStacks = (tab, search, stars) => {
  const tStars = (stars == 0 ? null : (stars == 1 ? true : false))
  const filtered = skills
    .filter((skill) => tab.value == "All" ? skill : skill.category.includes(tab.value))
    .filter((skill) => search ? skill.name.toLowerCase().includes(search.toLowerCase()) : skill)
    .filter((skill) => {
      if(tStars == null) return skill
      if(tStars == skill.favorite) return skill
    })
    
  return filtered  
}

export default function Stacks({ className }) {
  const [tab, setTab] = React.useState(options[0])
  const [search, setSearch] = React.useState("")
  const [stars, setStars] = React.useState(0)

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!modalIsOpen)
  const closeModal = () => setIsOpen(false) 

  let filteredSkills = filterAndSortStacks(tab, search, stars)

  React.useEffect(() => {
    filteredSkills = filterAndSortStacks(tab, search, stars)
  }, [tab, search, stars])

  return (
    <section id="tecnologias" className={className}>
      <div className="container px-9 py-10 mx-auto text-center xl:px-20">
        <SectionHeader className="text-white" title={sectionTitle}>
          <ChipIcon />
          <TextTransition
            className="!overflow-hidden transition-label"
            text={ sectionLabel[stars + 1 % sectionLabel.length] }
            springConfig={ presets.gentle }
          />
        </SectionHeader>
        <TabSelector currentTab={tab} onChange={setTab} className="mb-12" options={options} />
        <div className="flex justify-center items-center w-full gap-4 sm:gap-8 mb-12">
          <FavoriteFilter value={stars} onChange={setStars} />
          <SearchBar className="w-full sm:w-80" placeholder="Pesquisar Stacks..." onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex flex-wrap w-full sm:mx-auto sm:mb-2">
          {filteredSkills
            .map((skill) => (
              <Skill key={skill.name} label={skill.name} category={skill.category} isFavorite={skill.favorite } onClick={toggleModal}>
                {skill.icon}
              </Skill>
            ))}
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="skill-modal">

        </Modal>
      </div>
    </section>
  );
}
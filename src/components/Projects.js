import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import SectionHeader from "./SectionHeader";
import TabSelector from "./TabSelector";

const sectionTitle = "Meus projetos"
const sectionLabel = ""

const options = [
  { value: "fullstack", label: "Fullstack" },
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "database", label: "Banco de dados" }
]

export default function Projects(props) {
  const [tab, setTab] = React.useState(options[0])

  return (
    <section id="projetos" className={`${props.className}`}>
      <div className="container px-9 py-10 mx-auto text-center xl:px-20">
        <SectionHeader className="text-secondary-600" title={sectionTitle} label={sectionLabel}>
          <CodeIcon />
        </SectionHeader>
      
        <TabSelector currentTab={tab} onChange={setTab} className="mb-16" options={options} />
        <div className="text-center">
          <h2 className="font-medium text-lg">Em breve...</h2>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { UilDocker } from "@iconscout/react-unicons";
import { SiDotnet, SiKotlin, SiGo, SiJenkins, SiClojure, SiUdemy, SiTerraform, SiGrafana, SiVagrant, SiJquery, SiSpring, SiJava, SiCsharp, SiPhp, SiPython, SiCplusplus, SiCss3, SiHtml5, SiTailwindcss, SiBootstrap, SiKubernetes, SiJavascript, SiTypescript, SiLaravel, SiDjango, SiPostgresql, SiMysql, SiMongodb } from "react-icons/si";
import { FaGitAlt, FaAws, FaWordpress, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { AiFillGitlab } from "react-icons/ai";
import { BiBusSchool } from "react-icons/bi";
import { ReactComponent as AluraIcon } from "./alura.svg"

export const projects = [
  {
    title: "",
    subtitle: "",
    description: "",
    image: "",
    link: "",
  }
];

export const testimonials = [
  {
    quote: "O Henrique é muito bom no que faz. Sua facilidade em aprender muito rápido Vue e Laravel me surpreendeu quando fizemos estágio juntos na UFMG",
    image: "https://media-exp1.licdn.com/dms/image/C4D03AQHustdRqLSn6g/profile-displayphoto-shrink_800_800/0/1645298355078?e=1658966400&v=beta&t=F0VU65AtZmYfW6NiPeeelOOzD-Uu9ZG9rgV1DRuvQFI",
    name: "Pedro Henrique",
    company: "Universidade Federal de Minas Gerais"
  }
]

export const courses = [
  {
    title: "UFMG - Desenvolvimento de Sistemas",
    description: "Curso Técnico",
    icon:  {
      svg: <BiBusSchool className="w-5 h-5 text-secondary-600 dark:text-secondary-300" />,
    },
    time: "Conclúido em 01/2022"
  },
  {
    title: "Udemy",
    description: "Cursos Complementares",
    icon:  {
      svg: <SiUdemy className="w-5 h-5 text-orange-600 dark:text-orange-300" />,
      bgColor: "bg-orange-200 dark:bg-orange-900"
    },
    time: "Iniciados em 06/2021"
  },
  {
    title: "Alura",
    description: "Cursos Complementares",
    icon: {
      svg: <AluraIcon className="w-5 h-5 fill-blue-600 dark:fill-blue-300" fill="currentColor" />,
      bgColor: "bg-blue-200 dark:bg-blue-900"
    },
    time: "Iniciados em 01/2022"
  }
]

export const skills = [
  {
    name: "Docker",
    category: ["Devops"],
    icon: <UilDocker className="text-blue-400" />,
    favorite: true,
  }, 
  {
    name: "Git",
    category:  ["Devops"],
    icon: <FaGitAlt className="text-orange-700" />,
    favorite: false,
  },
  {
    name: "Jenkins",
    category:  ["Devops"],
    icon: <SiJenkins className="text-red-600" />,
    favorite: false,
  },
  {
    name: "Grafana",
    category:  ["Devops"],
    icon: <SiGrafana className="text-orange-500" />,
    favorite: false,
  },
  {
    name: "AWS",
    category:  ["Devops"],
    icon: <FaAws className="text-black dark:text-white" />,
    favorite: true,
  },
  {
    name: "Gitlab CI",
    category:  ["Devops"],
    icon: <AiFillGitlab className="text-orange-500" />,
    favorite: true,
  },
  {
    name: "Kubernetes",
    category: ["Devops"],
    icon: <SiKubernetes className="text-blue-600" />,
    favorite: false,
  }, 
  {
    name: "Vagrant",
    category:  ["Devops"],
    icon: <SiVagrant className="text-blue-500" />,
    favorite: false,
  },
  {
    name: "Terraform",
    category:  ["Devops"],
    icon: <SiTerraform className="text-violet-600" />,
    favorite: false,
  },
  {
    name: "Javascript",
    category: ["Frontend", "Backend"],
    icon: <SiJavascript className="text-yellow-400" />,
    favorite: true,
  }, 
  {
    name: "Typescript",
    category:  ["Frontend", "Backend"],
    icon: <SiTypescript className="text-blue-600" />,
    favorite: true,
  }, 
  {
    name: "Laravel",
    category:  ["Backend"],
    icon: <SiLaravel className="text-orange-700" />,
    favorite: true,
  }, 
  {
    name: "Django",
    category:  ["Backend"],
    icon: <SiDjango className="text-green-700" />,
    favorite: false,
  }, 
  {
    name: "Node.js",
    category:  ["Backend"],
    icon: <FaNodeJs className="text-green-500" />,
    favorite: true,
  }, 
  {
    name: "Spring Framework",
    category:  ["Backend"],
    icon: <SiSpring className="text-lime-600" />,
    favorite: true,
  }, 
  {
    name: "Java",
    category:  ["Backend"],
    icon: <SiJava className="text-orange-700" />,
    favorite: true,
  }, 
  {
    name: "C#",
    category:  ["Backend"],
    icon: <SiCsharp className="text-purple-800" />,
    favorite: true,
  }, 
  {
    name: "PHP",
    category:  ["Backend"],
    icon: <SiPhp className="text-indigo-500" />,
    favorite: false,
  },
  {
    name: "C/C++",
    category:  ["Backend"],
    icon: <SiCplusplus className="text-rose-700" />,
    favorite: false,
  },
  {
    name: "Python",
    category:  ["Backend"],
    icon: <SiPython className="text-yellow-400" />,
    favorite: false,
  },
  {
    name: "Clojure",
    category:  ["Backend"],
    icon: <SiClojure className="text-lime-500" />,
    favorite: false,
  },
  {
    name: "Kotlin",
    category:  ["Backend"],
    icon: <SiKotlin className="text-indigo-600" />,
    favorite: true,
  },
  {
    name: "Go",
    category:  ["Backend"],
    icon: <SiGo className="text-sky-700" />,
    favorite: false,
  },
  {
    name: ".NET Core/Framework",
    category: ["Backend"],
    icon: <SiDotnet className="text-black dark:text-white" />,
    favorite: true
  },
  {
    name: "Wordpress",
    category:  ["Backend", "Frontend"],
    icon: <FaWordpress className="text-black dark:text-white" />,
    favorite: false,
  },
  {
    name: "Vue",
    category:  ["Frontend"],
    icon: <IoLogoVue className="text-green-400" />,
    favorite: true,
  }, 
  {
    name: "React",
    category:  ["Frontend"],
    icon: <FaReact className="text-blue-400" />,
    favorite: true,
  }, 
  {
    name: "MySQL",
    category:  ["Database"],
    icon: <SiMysql className="text-blue-600" />,
    favorite: false,
  }, 
  {
    name: "PostgreSQL",
    category:  ["Database"],
    icon: <SiPostgresql className="text-blue-600" />,
    favorite: true,
  }, 
  {
    name: "Mongo",
    category:  ["Database"],
    icon: <SiMongodb className="text-green-500" />,
    favorite: true,
  }, 
  {
    name: "Html",
    category:  ["Frontend"],
    icon: <SiHtml5 className="text-orange-500" />,
    favorite: false,
  },
  {
    name: "Css",
    category:  ["Frontend"],
    icon: <SiCss3 className="text-blue-500" />,
    favorite: false,
  },
  {
    name: "Tailwind",
    category:  ["Frontend"],
    icon: <SiTailwindcss className="text-blue-400" />,
    favorite: true,
  },
  {
    name: "Bootstrap",
    category:  ["Frontend"],
    icon: <SiBootstrap className="text-purple-600" />,
    favorite: false,
  },
  {
    name: "JQuery",
    category:  ["Frontend"],
    icon: <SiJquery className="text-sky-800" />,
    favorite: false,
  },
  {
    name: "Sass",
    category:  ["Frontend"],
    icon: <FaSass className="text-rose-500" />,
    favorite: true,
  },
]

export const hardSkills = [ 
  "Desenvolvimento Web FullStack",
  "Banco de dados relacional e não-relacional",
  "Object-Relational Mapping (ORM)",
  "Consumo e criação de API REST",
  "Test Driven Development (TDD)",
  "Behavior Driven Development (TDD)",
  "Arquiteturas de projeto",
  "Domain Driven Design (DDD)",
  "Microsserviços",
  "Programação orientada a objetos (POO)",
  "Code Patterns",
  "Virtualização, provisionamento e containerização",
  "Infra como código (IaC)",
  "Pipeline CI/CD",
  "Implantação Cloud",
  "Estrutura de Dados"
]
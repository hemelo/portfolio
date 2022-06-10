import React from "react";
import $ from "jquery";
import TextTransition, { presets } from "react-text-transition";
import { CSSTransition } from "react-transition-group";
import Button from "./Button";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { socials } from "../socials";
import Typewriter from "typewriter-effect"

const presentation = [
  "Oi, eu sou Henrique Melo",
  "Amo codar e construir aplicações❤️"
]

export default function About(props) {
  const [index, setIndex] = React.useState(0);
  const [lazyLoadAnimation, setLazyLoadAnimation] = React.useState(false);
  const [typewriter, setTypewriter] = React.useState(true)

  const jqueryCode = () => {
    $(".Typewriter__cursor").hide()
  }

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1)
    , 6000)
    setLazyLoadAnimation(true)

    return () => clearTimeout(intervalId);
  }, []);

  React.useEffect(() => {
    if(!typewriter) jqueryCode()
  }, [typewriter])

  return (
    <section id="sobre" className={`${props.className}`}>
      <div className="container mx-auto flex px-9 xl:px-20 pt-28 pb-7 md:pb-14 md:flex-row flex-col-reverse gap-4 lg:gap-16 items-center justify-between">
        <div className="lg:flex-grow  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <CSSTransition
            classNames="translate-updown"
            in={lazyLoadAnimation}
            timeout={5000}>
            <h1 className="title-font lg:text-4xl md:text-3xl text-2xl mb-4 font-medium text-white">
            
              <TextTransition
                className="!overflow-hidden"
                text={ presentation[index % presentation.length] }
                springConfig={ presets.gentle }
              />
            
            </h1>
          </CSSTransition>
          <p className="mb-8 leading-relaxed text-gray-100">
            <Typewriter
              onInit={(typewriter) => { typewriter
                .changeDelay(70)
                .typeString("Sou <span class=\"bg-secondary-500 dark:bg-secondary-600 font-semibold\"> desenvolvedor fullstack</span>")
                .pauseFor(1000)
                .typeString(" generalista com proficiência em algumas tecnologias")
                .pauseFor(3000)
                .deleteChars(52)
                .changeDeleteSpeed(20)
                .typeString(". Clique no botão abaixo para ver todas elas!")
                .callFunction(() => setTypewriter(false))
                .start()
              }} />
          </p>
          <CSSTransition
            classNames="fade"
            in={lazyLoadAnimation}
            timeout={5000}>
            <div className="flex gap-3 justify-center">
              <Button href="#projetos" link>
                Projetos
              </Button>
              <Button href="#tecnologias" link secondary>
                Skills<span className="hidden md:inline">&nbsp;e tecnologias</span>
              </Button>
            </div>
          </CSSTransition>
        </div>
        <div className="flex flex-col xl:flex-row-reverse lg:max-w-lg gap-5 xl:gap-8 w-3/4 sm:w-1/2 md:w-1/3">
          <div className="py-2">
            <div className="rounded-full border-white ring-white border-2 overflow-hidden">
              <img
                className="object-cover object-center rounded-full aspect-square hover:scale-125 transition duration-1000"
                alt="hero"
                src="/1639073735504.jpg"
              />
            </div>
          </div>
          <div className="flex flex-row xl:flex-col gap-3 xl:gap-6 items-center justify-center">
            <><a href={socials.github} ><AiFillGithub className="hover:scale-110 transition h-9 w-9 xl:w-11 xl:h-11 text-slate-900" /></a>
              <a href={socials.overflow} className="hover:scale-110 transition xl:w-10 xl:h-10 h-8 w-8 text-white bg-orange-500 rounded-full">
                <BsStackOverflow className="h-8 w-8 xl:w-10 xl:h-10 p-1.5 xl:p-2" />
              </a></>
          </div>
        </div>
      </div>
    </section>
  );
}
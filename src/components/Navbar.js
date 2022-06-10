import React from "react";
import $ from "jquery";
import { CSSTransition } from "react-transition-group";
import Scrollspy from "react-scrollspy";
import ThemeChanger from "./ThemeChanger";
import NavIconButton from "./NavIconButton";
import SideMenu from "./SideMenu";
import SideLink from "./SideLink";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Links = [
  {
    id: "sobre",
    label: "Sobre",
    onlySide: false,
  },
  {
    id: "projetos",
    label: "Projetos",
    onlySide: false,
  },
  {
    id: "tecnologias",
    label: "Tecnologias",
    onlySide: false,
  },
  {
    id: "formacao",
    label: "Formação",
    onlySide: false,
  },
  {
    id: "recomendacoes",
    label: "Recomendações",
    onlySide: true,
  },
  {
    id: "contato",
    label: "Contato",
    onlySide: false,
  },
]

export default function Navbar({ className }) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [lazyLoadAnimation, setLazyLoadAnimation] = React.useState(false);

  const hideDropdown = () => setNavbarOpen(false)

  React.useEffect(() => {
    if (navbarOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [navbarOpen]);
  
  const scrollTrigger = (destination) => {
    $("html, body").animate(
      {
        scrollTop: destination.offset().top - 50,
      },
      "swing"
    );
  }

  const jqueryCode = () => {
    $("a.js-scroll-trigger[href*=\"#\"]:not([href=\"#\"])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $(this.hash);

        if (target.length) 
          scrollTrigger(target)
        
      }
    })  
  }

  React.useEffect(() => {
    setLazyLoadAnimation(true)
    jqueryCode()
  }, [])

  const sections =  Links.map(link => link.id) 

  return(
    <div className={`${className} w-full z-50 top-0 fixed overflow-hidden`}>
      <nav className="container px-9 md:py-0 py-2.5 mx-auto xl:px-20 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <CSSTransition
            classNames="scale"
            in={lazyLoadAnimation}
            timeout={5000}>
            <Logo /> 
          </CSSTransition>
          <div className="flex gap-2 justify-between md:order-2">
            <ThemeChanger />
            <NavIconButton className="md:hidden" aria-expanded="false" onClick={() => setNavbarOpen(!navbarOpen)}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-[22px] h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-[22px] h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </NavIconButton>
            <SideMenu isActive={navbarOpen} onClick={hideDropdown} className="bg-secondary-600 dark:bg-primary-600">
              <Scrollspy items={sections} className="flex flex-col space-y-3" currentClassName="!text-white dark:!text-secondary-400 font-bold">
                {Links.map(link => (
                  <SideLink key={link.id} href={"#".concat(link.id)} className="w-full js-scroll-trigger"  onClick={hideDropdown}>
                    {link.label}
                  </SideLink>
                ))}
              </Scrollspy>
            </SideMenu>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <Scrollspy className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 text-base lg:text-lg font-semibold" items={sections} currentClassName="!text-secondary-400 dark:!text-secondary-500 !border-b-2 !border-secondary-400 dark:!border-secondary-600">
              {Links.map(link => !link.onlySide && (
                <NavLink key={link.id} href={"#".concat(link.id)} className="js-scroll-trigger"  onClick={hideDropdown}>
                  {link.label}
                </NavLink>
              ))}
            </Scrollspy>
          </div>
        </div>
      </nav>
    </div>
  )
}
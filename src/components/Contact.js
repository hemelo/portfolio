/* eslint-disable no-unused-vars */
import React from "react";
import Tooltip from "react-simple-tooltip"
import { MdAlternateEmail, MdEmail }  from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaLinkedinIn, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

import TextArea from "./TextArea";
import GroupInput from "./GroupInput";
import FormLabel from "./FormLabel";
import Button from "./Button";
import ContactCard from "./ContactCard";
import { socials } from "../socials";

var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

export default function Contact() {
  const form = React.useRef();
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [lazyLoadAnimation, setLazyLoadAnimation] = React.useState(false);
 
  React.useEffect(() => {
    setLazyLoadAnimation(true)
  }, []);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(!pattern.test(email)){
      return toast.error("Email inválido");
    }

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, 
      process.env.REACT_APP_EMAILJS_TEMPLATE, 
      form.current,
      process.env.REACT_APP_EMAILJS_KEY
    ).then((response) => {
      toast.success("Email enviado com sucesso")
      setEmail("")
      setMessage("")
      setName("")
    })
      .catch((error) => toast.error("Ocorreu um erro."))
  }

  return (
    <section id="contato" className="relative">
      <div className="container flex-row px-9 py-12 sm:py-16 gap-8 sm:gap-4 lg:gap-10 xl:gap-20 xl:px-20 mx-auto flex md:flex-nowrap justify-between flex-wrap">
        <div className="lg:w-7/12 md:w-1/2 gap-6 sm:pt-4 flex flex-col items-start justify-start relative">
          <CSSTransition
            classNames="translate-updown"
            in={lazyLoadAnimation}
            timeout={5000}
          >
            <>
              <h3 className="text-white md:text-4xl text-3xl font-bold drop-shadow-2xl">
                Contato
              </h3>
              <p className="md:w-3/4 leading-relaxed text-base text-gray-200 mb-2 md:mb-4">
                Entre em contato comigo pelo linkedin ou email para uma resposta mais rápida
              </p>
            </>
          </CSSTransition>
          
          <div className="w-72 flex flex-col gap-2">
            <ContactCard className="w-full hover:bg-primary-700" href={"mailto:" + socials.email} label={socials.email}>
              <MdEmail />
            </ContactCard>
            <ContactCard className="w-full hover:bg-primary-700" href={socials.linkedin} label={socials.linkedin.split("/").filter(url => ! url == "").pop()}>
              <FaLinkedinIn />
            </ContactCard>
          </div>

          <CSSTransition
            classNames="translate-updown"
            in={lazyLoadAnimation}
            timeout={5000}
          >
            <div className="flex-grow-0 pb-1 mt-auto flex flex-row md:w-3/4 items-center space-x-2">
              <Tooltip placement="right" border="#FFF" background="#DB2777" content={socials.discord} radius={6}>
                <FaDiscord  className="inline-block hover:scale-110 transition w-8 h-8 md:w-9 md:h-9 p-1 text-indigo-500 bg-white rounded-full "/>
              </Tooltip>
              <a href={`https://wa.me/55${socials.phone}?text=Olá`} >
                <FaWhatsapp className="inline-block hover:scale-110 transition w-8 h-8 md:w-9 md:h-9 p-1 bg-secondary-500 dark:bg-secondary-600 text-white rounded-full "/>
              </a>
            </div>
          </CSSTransition>
        </div>
        <form
          ref={form}
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-5/12 md:w-1/2 flex flex-col md:ml-auto w-full px-10 py-8 rounded-xl shadow-2xl drop-shadow-2xl bg-white dark:bg-gray-900 transition duration-200">
         
          <div className="relative mb-2">
            <FormLabel htmlFor="user_name">Nome</FormLabel>
            <GroupInput name="user_name" type="text" onChange={(e) => setName(e.target.value)}>
              <IoPersonSharp />
            </GroupInput>
          </div>
          <div className="relative mb-2">
            <FormLabel htmlFor="user_email">Email</FormLabel>
            <GroupInput name="user_email" type="email" onChange={(e) => setEmail(e.target.value)}>
              <MdAlternateEmail />
            </GroupInput>
            
          </div>
          <div className="relative mb-6">
            <FormLabel htmlFor="message">Mensagem</FormLabel>
            <TextArea rows="3" name="message" onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className="flex justify-end">
            <Button type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
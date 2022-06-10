/* eslint-disable import/no-unresolved */
import React from "react"
import axios from "axios"
import { Navigation, EffectFade } from "swiper";
import { FaBookReader } from "react-icons/fa";
import { CgAwards } from "react-icons/cg";
import { Swiper,  SwiperSlide } from "swiper/react";
import { courses, hardSkills } from "../data";
import SectionHeader from "./SectionHeader"
import TimelineCard from "./TimelineCard";
import Button from "./Button";
import Modal from "./Modal";
import Table from "./Table";
import Loading from "./Loading";

import "swiper/css";
import "swiper/css/navigation";
import LinkedinButton from "./LinkedinButton";

const sectionTitle = "Formação"
const sectionLabel = ""
const tableLoadingTimeout = 1500

export default function Training({className}) {
  const [aluraCertificates, setAluraCertificates] = React.useState([])
  const [aluraCourses, setAluraCourses] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true) 
  const [swiper, setSwiper] = React.useState(null)
  const [modalPage, setModalPage] = React.useState(0)
  
  const [trainingModalIsOpen, setTrainingModalOpen] = React.useState(false)
  const toggleTrainingModal = () => setTrainingModalOpen(!trainingModalIsOpen)
  const closeTrainingModal = () => setTrainingModalOpen(false)

  const [skillsModalIsOpen, setSkillsModalOpen] = React.useState(false)
  const toggleSkillsModal = () => setSkillsModalOpen(!trainingModalIsOpen)
  const closeSkillsModal = () => setSkillsModalOpen(false) 

  /** Fetch data */
  React.useEffect(() => {
    async function getAluraCertificates(){ 
      axios.get("/api/certificados")
        .then(result => result.text())
        .then(content => {

          const parser = new DOMParser(content)
          const doc = parser.parseFromString(content, "text/html")

          let certificates = []
          doc.querySelectorAll(".content-item-title").forEach((certificate) => certificates.push(certificate.innerHTML.trim()))

          certificates = certificates
            .filter(certificate => !certificate.includes("desabilitada") && certificate.includes("Formação:"))
            .map(certificate => { return certificate.replace(/\s+/g, " ")})
      
          let courses = []
          doc.querySelectorAll(".content-courseList-courseName").forEach((course) => courses.push(course.innerHTML.trim()))
          
          courses = courses
            .map(course => { return course.split("(de")[0]})
            .map(course => { return course.replace(/\s+/g, " ")})
          courses = [...new Set(courses)]

          setAluraCertificates(certificates)
          setAluraCourses(courses)
        })
    }
    
    setTimeout(function() { 
      if(aluraCertificates.length == 0 && trainingModalIsOpen) 
        getAluraCertificates() 
    }, tableLoadingTimeout);
  
  }, [trainingModalIsOpen])

  /** Callback used to re-render certificates table component with fetched data */
  const handleCertificates = React.useCallback(() => {
    return aluraCertificates.map((certificate) => { return [certificate, "Alura"]})
  }, [aluraCertificates])

  /** Callback used to re-render courses table component with fetched data */
  const handleCourses = React.useCallback(() => {
    return aluraCourses.map((course) => { return [course, "Alura"]})
  }, [aluraCourses])

  /** Effect used to disable loading spin after data array get filled */
  React.useEffect(() => {
    if(handleCertificates().length != 0)
      setIsLoading(false)
  }, [handleCertificates ])

  const defModalPage = (index) => { 
    if(swiper) {
      swiper.slideTo(index, 500) 
      setModalPage(index)
    }
  }
  const setCoursesPage = () => defModalPage(1)
  const setCertificatesPage = () => defModalPage(0)

  return(
    <section id="formacao" className={`${className}`}>
      <div className="max-w-screen-2xl -mt-4 py-10 mx-auto text-center">
        <SectionHeader className="text-white" title={sectionTitle} label={sectionLabel}>
          <FaBookReader />
        </SectionHeader>
        <Swiper 
          className="!px-20 !py-4 !mb-8 !justify-center !items-center" 
          id="training-timeline"
          grabCursor={true} 
          navigation={true} 
          spaceBetween={200} 
          modules={[Navigation]} 
          slidesPerView={1}
          centerInsufficientSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 0
            }
          }}
        >
          {courses
            .map((course, index) => (
              <SwiperSlide key={course.description + index} > 
                <TimelineCard ending={(index == courses.length - 1)} ring="ring-primary-600 dark:ring-primary-800" bgColor={course.icon.bgColor} time={course.time} title={course.title} description={course.description}>
                  {course.icon.svg}
                </TimelineCard>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex flex-row gap-2 justify-center" >
          <Button type="button" onClick={toggleSkillsModal}>
            Ver detalhes
          </Button>
          <Button type="button" onClick={toggleTrainingModal} secondary>
            <span className="flex items-center gap-1">Certificados <CgAwards className="inline-block w-5 h-5 -mr-1" /></span>
          </Button>
        </div>
        <Modal isOpen={trainingModalIsOpen} onRequestClose={closeTrainingModal} contentLabel="certificates-modal">
          <Swiper id="swiper-training" grabCursor={false} allowTouchMove={false} initialSlide={modalPage} onSwiper={setSwiper} effect={"fade"} modules={[EffectFade]} slidesPerView="1">
            <SwiperSlide>
              <Table headers={["Certificado", "Instituição"]} collection={handleCertificates} />
            </SwiperSlide>
            <SwiperSlide>
              <Table  headers={["Curso", "Instituição"]} collection={handleCourses} />
            </SwiperSlide>
          </Swiper>
          <div className={`flex justify-end px-8 py-4 gap-2 ${isLoading ? "hidden": ""}`}>
            <LinkedinButton />
            <Button className={modalPage == 0 ? "" : "hidden"} onClick={setCoursesPage}>Ver cursos</Button>
            <Button className={modalPage == 1 ? "" : "hidden"} onClick={setCertificatesPage}>Ver certificados</Button>
          </div>
          <Loading isLoading={isLoading} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></Loading>
        </Modal>

        <Modal isOpen={skillsModalIsOpen} onRequestClose={closeSkillsModal} contentLabel="training-skills-modal">
          <Table headers={["Conhecimentos"]} collection={() => hardSkills.map(skill => [skill])} />      
          <div className="flex justify-end px-8 py-4 gap-2">
            <LinkedinButton />
          </div>
        </Modal>

      </div>
    </section>
  )
}

/* eslint-disable import/no-unresolved */
import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { testimonials } from "../data";
import Recommendation from "./Recommendation";
import SectionHeader from "./SectionHeader";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const sectionTitle = "Recomendações"
const sectionLabel = ""

export default function Testimonials({ className }) {
  return (
    <section className={className} id="recomendacoes">
      <div className="container px-9 py-10 mx-auto text-center ">
        <SectionHeader className="text-secondary-600" title={sectionTitle} label={sectionLabel}>
          <UsersIcon />
        </SectionHeader>
        { testimonials.length >= 3 &&
          <Swiper
            className="!pb-12"
            effect={"coverflow"}
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            rewind={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 10,
              stretch: 100,
              depth: 700,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            centerInsufficientSlides={true}
            
            breakpoints={{
              1024: {
                slidesPerView: 2
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name + index} > 
                <Recommendation client={testimonial.name} company={testimonial.company} quote={testimonial.quote} image={testimonial.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        }
        { testimonials.length < 3 &&
          <Swiper
            className="!pb-12 md:!px-20"
            effect={"slide"}
            spaceBetween={100}
            centeredSlides={true}
            autoHeight={true}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            rewind={true}
            slidesPerView={1}
            pagination={true}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            breakpoints={{
              1536: {
                slidesPerView: 2
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name + index} > 
                <Recommendation client={testimonial.name} company={testimonial.company} quote={testimonial.quote} image={testimonial.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </section>
  );
}
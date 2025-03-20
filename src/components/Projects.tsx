import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import IMG_P1 from "../assets/image/projects/P1.png";
import IMG_P2 from "../assets/image/projects/P2.png";
import IMG_P3 from "../assets/image/projects/P3.png";
import IMG_P4 from "../assets/image/projects/P4.png";
import IMG_P5 from "../assets/image/projects/P5.png";
import IMG_P6 from "../assets/image/projects/P6.png";
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {};

function Projects({ }: Props) {
  const [t] = useTranslation("global");

  return (
    <div className="w-full normal-case" id="projects">
      <h1 className="text-5xl text-blue-200 dark:text-blue-100 px-4 mb-6">
        {t("content.projects")}
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full px-4"
      >

        <SwiperSlide>
          <div className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full [min-height:65vh]">
            <div>
              <img src={IMG_P1} alt="" className="w-full rounded-xl" />
            </div>
            <div className="text-white dark:text-black">
              <h2 className="mt-4 text-2xl lg:text-4xl">{t("content.P1Title")}</h2>
              <p className="text-justify">{t("content.P1description")}</p>
            </div>
            <div className="flex flex-row text-green-100">
              <p className="mr-2">#Laravel</p>
              <p className="mr-2">#MySQL</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full [min-height:65vh]">
            <div>
              <img src={IMG_P2} alt="" className="w-full rounded-xl" />
            </div>
            <div className="text-white dark:text-black">
              <h2 className="mt-4 text-2xl lg:text-4xl">{t("content.P2Title")}</h2>
              <p className="text-justify">{t("content.P2description")}</p>
            </div>
            <div className="flex flex-row text-green-100">
              <p className="mr-2">#SpringBoot</p>
              <p className="mr-2">#MySQL</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full [min-height:65vh]">
            <div>
              <img src={IMG_P3} alt="" className="w-full rounded-xl" />
            </div>
            <div className="text-white dark:text-black">
              <h2 className="mt-4 text-2xl lg:text-4xl">{t("content.P3Title")}</h2>
              <p className="text-justify">{t("content.P3description")}</p>
            </div>
            <div className="flex flex-row text-green-100">
              <p className="mr-2">#Python</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full [min-height:65vh]">
            <div>
              <img src={IMG_P4} alt="" className="w-full rounded-xl" />
            </div>
            <div className="text-white dark:text-black">
              <h2 className="mt-4 text-2xl lg:text-4xl">{t("content.P4Title")}</h2>
              <p className="text-justify">{t("content.P4description")}</p>
            </div>
            <div className="flex flex-row text-green-100">
              <p className="mr-2">#Python</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full [min-height:65vh]">
            <div>
              <img src={IMG_P5} alt="" className="w-full rounded-xl" />
            </div>
            <div className="text-white dark:text-black">
              <h2 className="mt-4 text-2xl lg:text-4xl">{t("content.P5Title")}</h2>
              <p className="text-justify">{t("content.P5description")}</p>
            </div>
            <div className="flex flex-row text-green-100">
              <p className="mr-2">#GDScript</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col bg-slate-600 dark:bg-slate-100 p-5 rounded-2xl w-full h-full [min-height:65vh]">
            <div>
              <img src={IMG_P6} alt="" className="w-full rounded-xl" />
            </div>
            <div className="text-white dark:text-black">
              <h2 className="mt-4 text-2xl lg:text-4xl">{t("content.P6Title")}</h2>
              <p className="text-justify">{t("content.P6description")}</p>
            </div>
            <div className="flex flex-row text-green-100">
              <p className="mr-2">#Java</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Projects;
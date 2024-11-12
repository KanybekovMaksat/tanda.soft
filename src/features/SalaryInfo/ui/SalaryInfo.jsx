import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SalaryInfoCard from "@/entities/SalaryInfo/ui/SalaryInfoCard";
import styles from "@/entities/SalaryInfo/style/SalaryInfo.module.scss";
import { Navigation, A11y, Autoplay, Pagination,  Keyboard, } from "swiper/modules";
import SwiperNavigation from "@/shared/Swiper/ui/SwiperNavigation";
import { professionData } from "../model/SalaryInfoData";
import { Button } from "@mui/material";
import pause from "../../../../public/images/icon/icon-pause.png";
import play from "../../../../public/images/icon/icon-play.png";
function SalaryInfo() {
  const swiperRef = useRef(null);
  const [isAutoplayRunning, setIsAutoplauRunning] = useState(true);

  const toogleAutoplay = () => {
    if (swiperRef.current?.autoplay.running) {
      swiperRef.current.autoplay.stop();
      setIsAutoplauRunning(false);
    } else {
      swiperRef.current.autoplay.start();
      setIsAutoplauRunning(true);
    }
  };
  return (
    <div className={styles.SalaryInfo}>
      <div className="container">
        <h2>Заработок по профессиям</h2>
        <Button variant="text" onClick={toogleAutoplay}>
          {isAutoplayRunning ? (
            <img style={{ width: "35px" }} src={pause} alt="" />
          ) : (
            <img style={{ width: "35px" }} src={play} alt="" />
          )}
        </Button>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          loop={true}
          modules={[Navigation, A11y, Autoplay, Pagination, Keyboard]}
          slidesPerView={3}
          direction="horizontal"
          keyboard={{ enabled: true }}

          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          simulateTouch={true}
          allowTouchMove={true}
          touchRatio={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0:{
              slidesPerView:1,
            },
            727: {
              slidesPerView: 2,
            },
            954: {
              slidesPerView: 3,
            },
          }}
        >
          {professionData.length ? (
            professionData.map((prefession, index) => (
              <SwiperSlide key={index}>
                <SalaryInfoCard profession={prefession} />
              </SwiperSlide>
            ))
          ) : (
            <p>Нет данных для отображения</p>
          )}
          <div
            className="swiper-pagination"
            style={{ position: "absolute" }}
          ></div>
        </Swiper>
      </div>
    </div>
  );
}

export default SalaryInfo;

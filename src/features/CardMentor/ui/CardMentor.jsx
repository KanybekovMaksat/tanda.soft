import React, { useRef, useState } from "react";
import styles from "@/entities/CardMentor/style/CardMentor.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { mentors } from "../model/CardMentorData";
import MentorCard from "@/entities/CardMentor/ui/MentorCard";
import { Button } from "@mui/material";
import pause from "../../../../public/images/icon/icon-pause.png";
import play from "../../../../public/images/icon/icon-play.png";
const CardMentor = () => {
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
    <div className={styles.CardMentor}>
      <div className="container">
        <div className={styles.CardMentor__content}>
          <h2>Наши Ментора</h2>
          <Button  sx={{marginBottom: '10px'}} variant="text" onClick={toogleAutoplay}>
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
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
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
            {mentors.map((mentor, index) => (
              <SwiperSlide key={index}>
                <MentorCard mentor={mentor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CardMentor;

import React from "react";
import styles from "@/shared/Swiper/style/SwiperNavigation.module.scss";

const SwiperNavigation = () => {
  return (
    <div className={styles.SwiperNavigation}>
      <div className={`${styles['swiper-button-prev']} ${styles['custom-nav-btn']}`}></div>
      <div className={`${styles['swiper-button-next']} ${styles['custom-nav-btn']}`}></div>
    </div>
  );
};

export default SwiperNavigation;
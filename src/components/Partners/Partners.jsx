import React from "react";
import styles from "./Partners.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import wmg from "../../assets/wmg.png";
import umg from "../../assets/umg.png";
import at from "../../assets/at.png";
import sony from "../../assets/sony.webp";
import spotify from "../../assets/spotify.png";
import vevo from "../../assets/vevo.png";

const Partners = () => {
  return (
    <section className={styles.wrapper}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={`mySwiper ${styles.swiper}`}
      >
        <SwiperSlide className={styles.swiper_slide}>
          <img src={wmg} alt="wmc" />
          <p>
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={umg} alt="umg" />
          <p>
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={at} alt="at" />
          <p>
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </SwiperSlide>

        <SwiperSlide className={styles.swiper_slide}>
          <img src={spotify} alt="spotify" />
          <p>
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={vevo} alt="vevo" />
          <p>
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img src={sony} alt="sony" />
          <p>
            Our team works with our clients to refine an idea and concept into
            an executable design. We create a final design that encompasses the
            brand narrative to bring stories to life and provide end-to-end
            design solutions from concept, design, and architectural drawings to
            3D renderings.
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Partners;

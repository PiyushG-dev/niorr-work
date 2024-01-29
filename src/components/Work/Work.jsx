import React from "react";
import styles from "./Work.module.css";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import img1 from "../../assets/img1.avif";
import img2 from "../../assets/img2.avif";
import img3 from "../../assets/img3.avif";

const Work = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Explore our projects</h2>
      <div className={styles.projects_container}>
        <div className={styles.box}>
          <img src={img1} alt="img" />
          <video autoPlay loop muted src={video1}></video>
        </div>
        <div className={styles.box}>
          <img src={img2} alt="img" />
          <video autoPlay loop muted src={video2}></video>
        </div>
        <div className={styles.box}>
          <img src={img3} alt="img" />
          <video autoPlay loop muted src={video3}></video>
        </div>
      </div>
    </section>
  );
};

export default Work;

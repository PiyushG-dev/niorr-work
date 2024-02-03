import React, { useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import reel from "../../assets/reel.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const Navbar = () => {
  const menu_container = useRef(null);
  const navigation = useRef(null);
  const handleOpen = () => {
    let tl = gsap.timeline();

    tl.fromTo(
      menu_container.current,
      {
        y: -800,
      },
      {
        duration: 1,
        y: 0,
        ease: "power2.out",
      }
    );

    let ctx = gsap.context(() => {
      tl.fromTo(
        "div, button",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, delay: -0.5 }
      );
    }, navigation.current);
  };
  const handleClose = () => {
    let tl = gsap.timeline();

    tl.fromTo(
      menu_container.current,
      {
        y: 0,
      },
      {
        duration: 2,
        y: -800,
        ease: "power2.out",
      }
    );
  };

  return (
    <div className={styles.container}>
      <p>The Production Studio</p>
      <div onClick={handleOpen} className={styles.menu}>
        <p>Menu</p>
      </div>
      <div ref={menu_container} className={styles.menu_container}>
        <div onClick={handleClose} className={styles.close}>
          <p>close</p>
        </div>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <p className={styles.brand}>explore</p>
            <video autoPlay loop muted src={reel}></video>
            <div className={styles.controls}>
              <p>
                <FontAwesomeIcon icon={faPlay} /> Play reel
              </p>
              <p>-01:18</p>
            </div>
          </div>
          <div className={styles.top_right}>
            <div ref={navigation} className={styles.navigation}>
              <div className={styles.link_container}>
                <Link className={styles.link} to="/">
                  Home
                </Link>
              </div>
              <div className={styles.link_container}>
                <Link className={styles.link} to="/work">
                  Work
                </Link>
              </div>
              <div className={styles.link_container}>
                <Link className={styles.link} to="/artists">
                  Artists
                </Link>
              </div>
              <div className={styles.link_container}>
                <Link className={styles.link} to="/contact">
                  Contact
                </Link>
              </div>
              <button className={styles.btn}>
                <span>Take a seat</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>Tommorow's Brand Today &#8482;</p>
          <div className={styles.socials}>
            <p>Instagram</p>
            <p>linkedln</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

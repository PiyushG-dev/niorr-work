import React, { useRef } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import reel from "../../assets/reel.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const Navbar = () => {
  const menu_container = useRef(null);
  const handleOpen = () => {
    gsap.fromTo(
      menu_container.current,
      {
        y: -1000,
      },
      { y: 0, duration: 1 }
    );
  };
  const handleClose = () => {
    gsap.to(menu_container.current, { y: -1000, duration: 2 });
  };

  return (
    <div className={styles.container}>
      <p>The Production Studio</p>
      <div onClick={handleOpen} className={styles.menu}>
        Menu
      </div>
      <div ref={menu_container} className={styles.menu_container}>
        <div onClick={handleClose} className={styles.close}>
          close
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
            <div className={styles.navigation}>
              <Link className={styles.link} to="/">
                Home
              </Link>
              <Link className={styles.link} to="/work">
                Work
              </Link>
              <Link className={styles.link} to="/artists">
                Artists
              </Link>
              <Link className={styles.link} to="/contact">
                Contact
              </Link>
              <button>Take a seat</button>
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

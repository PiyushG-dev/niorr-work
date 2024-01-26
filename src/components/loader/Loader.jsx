import React, { useEffect, useRef } from "react";
import styles from "./Loader.module.css";
import { gsap } from "gsap";

const Loader = () => {
  const con = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      one.current,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 1 }
    );

    gsap.fromTo(
      two.current,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 1.1 }
    );

    gsap.fromTo(
      three.current,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 1.2 }
    );

    gsap.to(one.current, { x: -40, opacity: 0, delay: 2 });
    gsap.to(two.current, { x: -40, opacity: 0, delay: 2.1 });
    gsap.to(three.current, { x: -40, opacity: 0, delay: 2.2 });

    gsap.to(con.current, { duration: 1, y: -600, zIndex: -10, delay: 2.8 });
    gsap.to(con.current, { duration: 3, y: -1000, zIndex: -10, delay: 3.6 });
  }, []);

  return (
    <div ref={con} className={styles.container}>
      <h3 ref={one}>Tommorow's</h3>
      <h3 ref={two}>Brand,</h3>
      <h3 ref={three}>Today.&#8482;</h3>
    </div>
  );
};

export default Loader;

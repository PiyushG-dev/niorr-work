import React, { useEffect, useRef } from "react";
import styles from "./Loader.module.css";
import { gsap } from "gsap";
import SplitType from "split-type";

const Loader = () => {
  const wrapper = useRef(null);
  const tagline = useRef(null);

  useEffect(() => {
    const myText = new SplitType(tagline.current);
    const tl = gsap.timeline();

    tl.fromTo(
      myText.words,
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.1 }
    );

    tl.to(myText.words, { x: -20, opacity: 0, stagger: 0.1 });

    tl.to(wrapper.current, { opacity: 0 });
    tl.to(wrapper.current, { display: "none" });
  }, []);

  return (
    <section ref={wrapper} className={styles.wrapper}>
      <h3 ref={tagline}>Tommorow's Brand Today &#8482;</h3>
    </section>
  );
};

export default Loader;

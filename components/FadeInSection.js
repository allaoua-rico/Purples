import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/FadeInSection.module.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`${styles.fade_in_section} ${isVisible && styles.is_visible}`}
    >
      {props.children}
    </div>
  );
}

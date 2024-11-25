import React from "react";
import styles from "./bubble.module.css";


interface IBubbleText {
    text: string
    text_style: string
}


const BubbleText: React.FC<IBubbleText> = ({ text, text_style }) => {
  return (
    <h2 className={` ${text_style}`}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;

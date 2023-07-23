import React from "react";
import styles from "./Button.module.scss";
import Arrow from "../../../public/assets/icons/right-arrow.svg";
import Image from "next/image";
type ButtonProps = {
  placeholder: string;
};
const Button = ({ placeholder }: ButtonProps) => {
  return (
    <button className={styles.primary_button}>
      {placeholder}
      <Image
        src={Arrow}
        width={13}
        height={13}
        alt='Right Arrow'
        className={styles.img_icon}
      />
    </button>
  );
};

export default Button;

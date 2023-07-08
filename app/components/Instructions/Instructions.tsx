import React from "react";
import styles from "./Instructions.module.scss";

type InstructionsProps = {
  instructions: string;
};
const Instructions = ({ instructions }: InstructionsProps) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: instructions }} />
    </>
  );
};

export default Instructions;

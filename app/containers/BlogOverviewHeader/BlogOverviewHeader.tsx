import React, { ReactComponentElement, ReactElement } from "react";
import styles from "./BlogOverviewHeader.module.scss";
import Link from "next/link";
import Button from "../../components/Button/Button";

type HeaderProps = {
  title: string;
  subtitle?: string;
  children?: ReactElement;
};

const BlogOverviewHeader = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      {subtitle && <h3>{subtitle}</h3>}
      {children}
    </div>
  );
};

export default BlogOverviewHeader;

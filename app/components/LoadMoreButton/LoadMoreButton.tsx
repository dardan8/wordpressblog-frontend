"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./LoadMoreButton.module.scss";
import PlusIcon from "../../../public/assets/icons/plus-icons.svg";
import { getAllRecipes } from "@/app/lib/posts";
import { RecipeProps } from "@/app/types";

const LoadMoreButton = ({ recipes, setRecipes }: any) => {
  const [buttonText, setButtonText] = useState("Load More Recipes");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const loadMoreButtonClick = async () => {
    setButtonText("Loading...");
    setButtonDisabled(true);
    const newRecipes = await getAllRecipes(recipes.pageInfo.endCursor);

    let updatedRecipes = {
      pageInfo: {},
      nodes: [],
    };

    updatedRecipes.pageInfo = newRecipes.pageInfo;

    recipes.nodes.map((node: any) => {
      updatedRecipes.nodes.push(node);
    });

    newRecipes.nodes.map((node) => {
      updatedRecipes.nodes.push(node);
    });

    setRecipes(updatedRecipes);
    if (newRecipes.pageInfo.hasNextPage) {
      setButtonText("Load More Recipes");
      setButtonDisabled(false);
    } else {
      setButtonText("All Recipes Loaded");
      setButtonDisabled(true);
    }
  };

  return (
    <button
      className={styles.loadmore_button}
      onClick={loadMoreButtonClick}
      disabled={buttonDisabled}
    >
      {buttonText}
      {buttonDisabled ? (
        ""
      ) : (
        <Image
          src={PlusIcon}
          width={12}
          height={12}
          alt='Plus Icon'
          className={styles.img_icon}
        />
      )}
    </button>
  );
};

export default LoadMoreButton;

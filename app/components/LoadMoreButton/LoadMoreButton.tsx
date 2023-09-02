"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./LoadMoreButton.module.scss";
import PlusIcon from "../../../public/assets/icons/plus-icons.svg";
import { getAllRecipes } from "@/app/lib/recipeRequests";
import { RecipeSingle, RecipeRes } from "@/app/types";

type RecipeState = {
  recipes: RecipeRes;
  setRecipes: any;
};

const LoadMoreButton = ({ recipes, setRecipes }: RecipeState) => {
  const [buttonText, setButtonText] = useState("Load More Recipes");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const loadMoreButtonClick = async () => {
    setButtonText("Loading...");
    setButtonDisabled(true);

    const newRecipes = await getAllRecipes(recipes?.pageInfo?.endCursor);

    let updatedRecipes: RecipeRes = {
      pageInfo: {},
      nodes: [],
    };

    updatedRecipes.pageInfo = newRecipes.pageInfo;

    recipes.nodes.map((node: RecipeSingle) => {
      updatedRecipes.nodes.push(node);
    });

    newRecipes.nodes.map((node: RecipeSingle) => {
      updatedRecipes.nodes.push(node);
    });

    setRecipes(updatedRecipes);
    if (newRecipes.pageInfo.hasNextPage) {
      setButtonText("Load more recipes");
      setButtonDisabled(false);
    } else {
      setButtonText("All recipes are loaded");
      setButtonDisabled(true);
    }
  };

  return (
    <button
      className={`${
        buttonDisabled
          ? `${styles.loadmore_button_disabled}`
          : `${styles.loadmore_button}`
      }`}
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

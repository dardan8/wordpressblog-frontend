import React from "react";

const Page = ({ params }: { params: { recipe: string } }) => {
  return (
    <div>
      Single Recipe
      <p> {params.recipe} </p>
    </div>
  );
};

export default Page;

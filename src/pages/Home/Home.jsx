import { useState } from "react";
import { useAllPaintings } from "../../api/useAllPaintinsg";
import { useCategories } from "../../api/useCategories";

export const Home = () => {
  const { data } = useAllPaintings();
  const getCategories = useCategories(data);
  const categories = getCategories?.data?.categories;
  const pictures = getCategories?.data?.pictures;

  return (
    <div className="page">
      <h2 className="title-2">
        Mr. Van G
      </h2>
    </div>
  );
};

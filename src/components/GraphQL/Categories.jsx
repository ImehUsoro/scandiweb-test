import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { CATEGORIES } from "./Queries";

const Categories = () => {
  const { error, loading, data } = useQuery(CATEGORIES);

  useEffect(() => {
    console.log(data.categories);
  }, [data]);
  return <div>Categories</div>;
};

export default Categories;

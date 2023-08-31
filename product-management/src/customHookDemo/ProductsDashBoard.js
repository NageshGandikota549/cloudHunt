import React from "react";
import useFetch from "./useFetch";

const ProductsDashBoard = () => {
  const [data, loading, error] = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      {loading ? <div>Loading.....</div> : <div>{JSON.stringify(data)}</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default ProductsDashBoard;

import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import { Filter, IFilterPops } from "./components/filter/Filter";

const url = "https://fakestoreapi.com/products";

export function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [productId, setProductId] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  const handleProductIdChange = (value: string) => {
    setProductId(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const getProducts = (productId: string | null) => {
    if (productId !== null && parseInt(productId) <= 0) {
      setShowError(true);
      return;
    }

    const updatedURL = productId ? `${url}/${productId}` : url;
    console.log("updatedURL", updatedURL);
    
    fetch(updatedURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShowError(false);
        if (categories.length === 0) {
          let categoryList = data.map((x: any) => x.category);

          categoryList = categoryList.filter(
            (x: string, idx: number) => categoryList.indexOf(x) === idx
          );
          setCategories(categoryList);
        }
        const uData = Array.isArray(data) ? data : [data];
        setProducts(uData);
      })
      .catch((error) => {
        setShowError(error);
      });
  };
  let timeInterval = null;
  // Mounting phase
  useEffect(() => {
    getProducts(null);
  }, []);

  //Updating Phase
  useEffect(() => {
    // if (productId > 0) {
    getProducts(productId);
    // }
  }, [productId]);

  //Unmounting Phase
  useEffect(() => {
    return () => {
      console.log("component unmounting..");
    };
  }, []);

  const filterProps: IFilterPops = {
    selectedCategory,
    productId,
    categories,
    onProductIdChange: handleProductIdChange,
    onCategoryChange: handleCategoryChange,
  };

  return (
    <div>
      <Filter {...filterProps} />

      {!showError && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((x) => {
              return (
                <tr data-testId="product-row" key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.title}</td>
                  <td>{x.category}</td>
                  <td>{x.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {showError && <div>{showError}</div>}
    </div>
  );
}

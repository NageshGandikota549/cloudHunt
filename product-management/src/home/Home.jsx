import { useEffect, useState } from "react";
import "./Home.css";
import { Filter } from "./components/filter";

const url = "https://fakestoreapi.com/products";

export function Home() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showError, setShowError] = useState("");

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getProducts = (productId) => {
    // "-1" -- > -1

    if (productId !== null && parseInt(productId) <= 0) {
      setShowError("internal server error...");
      return;
    }

    const updatedURL = productId ? `${url}/${productId}` : url;
    fetch(updatedURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShowError(false);
        if (categories.length === 0) {
          let categoryList = data.map((x) => x.category);

          categoryList = categoryList.filter(
            (x, idx) => categoryList.indexOf(x) === idx
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

  const filterProps = {
    selectedCategory,
    categories,
    onProductIdChange: handleProductIdChange,
    onCategoryChange: handleCategoryChange,
  };

  return (
    <div>
      <Filter {...filterProps} />
      {/*       
      <Filter
        selectedCategory={selectedCategory}
        categories={categories}
        onProductIdChange={handleProductIdChange}
        onCategoryChange={handleCategoryChange}
      /> */}

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
                <tr key={x.id}>
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

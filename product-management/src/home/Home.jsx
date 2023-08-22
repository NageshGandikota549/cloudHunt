import { useEffect, useState } from "react";
import "./Home.css";

const url = "https://fakestoreapi.com/products";

export function Home() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const getProducts = (productId) => {
    const updatedURL = productId ? `${url}/${productId}` : url;
    fetch(updatedURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (categories.length === 0) {
          let categoryList = data.map((x) => x.category);

          categoryList = categoryList.filter(
            (x, idx) => categoryList.indexOf(x) === idx
          );
          setCategories(categoryList);
        }

        const uData = Array.isArray(data) ? data : [data];
        setProducts(uData);
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

  return (
    <div>
      <input type="number" onChange={handleProductIdChange} />
      <select>
        {categories.map((x) => {
          return <option value={x}>{x}</option>;
        })}
      </select>

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
    </div>
  );
}

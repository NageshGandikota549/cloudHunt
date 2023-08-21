import { useEffect, useState } from "react";
const url = "https://fakestoreapi.com/products";

export function Home() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);

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
        setProducts(data);
      });
  };

  //Mounting phase
//   useEffect(() => {
//     getProducts(null);
//   }, []);

  //Updating Phase
  useEffect(() => {
    // if (productId > 0) {
      getProducts(productId);
    // }
  }, [productId]);

  //Unmounting Phase

  return (
    <div>
      <input type="number" onChange={handleProductIdChange} />

      {JSON.stringify(products)}
    </div>
  );
}

export const Filter = ({
  selectedCategory,
  categories,
  productId,
  onProductIdChange,
  onCategoryChange,
}) => {
  return (
    <>
      <input type="number" value={productId} onChange={onProductIdChange} />
      <select onChange={onCategoryChange} value={selectedCategory}>
        <option value="">All Categories</option>
        {categories.map((x) => {
          return <option value={x}>{x}</option>;
        })}
      </select>
    </>
  );
};

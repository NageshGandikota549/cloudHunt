import React from "react";

export interface IFilterPops {
  selectedCategory: string;
  categories: string[];
  productId: string | null;
  onProductIdChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export const Filter: React.FC<IFilterPops> = ({
  selectedCategory,
  categories,
  productId,
  onProductIdChange,
  onCategoryChange,
}) => {
  return (
    <>
      <input
        id="test"
        data-testId="number-field"
        type="number"
        value={productId?.toString()}
        onChange={(event) => onProductIdChange(event.target.value)}
      />
      <select
        onChange={(event) => onCategoryChange(event.target.value)}
        value={selectedCategory}
      >
        <option value="">All Categories</option>
        {categories.map((x) => {
          return <option value={x}>{x}</option>;
        })}
      </select>
    </>
  );
};

import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Filter, IFilterPops } from "./Filter";
import userEvent from "@testing-library/user-event";
describe("Filter Component", () => {
  const filterProps: IFilterPops = {
    selectedCategory: "1",
    categories: ["1", "2", "3"],
    productId: null,
    onProductIdChange: jest.fn(),
    onCategoryChange: jest.fn(),
  };

  test("Should Show Number Input", () => {
    //arrange
    render(<Filter {...filterProps} />);
    //act

    //assert
    // const numberField = screen.getByRole("spinbutton");
    const numberField = screen.getByTestId("number-field");
    expect(numberField).toBeInTheDocument();
  });
  test("Should Show Category Dropdown", () => {
    //arrange
    render(<Filter {...filterProps} />);
    //act

    //assert
    // const numberField = screen.getByRole("spinbutton");
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
  });

  test("should change the product Id", () => {
    //arrange
    render(<Filter {...filterProps} />);
    //act

    //assert
    // const numberField = screen.getByRole("spinbutton");
    const numberField = screen.getByTestId("number-field");
    fireEvent.change(numberField, { target: { value: 4 } });

    expect(filterProps.onProductIdChange).toHaveBeenCalledWith("4");
  });
  test("should change the categoryID dropdown", () => {
    //arrange
    render(<Filter {...filterProps} />);
    //act

    //assert
    // const numberField = screen.getByRole("spinbutton");
    const dropdown = screen.getByRole("combobox");
    fireEvent.change(dropdown, { target: { value: "2" } });

    //   userEvent.selectOptions(
    //     dropdown,
    //     screen.getByRole("option", { name: "2" })
    //   );

    expect(filterProps.onCategoryChange).toHaveBeenCalledWith("2");
  });
});

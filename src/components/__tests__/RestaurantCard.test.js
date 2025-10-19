import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={{ info: MOCK_DATA }} />);

  const name = screen.getByText("Theobroma");

  expect(name).toBeInTheDocument();
});

import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search relist for delight text input", async () => {
  // rendering
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // beforeSearching
  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(11);

  // querying
  // find search button
  const searchBtn = screen.getByRole("button", { name: "Search" });

  // find serchInput
  const searchInput = screen.getByTestId("searchInput");

  // onChangeEvent
  fireEvent.change(searchInput, { target: { value: "delight" } });

  //   // clickEvent
  fireEvent.click(searchBtn);

  //   console.log(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  // assserting
  expect(cardsAfterSearch.length).toBe(2);
});

it("should filter top rated resturant in the reslist", async () => {
  // rendering
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // finding the top rated restaurant
  // before filtering
  const beforFilter = screen.getAllByTestId("resCard");

  expect(beforFilter.length).toBe(11);

  // finding top rated button
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  // click topRatedButton
  fireEvent.click(topRatedButton);

  const afterFiler = screen.getAllByTestId("resCard");

  expect(afterFiler.length).toBe(7);
});

import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurentCard";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should load restaurant card page", () => {
  // rendering
  render(<RestaurantCard resData={MOCK_DATA} />);

  // querying
  const heading = screen.getByText("The Indian Curry House");

  // asserting
  expect(heading).toBeInTheDocument();
});

// it("should load restaurant card with promoted label", () => {
//   render(
//     <BrowserRouter>
//       <withPromotedLabel resData={MOCK_DATA} />
//     </BrowserRouter>
//   );

//   const promotedLabel = screen.getByText("promoted");

//   expect(promotedLabel).toBeInTheDocument();
// });

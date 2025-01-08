import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });

  // beforeEach(() => {
  //   console.log("before each ");
  // });

  // afterEach(() => {
  //   console.log("after each");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });

  it("should load contact us component", () => {
    render(<Contact />);

    // Target the main heading by its name
    const heading = screen.getByRole("heading", { name: /Our Office/i });

    expect(heading).toBeInTheDocument();
  });

  it("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input text inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByPlaceholderText("Your Email");

    // assertion
    expect(button).toBeInTheDocument();
  });

  it("should load 2 input boxes in contact comoponent", () => {
    // rendering
    render(<Contact />);

    // querying
    const inputBoxes = screen.getAllByRole("textbox");

    // asserting
    expect(inputBoxes.length).toBe(3);
  });
});

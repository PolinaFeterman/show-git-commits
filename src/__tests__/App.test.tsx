import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { App } from "../app";

describe("App", () => {
  test("should render header", () => {
    render(<App />);
    const header = screen.getByText("Commit Feed");
    expect(header).toBeInTheDocument();
  });
  test("should render correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

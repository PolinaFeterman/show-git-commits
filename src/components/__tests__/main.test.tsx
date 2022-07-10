import { BrowserRouter } from "react-router-dom";
import { AppCtx } from "../../app";
import { Main } from "../main";
import renderer from "react-test-renderer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

beforeEach(() => {
    jest.mock('react-router', () => ({
        ...jest.requireActual('react-router'),
        useParams: jest.fn().mockReturnValue({ org: 'm3db', repo: 'm3' }),
      }))
  });
describe("Main", () => {
  test("should render elements", () => {
    render(
      <AppCtx.Provider
        value={{
          perPage: 10,
        }}
      >
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </AppCtx.Provider>
    );
    expect(screen.getByText("Back to Settings")).toBeInTheDocument();
  });
  test("should render correctly", () => {
    const tree = renderer
      .create(
        <AppCtx.Provider
          value={{
            perPage: 10,
          }}
        >
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </AppCtx.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

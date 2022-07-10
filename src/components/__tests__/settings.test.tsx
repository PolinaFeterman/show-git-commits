import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter, Router, useNavigate } from "react-router-dom";
import renderer from "react-test-renderer";
import { AppCtx } from "../../app";
import { createMemoryHistory } from "history";

import { Settings } from "../settings";

describe("Settings", () => {
  test("should render elements", () => {
    render(
      <AppCtx.Provider
        value={{
          perPage: 10,
        }}
      >
        <BrowserRouter>
          <Settings />
        </BrowserRouter>
      </AppCtx.Provider>
    );
    expect(screen.getByText("Organization:")).toBeInTheDocument();
    expect(screen.getByText("Repo:")).toBeInTheDocument();
    expect(screen.getByText("Commits per page:")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
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
            <Settings />
          </BrowserRouter>
        </AppCtx.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

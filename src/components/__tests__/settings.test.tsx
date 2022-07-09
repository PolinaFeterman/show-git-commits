import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { AppCtx } from "../../app";

import { Settings } from "../settings";

describe("Settings", () => {
  test("should render header", () => {
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
  test("should click the button", async () => {
    const submitForm = jest.fn();
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
    const organization = screen.getByLabelText(
      "Organization:"
    ) as HTMLInputElement;
    fireEvent.change(organization, {
      target: { value: "m3db" },
    });

    expect(organization.value).toBe("m3db");

    const repo = screen.getByLabelText("Repo:") as HTMLInputElement;
    fireEvent.change(repo, {
      target: { value: "m3" },
    });

    expect(repo.value).toBe("m3");

    const submitButton = screen.getByRole("button");
    fireEvent.submit(submitButton);
    await waitFor(() => expect(submitForm).toHaveBeenCalledWith());
  });
});

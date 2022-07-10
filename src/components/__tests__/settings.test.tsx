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
//   test("should click the button", async () => {
//     const mockedNavigate = jest.fn();
//     jest.mock('react-router-dom', () => ({
//         ...jest.requireActual('react-router-dom') as any,
//        useNavigate: () => mockedNavigate,
//      }));
//     render(
//       <AppCtx.Provider
//         value={{
//           perPage: 10,
//         }}
//       >
//         <BrowserRouter>
//           <Settings />
//         </BrowserRouter>
//       </AppCtx.Provider>
//     );
//     const organization = screen.getByLabelText(
//       "Organization:"
//     ) as HTMLInputElement;
//     fireEvent.change(organization, {
//       target: { value: "m3db" },
//     });

//     expect(organization.value).toBe("m3db");

//     const repo = screen.getByLabelText("Repo:") as HTMLInputElement;
//     fireEvent.change(repo, {
//       target: { value: "m3" },
//     });

//     expect(repo.value).toBe("m3");

//     const submitButton = screen.getByRole("button");

//     fireEvent.click(submitButton);
//     expect(mockedNavigate).toHaveBeenCalledTimes(1);
//   });
  //   test("should submit correctly", async () => {
  //     const tree = renderer.create(
  //       <AppCtx.Provider
  //         value={{
  //           perPage: 10,
  //         }}
  //       >
  //         <BrowserRouter>

  //           <Settings />
  //         </BrowserRouter>
  //       </AppCtx.Provider>
  //     );
  //     expect(tree).toMatchSnapshot();
  //     const instance= tree.getInstance();
  //     const submitButton = await tree.root.findByProps({
  //       type: "submit",
  //     });
  //     expect(submitButton).toBeDefined();
  //     const organization = await tree.root.findByProps({
  //       name: "organization",
  //     });
  //     expect(organization).toBeDefined();
  //     const repo = await tree.root.findByProps({
  //         name: "repo",
  //       });
  //       expect(repo).toBeDefined();
  //       organization.props.value="m3db";
  //       repo.props.value="m3";
  //       expect(tree).toMatchSnapshot();
  //   });
});

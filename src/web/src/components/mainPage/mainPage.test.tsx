// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "./mainPage";

test("renders side menu", () => {
    render(<MainPage />);
    const linkElement = screen.getByTestId("SideMenu");
    expect(linkElement).toBeInTheDocument();
});

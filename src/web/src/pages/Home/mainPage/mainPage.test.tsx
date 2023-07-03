// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "./mainPage";

describe("MainPage", () => {
    test("renders the main page component", () => {
        render(<MainPage />);
        const mainPageElement = screen.getByTestId("main page");
        expect(mainPageElement).toBeInTheDocument();
    });

    test("renders the map component", () => {
        render(<MainPage />);
        const mapComponentElement = screen.getByTestId("map component");
        expect(mapComponentElement).toBeInTheDocument();
    });

    test("renders the side menu component", () => {
        render(<MainPage />);
        const sideMenuElement = screen.getByTestId("side menu");
        expect(sideMenuElement).toBeInTheDocument();
    });
});

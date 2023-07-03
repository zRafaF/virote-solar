// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FunctionComponent } from "react";
import MainPage from "./mainPage/mainPage";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
            <MainPage />
        </>
    );
};

export default Home;

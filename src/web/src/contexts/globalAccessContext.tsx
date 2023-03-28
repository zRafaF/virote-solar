// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { createContext } from "react";

export const globalAccessDefault: globalAccessInterface = {
    //updatePortList: alertMyself(),
    ports: [],
};

const GlobalAccessContext = createContext<any>([globalAccessDefault, () => {}]);

export default GlobalAccessContext;

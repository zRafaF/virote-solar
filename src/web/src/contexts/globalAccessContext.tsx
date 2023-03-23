// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { createContext } from "react";

function alertMyself() {
    alert(20);
}

interface globalAccessInterface {
    //(): void;
    ports: PortType[];
}

export const globalAccessDefault: globalAccessInterface = {
    //updatePortList: alertMyself(),
    ports: [],
};

const GlobalAccessContext = createContext<any>([globalAccessDefault, () => {}]);

export default GlobalAccessContext;

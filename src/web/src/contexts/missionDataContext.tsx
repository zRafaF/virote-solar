// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { LatLngExpression } from "leaflet";
import {
    Dispatch,
    FunctionComponent,
    SetStateAction,
    createContext,
    useState,
} from "react";

interface GlobalAccessContextProps {
    waypoints: LatLngExpression[];
}

const globalAccessDefault: GlobalAccessContextProps = {
    waypoints: [],
};

const GlobalAccessContext = createContext<
    [
        GlobalAccessContextProps,
        Dispatch<SetStateAction<GlobalAccessContextProps>>
    ]
>([globalAccessDefault, () => {}]);

export default GlobalAccessContext;

interface GlobalAccessProviderProps {
    children: any;
}

export const GlobalAccessProvider: FunctionComponent<
    GlobalAccessProviderProps
> = ({ children }) => {
    const [docsContext, setDocsContext] = useState(globalAccessDefault);

    return (
        <GlobalAccessContext.Provider value={[docsContext, setDocsContext]}>
            {children}
        </GlobalAccessContext.Provider>
    );
};

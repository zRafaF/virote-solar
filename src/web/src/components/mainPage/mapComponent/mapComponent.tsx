// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ImagePlaceHolder from "./mapPlaceHolder.png";

function MapComponent() {
    return (
        <img
            src={ImagePlaceHolder}
            alt="Place holder of a map"
            width={"100%"}
        ></img>
    );
}

export default MapComponent;

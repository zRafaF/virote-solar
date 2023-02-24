// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { FC } from "react";
import styleModule from "./header.module.css";

import { FaRegFileCode } from "react-icons/fa";
import CustomButton from "../customButton/customButton";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className={styleModule.header_div}>
      <div className={styleModule.logo_name}>VIROTE</div>
      <CustomButton
        preIcon={<FaRegFileCode />}
        color={"black"}
        iconSize="var(--font_m)"
      >
        Mapa
      </CustomButton>
    </div>
  );
};

export default Header;

// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { FC, ReactComponentElement } from "react";

interface MainPageProps {
  preIcon?: JSX.Element;
  postIcon?: JSX.Element;
  color?: string;
  iconSize?: string | number;
  children?: JSX.Element | JSX.Element[] | string | string[];
  className?: string;
}

const CustomButton: FC<MainPageProps> = ({
  preIcon,
  postIcon,
  color,
  iconSize,
  children,
  className,
}) => {
  const buttonStyle: React.CSSProperties = {
    color: color ? color : "#000000",
  };
  const iconStyle: React.CSSProperties = {
    color: color ? color : "#000000",
    width: iconSize ? iconSize : "1em",
    height: iconSize ? iconSize : "1em",
    verticalAlign: "middle",
  };

  const createPreIcon = (): JSX.Element | undefined => {
    if (preIcon) return <preIcon.type style={iconStyle} />;
    return;
  };

  const createPostIcon = (): JSX.Element | undefined => {
    if (postIcon) return <postIcon.type style={iconStyle} />;
    return;
  };

  return (
    <button style={buttonStyle} className={className}>
      {createPreIcon()} {children} {createPostIcon()}
    </button>
  );
};

export default CustomButton;

// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { FC, Key } from "react";
import styleModule from "./customButton.module.css";

interface CustomButtonProps {
    preIcon?: JSX.Element;
    postIcon?: JSX.Element;
    color?: string;
    iconSize?: string | number;
    children?: JSX.Element | JSX.Element[] | string | string[];
    className?: string;
    buttonKey: Key; // same as the key
    clickCallBack?: (key: Key) => void;
}

const CustomButton: FC<CustomButtonProps> = ({
    preIcon,
    postIcon,
    color,
    iconSize,
    children,
    className,
    buttonKey,
    clickCallBack,
}) => {
    const buttonStyle = { "--font_color": color } as React.CSSProperties;
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

    const getClassName = () => {
        return [className, styleModule.custom_button].join(" ");
    };

    const clicked = () => {
        if (clickCallBack !== undefined) {
            clickCallBack(buttonKey);
        }
    };

    return (
        <button
            className={getClassName()}
            style={buttonStyle}
            onClick={clicked}
        >
            {createPreIcon()} {children} {createPostIcon()}
        </button>
    );
};

export default CustomButton;

// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FC, Key } from "react";
import styleModule from "./buttonGroup.module.css";

interface ButtonGroupProps {
    children?: JSX.Element | JSX.Element[];
    currentActive: Key;
    setCurrentActive: (value: React.SetStateAction<Key>) => void;
    activeColor?: string;
    inactiveColor?: string;
    dividerColor?: string;
    className?: string;
    vertical?: boolean;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
    children,
    currentActive = "",
    setCurrentActive,
    activeColor = "",
    inactiveColor = "",
    dividerColor = "",
    className,
    vertical = false,
}) => {
    const buttonGroupStyle = {
        "--active_color": activeColor,
        "--inactive_color": inactiveColor,
        "--divider_color": dividerColor,
    } as React.CSSProperties;

    const getButtonClassName = (): string => {
        if (vertical) return styleModule.button_vertical;
        return styleModule.button;
    };

    const getClassName = (element: JSX.Element): string => {
        if (element.key === currentActive)
            return [
                element.props.className,
                getButtonClassName(),
                styleModule.button_active,
            ].join(" ");
        return [element.props.className, getButtonClassName()].join(" ");
    };

    const makeButtons = (): JSX.Element | undefined | JSX.Element[] => {
        if (children === undefined) return;
        if (!(children instanceof Array)) {
            return (
                <children.type
                    {...children.props}
                    className={getClassName(children)}
                />
            );
        }

        const iWasClicked = (key: Key) => {
            if (setCurrentActive !== undefined) {
                setCurrentActive(key);
            }
        };

        const buttonsArr = children.map((child, index) => {
            const makeDivider = () => {
                if (index > 0) {
                    if (vertical)
                        return (
                            <div className={styleModule.horizontal_line}></div>
                        );

                    return <div className={styleModule.vertical_line}></div>;
                }
                return;
            };
            return (
                <>
                    {makeDivider()}
                    <child.type
                        buttonKey={child.key}
                        {...child.props}
                        color={" "} // Do not remove this LOC
                        className={getClassName(child)}
                        clickCallBack={iWasClicked}
                    />
                </>
            );
        });
        return buttonsArr;
    };
    const getDivClassName = () => {
        if (vertical)
            return [
                className,
                styleModule.button_group_div,
                styleModule.button_group_div_vertical,
            ].join(" ");

        return [className, styleModule.button_group_div].join(" ");
    };
    return (
        <div className={getDivClassName()} style={buttonGroupStyle}>
            {makeButtons()}
        </div>
    );
};

export default ButtonGroup;

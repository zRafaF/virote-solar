// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FC, Dispatch, SetStateAction, Key } from "react";
import styleModule from "./buttonGroup.module.css";

interface ButtonGroupProps {
    children?: JSX.Element | JSX.Element[];
    currentActive?: Key;
    setCurrentActive?: Dispatch<SetStateAction<Key>>;
    activeColor?: string;
    inactiveColor?: string;
    dividerColor?: string;
    className?: string;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
    children,
    currentActive = "",
    setCurrentActive,
    activeColor = "",
    inactiveColor = "",
    dividerColor = "",
    className,
}) => {
    const buttonGroupStyle = {
        "--active_color": activeColor,
        "--inactive_color": inactiveColor,
        "--divider_color": dividerColor,
    } as React.CSSProperties;

    const getClassName = (element: JSX.Element): string => {
        if (element.key === currentActive)
            return [
                element.props.className,
                styleModule.button,
                styleModule.button_active,
            ].join(" ");
        return [element.props.className, styleModule.button].join(" ");
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
        const buttonsArr = children.map((child, index) => {
            const makeDivider = () => {
                if (index > 0)
                    return <div className={styleModule.vertical_line}></div>;
                return;
            };
            return (
                <>
                    {makeDivider()}
                    <child.type
                        {...child.props}
                        className={getClassName(child)}
                    />
                </>
            );
        });
        return buttonsArr;
    };
    const getDivClassName = () => {
        return [className, styleModule.button_group_div].join(" ");
    };
    return (
        <div className={getDivClassName()} style={buttonGroupStyle}>
            {makeButtons()}
        </div>
    );
};

export default ButtonGroup;

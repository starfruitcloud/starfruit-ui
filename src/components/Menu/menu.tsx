import React, { FC, FunctionComponentElement, Children } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

export const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children } = props;
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
  });
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index,
        });
      } else {
        console.warn(
          "Warning:Menu has a child which is not a MenuItem component"
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      {renderChildren()}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;

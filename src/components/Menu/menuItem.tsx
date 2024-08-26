import React from "react";
import classNames from "classnames";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { disabled, className, style, children } = props;
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
  });

  const handleClick = () => {};
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";
export default MenuItem;

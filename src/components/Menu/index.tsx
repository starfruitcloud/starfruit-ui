import { FC } from 'react';
import Menu,{ MenuProps } from './menu';
import MenuItem,{ MenuItemProps } from './menuItem';

export type IMenuComponent = FC<MenuProps> & {
    Item:FC<MenuItemProps>,
}

const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;

export default TransMenu;



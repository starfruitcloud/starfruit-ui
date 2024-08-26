import React from "react";
import { render, RenderResult } from "@testing-library/react";

import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical",
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem disabled index={1}>
        disabled
      </MenuItem>
      <MenuItem index={3}>xyz</MenuItem>
    </Menu>
  );
};

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;

describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render corrent Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHave;
  });
});

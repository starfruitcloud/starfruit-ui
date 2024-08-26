import React from "react";
import { storiesOf } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Autocomplete } from "./autocomplete";
import { DataSourceType } from "./autocompleteProps";
interface LakerPlayerProps {
  value: string;
  number: number;
}

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

export default {
  title: "Autocomplete 输入建议",
  component: Autocomplete,
  // decorators: [withInfo],
  parameters: {
    info: {
      source: false,
    },
  },
};




storiesOf("Autocomplete 输入建议", module)

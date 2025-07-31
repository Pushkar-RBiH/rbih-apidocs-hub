import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "lrs/lrs-landowner",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "lrs/rajsthan",
          label: "Rajsthan",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "think360/think-360",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "think360/aadhar-redact",
          label: "Aadhar-redact",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "think360/facematch",
          label: "Facematch",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "Idfy/idfy-qa",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "Idfy/reverse-geocode",
          label: "Reverse Geocode",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

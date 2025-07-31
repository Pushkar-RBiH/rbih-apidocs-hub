import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "idfy/idfy-qa",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "idfy/reverse-geocode",
          label: "Reverse Geocode",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

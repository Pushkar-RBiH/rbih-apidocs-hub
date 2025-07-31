import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "satsure/postman-api-rbih",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "satsure/satsure-ka",
          label: "Satsure_KA",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

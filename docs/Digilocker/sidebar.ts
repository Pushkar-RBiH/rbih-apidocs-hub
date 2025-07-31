import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "Digilocker/postman-api-rbih",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "Digilocker/qa-el",
          label: "QA EL",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

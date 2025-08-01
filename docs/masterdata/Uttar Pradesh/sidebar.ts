import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "Masterdata/Uttar Pradesh/get-districts",
          label: "Get Districts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "Masterdata/Uttar Pradesh/get-khasra",
          label: "Get Khasra",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "Masterdata/Uttar Pradesh/get-subdistrict",
          label: "Get Subdistrict",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "Masterdata/Uttar Pradesh/get-village",
          label: "Get Village",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

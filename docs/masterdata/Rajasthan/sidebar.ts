import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "masterdata/Rajasthan/get-districts",
          label: "Get Districts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "masterdata/Rajasthan/get-khasra-list",
          label: "Get Khasra List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "masterdata/Rajasthan/get-subdistricts",
          label: "Get Subdistricts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "masterdata/Rajasthan/get-villages",
          label: "Get Villages",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

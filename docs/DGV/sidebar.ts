import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "DGV/dgv",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "DGV/consent-for-milk-insights",
          label: "Consent for Milk Insights",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "DGV/farmer-milk-insights",
          label: "Farmer Milk Insights",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "DGV/farmer-milk-insights-pdf",
          label: "Farmer Milk Insights PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "DGV/get-federations",
          label: "Get Federations",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "DGV/get-unions",
          label: "Get Unions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "DGV/get-states",
          label: "Get States",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "DGV/get-mcps",
          label: "Get Mcps",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

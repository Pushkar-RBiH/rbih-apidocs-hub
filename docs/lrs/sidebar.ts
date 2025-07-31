import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "lrs/chattisgarh",
          label: "Chattisgarh",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lrs/maharashtra",
          label: "Maharashtra",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lrs/odisha",
          label: "Odisha",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lrs/rajsthan",
          label: "Rajsthan",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lrs/tamil-nadu",
          label: "Tamil Nadu",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lrs/tripura",
          label: "Tripura",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lrs/uttar-pradesh",
          label: "Uttar Pradesh",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lrs/andhra-pradesh",
          label: "Andhra Pradesh",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "lrs/madhya-pradesh",
          label: "Madhya Pradesh",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

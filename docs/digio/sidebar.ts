import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "digio/digio-kyc",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "digio/fetch-id-data-voter-id",
          label: "Fetch ID data Voter ID",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

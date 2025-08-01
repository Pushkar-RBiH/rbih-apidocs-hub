import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "Lender Loan Journey/accept-loan",
          label: "Accept Loan",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Lender Loan Journey/disburse-loan",
          label: "Disburse Loan",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Lender Loan Journey/reject-loan",
          label: "Reject Loan",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Lender Loan Journey/withdraw-loan",
          label: "Withdraw Loan",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

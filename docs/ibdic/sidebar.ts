import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "Ibdic/ibdic",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "Ibdic/entity-registration",
          label: "entity-registration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/invoice-registration-with-code",
          label: "Invoice-Registration-With-Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/invoice-registration-without-entity-code",
          label: "Invoice-Registration-Without-Entity-Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/ledger-status-check",
          label: "Ledger-Status-Check",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/invoice-status-check-with-code",
          label: "Invoice-Status-Check-With-Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/invoice-status-check-without-code",
          label: "Invoice-Status-Check-Without-Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/finance",
          label: "Finance",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/disbursement",
          label: "Disbursement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/repayment",
          label: "Repayment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/enquiry",
          label: "Enquiry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "Ibdic/cancel",
          label: "Cancel",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

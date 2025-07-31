import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ibdic/ibdic",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "ibdic/entity-registration",
          label: "entity-registration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/invoice-registration-with-code",
          label: "Invoice-Registration-With-Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/invoice-registration-without-entity-code",
          label: "Invoice-Registration-Without-Entity-Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/ledger-status-check",
          label: "Ledger-Status-Check",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/invoice-status-check-with-code",
          label: "Invoice-Status-Check-With-Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/invoice-status-check-without-code",
          label: "Invoice-Status-Check-Without-Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/finance",
          label: "Finance",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/disbursement",
          label: "Disbursement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/repayment",
          label: "Repayment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/enquiry",
          label: "Enquiry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ibdic/cancel",
          label: "Cancel",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

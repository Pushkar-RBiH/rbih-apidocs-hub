import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "farmer-milk-insights/dgv-1-3",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "farmer-milk-insights/get-states",
          label: "Get States",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/get-federations",
          label: "Get Federations",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/get-unions",
          label: "Get Unions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/get-mcps",
          label: "Get Mcps",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/consent-for-milk-insights",
          label: "Consent for Milk Insights",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/farmer-milk-insights",
          label: "Farmer Milk Insights",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/farmer-milk-insights-pdf",
          label: "Farmer Milk Insights PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/farmer-milk-insights-0-1",
          label: "Farmer Milk Insights 0 1",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/http-localhost-8089-land-owner-details-1-5-en",
          label: "http://localhost:8089/land-owner-details/1.5/en",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/https-auth-nonprod-rbihub-io-authentication-oauth-2-1-2-token",
          label: "https://auth.nonprod.rbihub.io/authentication/oauth2/1.2/token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "farmer-milk-insights/https-extgw-nonprod-rbihub-io-dgv-farmermilkinsights-federations-1-3-en",
          label: "https://extgw.nonprod.rbihub.io/dgv/farmermilkinsights/federations/1.3/en",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

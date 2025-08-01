import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RBIH Developer Portal',
  tagline: 'Frictionless Finance for a Billion Indians™',
  favicon: 'img/rbih-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          // petstore: {
          //   specPath: "examples/petstore.yaml",
          //   outputDir: "docs/petstore",
          //   sidebarOptions: {
          //     groupPathsBy: "tag",
          //   },
          // } satisfies OpenApiPlugin.Options,
          farmermilkinsights: {
            specPath: "examples/farmer-milk-insights.yaml",
            outputDir: "docs/Farmer-Milk-Insights",
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          digilocker_dog: {
            specPath: "examples/digilocker_dog.yaml",
            outputDir: "docs/Digilocker",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          GSTN_TOPIC: {
            specPath: "examples/gstn-service.yaml",
            outputDir: "docs/Gstn-service",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          IBDIC: {
            specPath: "examples/ibdic.yaml",
            outputDir: "docs/Ibdic",
            hideSendButton:true,
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          LRS: {
            specPath: "multiple_states/LRS",
            outputDir: "docs/lrs",
            hideSendButton:true,
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          IDFY: {
            specPath: "examples/idfy.yaml",
            outputDir: "docs/idfy",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          Satsure: {
            specPath: "examples/satsure.yaml",
            outputDir: "docs/satsure",
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          Think360: {
            specPath: "examples/think360.yaml",
            outputDir: "docs/think360",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          Digio: {
            specPath: "examples/digio.yaml",
            outputDir: "docs/digio",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          Masterdata_Rajasthan: {
            specPath: "multiple_states/masterdata/Rajasthan",
            outputDir: "docs/masterdata/Rajasthan",
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], 
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Developer Portal',
      logo: {
        alt: 'My Site Logo',
        src: 'img/rbih-logo.svg',
      },
      items: [//items List on top
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'API Specs',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {// bottom layout
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Specs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'About Us',
          items: [
            {
              label: 'Who we are',
              href: 'https://rbihub.in/who-we-are/',
            },
            {
              label: 'Our Team',
              href: 'https://rbihub.in/our-rbih-team/',
            },
            {
              label: 'Careers',
              href: 'https://rbihub.in/careers/',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/folder',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

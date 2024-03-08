// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Virtalis Docs',
  tagline: 'Online documentation portal for Virtalis applications',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.docs.virtalis.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'virtalis', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/virtalis/docs/tree/master/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/navbar.css'),
            require.resolve('./src/css/sidebar.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"), {
        hashed: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          src: 'img/virtalis-logo.svg',
          width: 180,
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Visionary Render',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'userManualSidebar',
                label: 'User Manual',
              },
              {
                type: 'docSidebar',
                sidebarId: 'progGuideSidebar',
                label: 'Programming Guide',
              },
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'importersSidebar',
            position: 'left',
            label: 'Importers',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Miscellaneous',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'maxExporterSidebar',
                label: 'Max Exporter',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Virtalis. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['c', 'cmake', 'glsl', 'lua'],
      },
    }),
};

export default config;

// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Virtalis Docs',
  tagline: 'Documentation portal for Virtalis applications',
  favicon: 'favicon.ico',

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
    require.resolve('docusaurus-lunr-search')
  ],

  //future: {
  //  experimental_router: 'hash',
  //},

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          src: 'logo.svg',
          width: 185,
        },
      items: [
        {
          type: 'dropdown',
          position: 'left',
          label: 'Manuals',
          items: [
            {
              type: 'docSidebar',
              label: 'Importers and Exporters',
              sidebarId: 'importersAndExportersSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Virtalis Hub and Web Viewer',
              sidebarId: 'virtalisHubAndWebViewerSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Visionary Render',
              sidebarId: 'visionaryRenderSidebar',
            },
          ],
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Guides',
          items: [
            {
              type: 'docSidebar',
              label: 'Virtalis Hub System Admin',
              sidebarId: 'virtalisHubSystemAdminSidebar',
            },
            {
              type: 'docSidebar',
              label: 'Visionary Render Programming',
              sidebarId: 'visionaryRenderProgrammingSidebar',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'changelogsSidebar',
          position: 'left',
          label: 'Changelogs',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Virtalis Ltd. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['c', 'cmake', 'glsl', 'lua', 'json'],
    },
  }),
};

export default config;

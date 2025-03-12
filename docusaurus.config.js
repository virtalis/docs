// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Virtalis Docs',
  tagline: 'Documentation portal for Virtalis applications',
  favicon: 'favicon.ico',
  url: 'https://docs.virtalis.com',
  baseUrl: '/',
  organizationName: 'virtalis',
  projectName: 'docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
      require.resolve('docusaurus-plugin-search-local'), {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  //future: {
  //  experimental_router: 'hash',
  //},
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        logo: {
          src: 'logo.svg',
          width: 184,
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

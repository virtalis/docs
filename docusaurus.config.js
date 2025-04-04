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
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/admonitions.css'),
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/navbar.css'),
            require.resolve('./src/css/sidebar.css'),
          ],
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
  ],
  //future: {
  //  experimental_router: 'hash',
  //},
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      logo: {
        alt: 'Virtalis Docs Logo',
        src: 'assets/logos/virtalis-docs.svg',
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
          sidebarId: 'releaseNotesSidebar',
          position: 'left',
          label: 'Release Notes',
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
      logo: {
        alt: 'Virtalis Logo',
        src: 'assets/logos/virtalis.svg',
        srcDark: 'assets/logos/virtalis-dark.svg',
        href: 'https://virtalis.com',
        target: '_blank',
        width: 140,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Virtalis Ltd. All rights reserved.`,
    },
    colorMode: {
      defaultMode: 'dark',
    },
    algolia: {
      appId: 'N450QRS24Y',
      apiKey: '6d071f4bcb063177305cacdb6e2d8fe9',
      indexName: 'virtalis',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
      placeholder: '',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['c', 'cmake', 'glsl', 'lua', 'json'],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(238, 238, 240)',
        dark: 'rgb(27, 27, 29)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  },
};

export default config;

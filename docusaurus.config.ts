import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {

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

  //future: {
  //  experimental_router: 'hash',
  //},

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/virtalis/docs/tree/master/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        theme: {
          customCss: [
            './src/css/admonitions.css',
            './src/css/footer.css',
            './src/css/main.css',
            './src/css/navbar.css',
            './src/css/sidebar.css',
            './src/css/youtube.css',
          ],
        },
        // googleTagManager: {
        //   containerId: 'GTM-KBWDPQHK',
        // },
        // gtag: {
        //   trackingID: 'G-98F5PV30KY',
        //   anonymizeIP: true,
        // },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/importers-and-exporters/introduction',
            to: '/importers-and-exporters',
          },
          {
            from: '/virtalis-hub-and-web-viewer/introduction',
            to: '/virtalis-hub-and-web-viewer',
          },
          {
            from: '/virtalis-hub-system-admin/introduction',
            to: '/virtalis-hub-system-admin',
          },
          {
            from: '/visionary-render/introduction',
            to: '/visionary-render',
          },
          {
            from: '/visionary-render-programming/introduction',
            to: '/visionary-render-programming',
          },
          {
            from: '/release-notes/geovisionary',
            to: '/release-notes/geovisionary/2025.3',
          },
          {
            from: '/release-notes/virtalis-hub-and-web-viewer',
            to: '/release-notes/virtalis-hub-and-web-viewer/2025.1',
          },
          {
            from: '/release-notes/visionary-render',
            to: '/release-notes/visionary-render/2025.3',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Virtalis Docs Logo',
        src: 'assets/logos/virtalis-docs.svg',
        width: 180,
      },
      items: [
        {
          type: 'dropdown',
          position: 'left',
          label: 'User Manuals',
          items: [
            {
              type: 'docSidebar',
              label: 'Importers and Exporters',
              sidebarId: 'importersAndExportersSidebar',
            },
            {
              type: 'docSidebar',
              label: 'License Server',
              sidebarId: 'licenseServerSidebar',
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
          label: 'Technical Guides',
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
      links: [
        {
          items: [
            {
              html: `© ${new Date().getFullYear()} Virtalis Group. All rights reserved.`,
            },
          ],
        },
        {
          items: [
            {
              label: 'About',
              href: 'https://www.virtalis.com/about',
            },
            {
              label: 'Contact',
              href: 'https://www.virtalis.com/contact',
            },
            {
              label: 'Support',
              href: 'https://www.virtalis.com/support',
            },
            {
              label: 'Glossary',
              to: 'glossary',
            },
            {
              label: 'Privacy Policy',
              to: 'privacy-policy',
            },
            // {
            //   label: 'Terms and Conditions',
            //   to: 'terms-and-conditions',
            // },
          ],
        },
        {
          items: [
            {
              html: `<a href="https://virtalis.com" target="_blank" rel="noreferrer noopener" aria-label="Virtalis Homepage"><img src="/assets/logos/virtalis.svg" alt="Virtalis Logo" class="footer__icon"/></a>`,
            },
            {
              html: `<a href="https://github.com/virtalis" target="_blank" rel="noreferrer noopener" aria-label="Virtalis GitHub"><img src="/assets/logos/github.svg" alt="GitHub Logo" class="footer__icon"/></a>`,
            },
            {
              html: `<a href="https://www.linkedin.com/company/virtalis/" target="_blank" rel="noreferrer noopener" aria-label="Virtalis LinkedIn"><img src="/assets/logos/linkedin.svg" alt="LinkedIn Logo" class="footer__icon"/></a>`,
            },
            {
              html: `<a href="https://www.youtube.com/@VirtalisReality" target="_blank" rel="noreferrer noopener" aria-label="Virtalis YouTube"><img src="/assets/logos/youtube.svg" alt="YouTube Logo" class="footer__icon"/></a>`,
            },
          ],
        },
      ],
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
        light: 'rgb(240, 240, 240)',
        dark: 'rgb(30, 30, 30)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;

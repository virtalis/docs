// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manuals
  visrenSidebar: [{
    type: 'category',
    label: 'Visionary Render',
    link: { type: 'generated-index', slug: 'visren' },
    items: [{ type: 'autogenerated', dirName: 'visren' }],
    collapsed: false,
    collapsible: false,
  }],

  geoVisionarySidebar: [{
    type: 'category',
    label: 'GeoVisionary',
    link: { type: 'generated-index', slug: 'geovisionary' },
    items: [{ type: 'autogenerated', dirName: 'geovisionary' }],
    collapsed: false,
    collapsible: false,
  }],

  reachWebViewerSidebar: [{
    type: 'category',
    label: 'Reach Web Viewer',
    link: { type: 'generated-index', slug: 'reach-web-viewer' },
    items: [{ type: 'autogenerated', dirName: 'reach-web-viewer' }],
    collapsed: false,
    collapsible: false,
  }],

  virtalisHubSidebar: [{
    type: 'category',
    label: 'Virtalis Hub',
    link: { type: 'generated-index', slug: 'virtalis-hub' },
    items: [{ type: 'autogenerated', dirName: 'virtalis-hub' }],
    collapsed: false,
    collapsible: false,
  }],

  importersSidebar: [{
    type: 'category',
    label: 'Importers',
    link: { type: 'generated-index', slug: 'importers' },
    items: [{ type: 'autogenerated', dirName: 'importers' }],
    collapsed: false,
    collapsible: false,
  }],

  maxExporterSidebar: [{
    type: 'category',
    label: 'Max Exporter',
    link: { type: 'generated-index', slug: 'max-exporter' },
    items: [{ type: 'autogenerated', dirName: 'max-exporter' }],
    collapsed: false,
    collapsible: false,
  }],

  // Guides
  visrenDevSidebar: [{
    type: 'category',
    label: 'Visionary Render Developer',
    link: { type: 'generated-index', slug: 'visren-dev' },
    items: [{ type: 'autogenerated', dirName: 'visren-dev' }],
    collapsed: false,
    collapsible: false,
  }],

  reachAdminSidebar: [{
    type: 'category',
    label: 'Reach System Admin',
    link: { type: 'generated-index', slug: 'reach-admin' },
    items: [{ type: 'autogenerated', dirName: 'reach-admin' }],
    collapsed: false,
    collapsible: false,
  }],

  // Changelogs
  changelogsSidebar: [{
    type: 'category',
    label: 'Changelogs',
    link: { type: 'generated-index', slug: 'changelogs' },
    items: [{ type: 'autogenerated', dirName: 'changelogs' }],
    collapsed: false,
    collapsible: false,
  }],
};

export default sidebars;

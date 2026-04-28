import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SearchBar from '@theme/SearchBar';
import clsx from 'clsx';
import styles from './index.module.css';
import ThemedImage from '@theme/ThemedImage';

interface ManualLink {
  label: string;
  url: string;
}

interface ManualItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
  links: ManualLink[];
}

const ManualList: ManualItem[] = [
  {
    title: 'GeoVisionary',
    Svg: require('@site/static/assets/logos/virtalis.svg').default,
    description: 'Intuitive desktop application for geoscientists to interpret large and complex spatial datasets.',
    links: [
      { label: 'Release Notes', url: 'release-notes/geovisionary/2026.1' },
      { label: 'Changelog', url: 'changelogs/geovisionary' },
    ],
  },
  {
    title: 'Importers and Exporters',
    Svg: require('@site/static/assets/logos/virtalis.svg').default,
    description: 'Plugins to efficiently import and export various data formats across your visualisation workflow.',
    links: [
      { label: 'User Manual', url: 'importers-and-exporters' },
      { label: 'Changelog', url: 'changelogs/importers-and-exporters' },
    ],
  },
  {
    title: 'License Server',
    Svg: require('@site/static/assets/logos/virtalis.svg').default,
    description: 'License management solution to securely distribute and manage licenses across your organisation.',
    links: [
      { label: 'User Manual', url: 'license-server' },
      { label: 'Changelog', url: 'changelogs/license-server' },
    ],
  },
  {
    title: 'Virtalis Hub and Web Viewer',
    Svg: require('@site/static/assets/logos/virtalis.svg').default,
    description: 'Cloud-ready platform that places visualisation at the heart of your business ecosystem.',
    links: [
      { label: 'User Manual', url: 'virtalis-hub-and-web-viewer' },
      { label: 'System Admin Guide', url: 'virtalis-hub-system-admin' },
      { label: 'Release Notes', url: 'release-notes/virtalis-hub-and-web-viewer/2025.1' },
      { label: 'Changelog', url: 'changelogs/virtalis-hub-and-web-viewer' },
    ],
  },
  {
    title: 'Visionary Render',
    Svg: require('@site/static/assets/logos/virtalis.svg').default,
    description: 'Low-code desktop application to easily create immersive visualisations with your existing enterprise data.',
    links: [
      { label: 'User Manual', url: 'visionary-render' },
      { label: 'Programming Guide', url: 'visionary-render-programming' },
      { label: 'Release Notes', url: 'release-notes/visionary-render/2026.1' },
      { label: 'Changelog', url: 'changelogs/visionary-render' },
      { label: 'API Changelog', url: 'changelogs/visionary-render-api' },
    ],
  },
];

function FeatureCard({ title, Svg, description, links }: ManualItem) {
  const getIcon = (label: string) => {
    const l = label.toLowerCase();

    {/* User Manuals - Closed Book Icon */}
    if (l.includes('manual')) {
      return <path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" />;
    }
    {/* Technical Guides - Code Icon */}
    if (l.includes('guide')) {
      return <path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />;
    }
    {/* Default - Document Icon */}
    return <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,4V20H18V4H6M7,6H17V8H7V6M7,10H17V12H7V10M7,14H13V16H7V14Z" />
  };

  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className={clsx('card padding--lg', styles.staticCard)}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="padding-horiz--md">
          <h3 className="text--center margin-top--md">{title}</h3>
          <p className="text--center">{description}</p>
          
          {/* Add an icon and text for each link */}
          <ul className={styles.manualLinkList}>
            {links.map((link, idx) => (
              <li key={idx} className={styles.linkRow}>
                <Link to={link.url} className={styles.manualLinkItem}>
                  <svg viewBox="0 0 24 24" className={styles.docIcon} aria-hidden="true">
                    {getIcon(link.label)}
                  </svg>
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Add an empty row to pad the Virtalis Hub card */}
            {links.length === 4 && (
              <li className={styles.linkRow} style={{ visibility: 'hidden' }} aria-hidden="true">
                <span className={styles.manualLinkItem}>
                   &nbsp;
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      {/* Hero Banner */}
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <div className={styles.heroLogoContainer}>
            <ThemedImage
              alt="Virtalis Docs Logo"
              className={styles.heroLogo}
              sources={{
                light: useBaseUrl('/assets/logos/virtalis-docs.svg'),
                dark: useBaseUrl('/assets/logos/virtalis-docs-dark.svg'),
              }}
            />
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className={styles.searchSection}>
        <div className="container">
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchInner}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <main className="padding-vert--xl">
        <div className="container">
          <div className="row">
            {ManualList.map((props, idx) => (
              <FeatureCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

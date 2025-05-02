import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

function Header() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'Virtalis Docs Logo'})}
            className={styles.heroLogo}
            src={useBaseUrl('assets/logos/virtalis-docs.svg')}
            width="520"
            height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: 'homepage.hero.title',
                message:
                  'All your docs in one place',
                description:
                  'Home page hero title, can contain simple html tags',
              }),
            }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/visionary-render">
            <Translate>View Docs</Translate>
          </Link>
          <Link className="button button--info" to="https://docusaurus.new">
            <Translate>Request a Demo</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
      <main>
        <Header />
      </main>
    </Layout>
  );
}

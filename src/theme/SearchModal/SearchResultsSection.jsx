import * as React from "react";
import Link from "@docusaurus/Link";
import IconExternalLink from "@theme-original/Icon/ExternalLink";
import { getExternalURI } from "../../utils/getExternalURI";
import styles from "./index.module.css";
function generateSectionLink(headingLink, query) {
    const qParams = new URLSearchParams([["q", query]]);
    return `${getExternalURI("/search", headingLink)}?${qParams.toString()}`;
}
const SearchResultsSection = (props) => {
    const { children, heading, headingLink, sectionQuery = "" } = props;
    return (<section className={styles.searchResultsSection}>
      <header className={styles.searchResultsSectionHeader}>
        {headingLink ? (<Link to={generateSectionLink(headingLink, sectionQuery)} target="_blank">
            {heading}
            <IconExternalLink height={13} width={13}/>
          </Link>) : (heading)}
      </header>

      {children}
    </section>);
};
export default SearchResultsSection;

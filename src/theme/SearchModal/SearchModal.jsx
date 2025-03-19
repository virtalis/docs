import { useEffect, useState, useRef } from "react";
import * as React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import { fetchIndexes } from "../../utils/fetchIndexes";
import { SearchSourceFactory } from "../../utils/SearchSourceFactory";
import LoadingRing from "../LoadingRing/LoadingRing";
import { IconSearch } from "./icons";
import SearchResultList from "./SearchResultList";
import SearchResultsSection from "./SearchResultsSection";
import styles from "./index.module.css";

const useKeyPress = function (targetKey, ref) {
    const [keyPressed, setKeyPressed] = useState(false);
    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    useEffect(() => {
        ref.current?.addEventListener("keydown", downHandler);
        ref.current?.addEventListener("keyup", upHandler);
        return () => {
            ref.current?.removeEventListener("keydown", downHandler);
            ref.current?.removeEventListener("keyup", upHandler);
        };
    });
    return keyPressed;
};

const SearchModal = ({ onClose, }) => {
    const { siteConfig: { baseUrl, title }, } = useDocusaurusContext();
    const { indexHash, removeDefaultStopWordFilter, searchResultLimits, translations, externalSearchSources: externalSourceConfigs, } = usePluginData("docusaurus-plugin-search-local");
    const [searchQuery, setSearchQuery] = useState("");
    const searchModal = useRef(null);
    const searchInput = useRef(null);
    const [searchSource, setSearchSource] = useState();
    const [searchResults, setSearchResults] = useState([]);
    const [selected, setSelected] = useState(undefined);
    const downPress = useKeyPress("ArrowDown", searchInput);
    const upPress = useKeyPress("ArrowUp", searchInput);
    const enterPress = useKeyPress("Enter", searchInput);
    const [cursor, setCursor] = useState(0);
    const [hovered, setHovered] = useState(undefined);
    // External Search Source Data
    const [externalSearchSources, setExternalSearchSources] = useState([]);
    const [externalSearchResults, setExternalSearchResults] = useState([]);
    const allSearchResults = [
        ...searchResults,
        ...externalSearchResults.flatMap(({ results }) => results),
    ];
    let cursorOffset = searchResults.length;
    useEffect(() => {
        if (allSearchResults.length && downPress) {
            setCursor((prevState) => prevState < allSearchResults.length - 1 ? prevState + 1 : prevState);
        }
    }, [allSearchResults.length, downPress]);
    useEffect(() => {
        if (allSearchResults.length && upPress) {
            setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
        }
    }, [upPress]);
    useEffect(() => {
        if (allSearchResults.length && enterPress && cursor >= 0) {
            setSelected(allSearchResults[cursor]);
        }
    }, [cursor, enterPress]);
    useEffect(() => {
        if (allSearchResults.length && hovered) {
            setCursor(allSearchResults.indexOf(hovered));
        }
    }, [hovered]);
    useEffect(() => {
        if (searchSource) {
            if (searchQuery) {
                searchSource(searchQuery, (results) => {
                    setSearchResults(results);
                });
            }
            else {
                setSearchResults([]);
            }
        }
        // `updateSearchPath` should not be in the deps,
        // otherwise will cause call stack overflow.
    }, [searchQuery, searchSource]);
    useEffect(() => {
        async function doFetchIndexes() {
            const { wrappedIndexes } = await fetchIndexes(baseUrl, indexHash);
            setSearchSource(() => SearchSourceFactory({
                wrappedIndexes,
                removeDefaultStopWordFilter,
                resultsLimit: searchResultLimits,
                onResults: (query, results) => {
                    // TODO: needs to be abstracted to be able to handle any site analytics
                    if (typeof _paq !== "undefined" && _paq && _paq?.push) {
                        _paq.push([
                            "trackSiteSearch",
                            query, // Search keyword searched for
                            false, // Search category selected in your search engine. If you do not need this, set to false
                            results.length, // Number of results on the Search results page. Zero indicates a 'No Result Search Keyword'. Set to false if you don't know
                        ]);
                    }
                    if (typeof gtag !== undefined && typeof gtag === "function") {
                        gtag("event", "search", {
                            search_term: query,
                        });
                    }
                },
            }));
        }
        doFetchIndexes();
    }, [baseUrl]);
    useEffect(() => {
        async function fetchExternalSources() {
            const _externalSearchSources = [];
            externalSourceConfigs.forEach(async (externalSourceConfig) => {
                try {
                    const { wrappedIndexes } = await fetchIndexes(externalSourceConfig.uri);
                    _externalSearchSources.push({
                        ...externalSourceConfig,
                        search: SearchSourceFactory({
                            wrappedIndexes,
                            removeDefaultStopWordFilter,
                            resultsLimit: searchResultLimits,
                            onResults: (query, results) => {
                                // TODO: needs to be abstracted to be able to handle any site analytics
                                if (typeof _paq !== "undefined" && _paq && _paq?.push) {
                                    _paq.push([
                                        "trackSiteSearch",
                                        query, // Search keyword searched for
                                        false, // Search category selected in your search engine. If you do not need this, set to false
                                        results.length, // Number of results on the Search results page. Zero indicates a 'No Result Search Keyword'. Set to false if you don't know
                                    ]);
                                }
                                if (typeof gtag !== undefined && typeof gtag === "function") {
                                    gtag("event", "search", {
                                        search_term: query,
                                    });
                                }
                            },
                        }),
                    });
                }
                catch {
                    console.warn(`Unable to fetch search index for ${externalSourceConfig.heading} from: ${externalSourceConfig.uri}`);
                }
            });
            setExternalSearchSources(_externalSearchSources);
        }
        fetchExternalSources();
    }, [externalSourceConfigs, removeDefaultStopWordFilter, searchResultLimits]);
    useEffect(() => {
        if (searchQuery === "") {
            setExternalSearchResults([]);
            return;
        }
        const _externalSearchResults = [];
        externalSearchSources.forEach((externalSearchSource) => {
            externalSearchSource.search(searchQuery, (results) => {
                // Only add external search results if we found a result in its index.
                if (results.length > 0) {
                    _externalSearchResults.push({
                        results,
                        heading: externalSearchSource.heading,
                        uri: externalSearchSource.uri,
                    });
                }
            });
        });
        setExternalSearchResults(_externalSearchResults);
    }, [searchQuery, externalSearchSources]);
    return (<div className={styles.searchModal} onClick={(ev) => {
            if (ev.target === searchModal.current) {
                onClose();
            }
        }} ref={searchModal}>
      <div className={styles.searchModalContainer}>
        <div className={styles.searchInputContainer}>
          <label>
            <IconSearch />
          </label>
          <input type="search" name="q" className={styles.searchInput} aria-label="Search" placeholder="" onChange={(ev) => {
            setSearchQuery(ev.target.value);
        }} ref={searchInput} value={searchQuery} autoComplete="off" autoFocus/>
        </div>
        {!searchSource && searchQuery && (<div className={styles.loadingContainer}>
            <LoadingRing />
          </div>)}

        <div className={styles.searchResultsContainer}>
          {!searchQuery ? (<div className={styles.messageContainer}>
              <p>Enter a search query</p>
            </div>) : (<SearchResultsSection heading={title}>
              {searchResults.length === 0 ? (<em className={styles.noDocsFoundMessage}>
                  {translations.no_documents_were_found}
                </em>) : (<SearchResultList results={searchResults} currentSelection={selected} cursor={cursor} onSearchResultClick={onClose} setHovered={setHovered} setSelected={setSelected}/>)}
            </SearchResultsSection>)}

          {externalSearchResults.map((esr, idx) => {
            const t = (<SearchResultsSection key={idx} heading={esr.heading} headingLink={esr.uri} sectionQuery={searchQuery}>
                <SearchResultList results={esr.results} currentSelection={selected} cursor={cursor} cursorOffset={cursorOffset} searchSource={esr.uri} onSearchResultClick={onClose} setHovered={setHovered} setSelected={setSelected}/>
              </SearchResultsSection>);
            cursorOffset += esr.results.length;
            return t;
        })}

        </div>
      </div>
    </div>);
};

export default SearchModal;

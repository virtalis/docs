import { Component, useEffect, useState } from "react";
import { useLocation } from "@docusaurus/router";
import { usePluginData } from "@docusaurus/useGlobalData";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { SearchButton } from "./SearchButton";
import SearchModal from "../SearchModal";
import ErrorBoundary from "../ErrorBoundary";
import Mark from "mark.js";
const SEARCH_PARAM_HIGHLIGHT = "_highlight";
function isEditingContent(event) {
    const element = event.target;
    const tagName = element.tagName;
    return (element.isContentEditable ||
        tagName === "INPUT" ||
        tagName === "SELECT" ||
        tagName === "TEXTAREA");
}
export default class SearchBarWrapper extends Component {
    render() {
        return (<ErrorBoundary>
        <SearchBar />
      </ErrorBoundary>);
    }
}
export function SearchBar() {
    const { highlightSearchTermsOnTargetPage } = usePluginData("docusaurus-plugin-search-local");
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (highlightSearchTermsOnTargetPage) {
            if (!Mark) {
                return;
            }
            const keywords = ExecutionEnvironment.canUseDOM
                ? new URLSearchParams(location.search).getAll(SEARCH_PARAM_HIGHLIGHT)
                : [];
            if (keywords.length === 0) {
                return;
            }
            const root = document.querySelector("article");
            if (!root) {
                return;
            }
            const mark = new Mark(root);
            mark.unmark();
            mark.mark(keywords);
        }
    }, [highlightSearchTermsOnTargetPage, location.search]);
    useEffect(() => {
        function onKeyDown(event) {
            if ((event.keyCode === 27 && isOpen) ||
                // The `Cmd+K` shortcut both opens and closes the modal.
                (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
                // The `/` shortcut opens but doesn't close the modal because it's
                // a character.
                (!isEditingContent(event) && event.key === "/" && !isOpen)) {
                event.preventDefault();
                if (isOpen) {
                    setIsOpen(false);
                }
                else {
                    setIsOpen(true);
                }
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);
    return (<>
      <SearchButton onClick={() => {
            setIsOpen(true);
        }}/>

      {isOpen ? <SearchModal onClose={() => setIsOpen(false)}/> : ""}
    </>);
}

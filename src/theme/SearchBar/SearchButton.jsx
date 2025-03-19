import { useMemo } from "react";
import * as React from "react";
import "./SearchButton.css";

function SearchIcon() {
    return (<svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20">
      <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>);
}

const ACTION_KEY_DEFAULT = "Ctrl";
const ACTION_KEY_APPLE = "⌘";
function isAppleDevice() {
    return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

export const SearchButton = React.forwardRef(({ translations = {}, ...props }, ref) => {
    const { buttonText = "Search", buttonAriaLabel = "Search" } = translations;
    const key = useMemo(() => {
        if (typeof navigator !== "undefined") {
            return isAppleDevice() ? ACTION_KEY_APPLE : ACTION_KEY_DEFAULT;
        }
        return null;
    }, []);
    const [actionKeyAltText, actionKeyChild] = key === ACTION_KEY_DEFAULT
        ? // eslint-disable-next-line react/jsx-key -- false flag
            ['Control', key]
        : ['Meta', key];
    const shortcut = `${actionKeyAltText}+k`;
    return (<button type="button" className="DocSearch DocSearch-Button" aria-label={`${buttonAriaLabel} (${shortcut})`} aria-keyshortcuts={shortcut} {...props} ref={ref}>
      <span className="DocSearch-Button-Container">
        <SearchIcon />
        <span className="DocSearch-Button-Placeholder">{buttonText}</span>
      </span>

      <span className="DocSearch-Button-Keys">
        {key !== null && (<>
            <span className="DocSearch-Button-Key">{actionKeyChild}</span>
            <span className="DocSearch-Button-Key">K</span>
          </>)}
      </span>
    </button>);
});

SearchButton.displayName = "SearchButton";

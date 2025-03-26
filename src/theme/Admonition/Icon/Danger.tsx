import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Admonition/Icon/Danger';

export default function AdmonitionIconDanger(props: Props): ReactNode {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M16 14.6762C19.8328 9.80126 16.2744 3.14758 14.3571 1.5C14.3571 6.50316 10.6854 9.30905 8.33279 11.3825C5.9835 13.4575 4.5 16.7187 4.5 19.6175C4.5 25.076 9.64871 29.5 16 29.5C22.3513 29.5 27.5 25.076 27.5 19.6175C27.5 17.0945 25.476 13.1288 23.6672 11.3825C20.2435 16.3238 18.3164 16.3238 16 14.6762Z"/>
    </svg>
  );
}

import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Admonition/Icon/Danger';

export default function AdmonitionIconDanger(props: Props): ReactNode {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M16 15.1468C19.8328 10.0977 16.2744 3.20642 14.3571 1.5C14.3571 6.68184 10.6854 9.58795 8.33279 11.7355C5.9835 13.8845 4.5 17.2623 4.5 20.2645C4.5 25.918 9.64871 30.5 16 30.5C22.3513 30.5 27.5 25.918 27.5 20.2645C27.5 17.6515 25.476 13.5442 23.6672 11.7355C20.2435 16.8532 18.3164 16.8532 16 15.1468Z" />
    </svg>
  );
}

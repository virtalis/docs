import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Admonition/Icon/Note';

export default function AdmonitionIconNote(props: Props): ReactNode {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M2.5 16C2.5 17.7728 2.84919 19.5283 3.52763 21.1662C4.20606 22.8041 5.20047 24.2924 6.45406 25.5459C7.70765 26.7995 9.19588 27.7939 10.8338 28.4724C12.4717 29.1508 14.2272 29.5 16 29.5C17.7728 29.5 19.5283 29.1508 21.1662 28.4724C22.8041 27.7939 24.2924 26.7995 25.5459 25.5459C26.7995 24.2924 27.7939 22.8041 28.4724 21.1662C29.1508 19.5283 29.5 17.7728 29.5 16C29.5 12.4196 28.0777 8.9858 25.5459 6.45406C23.0142 3.92232 19.5804 2.5 16 2.5C12.4196 2.5 8.9858 3.92232 6.45406 6.45406C3.92232 8.9858 2.5 12.4196 2.5 16Z"/>
      <path stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M14.6034 14.6035H15.9999V22.0517H17.3965"/>
      <circle fill="currentColor" cx="15.5344" cy="9.48274" r="1.86207"/>
    </svg>
  );
}

import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Admonition/Icon/Warning';

export default function AdmonitionIconCaution(props: Props): ReactNode {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M16 12V18"/>
      <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M13.6266 3.93852L1.87195 25.0265C1.62963 25.4775 1.5014 25.9887 1.50001 26.5093C1.49862 27.03 1.62413 27.542 1.86404 27.9944C2.10395 28.4468 2.44992 28.8238 2.86751 29.088C3.28511 29.3521 3.75979 29.4942 4.24434 29.5H27.7565C28.2408 29.494 28.7153 29.3519 29.1327 29.0878C29.5501 28.8238 29.8959 28.447 30.1358 27.9948C30.3756 27.5427 30.5012 27.0309 30.5 26.5105C30.4988 25.99 30.3708 25.479 30.1289 25.0281L18.3743 3.93696C18.1269 3.49835 17.7786 3.13567 17.3627 2.88396C16.9469 2.63224 16.4777 2.5 16.0004 2.5C15.5231 2.5 15.0539 2.63224 14.6381 2.88396C14.2223 3.13567 13.8739 3.49835 13.6266 3.93696V3.93852Z"/>
      <circle fill="currentColor" cx="16" cy="23" r="2"/>
    </svg>
  );
}

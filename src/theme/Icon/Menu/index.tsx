import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/Menu';

export default function IconMenu({
  width = 35,
  height = 30,
  className,
  ...restProps
}: Props): ReactNode {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 35 30"
      aria-hidden="true"
      {...restProps}>
      <path
        stroke="white"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M4 7h22M4 15h22M4 23h22"
      />
    </svg>
  );
}

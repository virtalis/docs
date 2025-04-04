import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import LinkItem from '@theme/Footer/LinkItem';
import type {Props} from '@theme/Footer/Links/Simple';

function SimpleLinkItem({item}: {item: Props['links'][number]}) {
  return item.html ? (
    <span
      className={clsx('footer__link-item', item.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <LinkItem item={item} />
  );
}

export default function FooterLinksSimple({links}: Props): ReactNode {
  return (
    <div className="footer__links text--center">
      <div className="footer__links">
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <SimpleLinkItem item={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

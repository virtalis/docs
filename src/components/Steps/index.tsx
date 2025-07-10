import React from 'react';
import styles from './styles.module.css';

interface StepsProps {
  children: React.ReactNode;
}

export default function Steps({ children }: StepsProps) {
  const childrenArray = React.Children.toArray(children);

  // Find the first <ol> element (this is how Markdown "1. 2. etc." is compiled in MDX).
  const olElement = childrenArray.find(
    (child) =>
      React.isValidElement(child) &&
      (child.type as any)?.toString().includes('ol')
  );

  if (!React.isValidElement(olElement)) {
    console.warn('Could not find an <ol> element inside <Steps>');
    return null;
  }

  const liElements = React.Children.toArray(olElement.props.children).filter(
    (child) =>
      React.isValidElement(child) &&
      (child.type as any)?.toString().includes('li')
  );

  // Clone the original <ol>, apply the class, and clone each <li> to wrap content.
  const olClone = React.cloneElement(olElement, {
    className: `${styles.steps} ${olElement.props.className || ''}`,
    children: liElements.map((li, index) => {
      return React.cloneElement(li, {
        key: index,
        className: styles.stepItem,
        children: <div className={styles.stepContent}>{li.props.children}</div>,
      });
    }),
  });

  return olClone;
}

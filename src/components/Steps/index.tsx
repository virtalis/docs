import React from 'react';
import styles from './styles.module.css';

interface StepsProps {
  children: React.ReactNode;
}

export default function Steps({ children }: StepsProps) {
  const childrenArray = React.Children.toArray(children);

  // Find the first <ol> element (this is how Markdown "1. 2. etc." is compiled in MDX)
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
  return (
    <ol className={styles.steps}>
      {liElements.map((li, index) => (
        <li key={index}>
          <div className={styles.stepContent}>{li}</div>
        </li>
      ))}
    </ol>
  );
}

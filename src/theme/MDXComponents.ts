import type { MDXComponentsObject } from '@theme/MDXComponents';
import MDXComponents from '@theme-original/MDXComponents';
import Steps from '@site/src/components/Steps';

const components: MDXComponentsObject = {
  ...MDXComponents,
  Steps,
};

export default components;

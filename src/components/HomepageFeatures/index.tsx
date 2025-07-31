import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'RESTful API',
    Svg: require('@site/static/img/plug-svgrepo-com.svg').default,
    description: (
      <>
        Well-designed RESTful API endpoints with comprehensive documentation and examples.
      </>
    ),
  },
  {
    title: 'OpenAPI Spec',
    Svg: require('@site/static/img/books-svgrepo-com.svg').default,
    description: (
      <>
        Complete OpenAPI 3.0 specification with interactive API explorer and code generation.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: require('@site/static/img/coding-data-development-svgrepo-com.svg').default,
    description: (
      <>
        Built with developers in mind. Clear documentation, examples, and SDKs for multiple languages.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

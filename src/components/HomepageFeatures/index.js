import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/javascript.svg').default,
    description: (
      <>
        The Mixcraft JavaScript API makes writing control surface scripts easy and flexible.
        An integrated script editor with Logging and a MIDI monitor allow you to work right in Mixcraft if you want to.
      </>
    ),
  },
  {
    title: 'MIDI and SysEx data for quick and universal use',
    Svg: require('@site/static/img/MIDI.svg').default,
    description: (
      <>
        The JavaScript API allows for control surfaces that send and recieve MIDI and SysEx data.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

import React from 'react';
import Slide, { useSlide } from '../Slides/Slide';
import cx from 'classnames';
import styles from './OpeningCrawl.module.scss';

interface IOpeningCrawlProps {
  intro?: any;
  introCaption?: any;
  logo?: any;
  logoCaption?: any;
  paragraphs: string[];
}

function OpeningCrawl(props: IOpeningCrawlProps) {
  const { intro, introCaption, logo, logoCaption, paragraphs } = props;
  const [present, SlideEx] = useSlide();
  return (
    <>
      <Slide className={styles.slide} backgroundColor="#000" transition="fade">
        <div className={styles.intro}>
          <div>{intro}</div>
        </div>
        {introCaption && (
          <div className={styles.caption}>
            <i>{introCaption}</i>
          </div>
        )}
      </Slide>
      <SlideEx className={styles.slide} backgroundColor="#000" transition="fade">
        <div className={cx(styles.starwars, present && styles.present)}>
          <audio>
            <source src={`${process.env.PUBLIC_URL}/media/maintheme.ogg`} type="audio/ogg" />
          </audio>
          <h1 className={styles.logo}>{logo}</h1>
          <div className={styles.caption}>
            <i>{logoCaption}</i>
          </div>
          <div className={styles.titles}>
            <div>
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </SlideEx>
    </>
  );
}

export default OpeningCrawl;

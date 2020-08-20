import React, { useMemo, useState, useRef, useEffect, useCallback, isValidElement } from 'react';
import { useRecoilValue } from 'recoil';
import { useHandle } from '../../../hooks';
import { indicesState } from '../SlidesState';
import bgBase from '../assets/background-base.png';
import styles from './Slide.module.scss';

interface ISlideProps {
  backgroundColor?: string;
  backgroundImage?: string;
  transition?: string;
  children?: any;
  onEnter?: Function;
  onLeave?: Function;
  className?: string;
  style?: any;
  align?: string;
  notes?: any;
}

function Slide({
  backgroundColor,
  backgroundImage,
  transition,
  children,
  onEnter,
  onLeave,
  className,
  style,
  align,
  notes,
}: ISlideProps) {
  const indices = useRecoilValue(indicesState);
  const sectionProps: any = useMemo(() => {
    return Object.entries({
      'data-background-color': backgroundColor,
      'data-background-image': typeof backgroundImage === 'undefined' ? bgBase : backgroundImage,
      'data-transition': transition,

      style: typeof style === 'object' && style !== null && style ? style : undefined,
    }).reduce((accum, [k, v]) => (typeof v !== 'undefined' ? { ...accum, [k]: v } : accum), {});
  }, [backgroundColor, backgroundImage, transition, style]);

  const ref = useRef<HTMLDivElement>(null);

  const [present, setPresent] = useState(false);

  useEffect(() => {
    const isPresent = !!ref.current?.classList.contains('present');
    if (present !== isPresent) {
      setPresent(isPresent);
    }
  }, [indices, present]);

  const handleEnter = useHandle(onEnter);
  const handleLeave = useHandle(onLeave);

  useEffect(() => (present ? handleEnter() : handleLeave()), [present, handleEnter, handleLeave]);

  const classNames = useMemo(
    () => [styles.root, className, ...(align || '').split(/\s+/).map((e) => styles[e])].filter(Boolean).join(' '),
    [className, align],
  );

  return (
    <section ref={ref} className={classNames} data-background-size="contain" {...sectionProps}>
      {!isValidElement(children) && typeof children === 'function' ? children({ present }) : children}
      {notes && <aside className="notes">{notes}</aside>}
    </section>
  );
}

export default Slide;

export function useSlide() {
  const [present, setPresent] = useState(false);

  const onEnter = useRef<any>();
  onEnter.current = () => setPresent(true);
  const onLeave = useRef<any>();
  onLeave.current = () => setPresent(false);

  const SlideEx = useCallback(
    ({ children, ...rest }: any) => (
      <Slide onEnter={onEnter.current} onLeave={onLeave.current} {...rest}>
        {children}
      </Slide>
    ),
    [],
  );

  return [present, SlideEx] as [boolean, any];
}

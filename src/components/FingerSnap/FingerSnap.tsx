import React, { useRef, useCallback, useState, useEffect } from 'react';
import useHtml2canvas from './useHtml2canvas';
import styles from './FingerSnap.module.scss';

interface IFingerSnapProps {
  /**
   * Prop Description
   */
  message?: string;
  [key: string]: any;
}

/**
 * Component Description
 */
function FingerSnap(props: IFingerSnapProps) {
  const html2canvas = useHtml2canvas();
  const { children } = props;
  const ref = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const [snapshot, setSnapshot] = useState();
  const handleClick = useCallback(() => {
    console.log('>>>', ref.current, html2canvas);
    if (ref.current && typeof html2canvas === 'function') {
      (async () => {
        const canvas = await html2canvas(ref.current, {
          backgroundColor: null,
          scale: 1,
        });
        // wrap.current.classList.remove('withoutTransform');
        // inner.innerHTML = '';
        // tmp.removeChild(inner);
        // document.body.removeChild(tmp);
        // console.log('%c-=-=-=-=-=-=-', 'background:yellow')
        setSnapshot(canvas);
      })();
    }
  }, [html2canvas]);
  useEffect(() => {
    if (ref2.current && snapshot) {
      ref2.current.appendChild(snapshot);
    }
  }, [snapshot]);
  console.log(snapshot);
  return (
    <span className={styles.root}>
      <div ref={ref} onClick={handleClick}>
        {children}
      </div>
      <span ref={ref2}></span>
      {/* {snapshot} */}
    </span>
  );
}

export default FingerSnap;

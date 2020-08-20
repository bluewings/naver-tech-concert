import React, { useRef, useEffect, useState } from 'react';
import { WarpText as BaseWarpText } from 'react-warp-text';
import { useRecoilValue } from 'recoil';
import { indicesState } from '../Slides/SlidesState';

function transform([x, y, { innerHeight, scale, offset }]: any) {
  const wave = scale(0.2);
  let z = y / innerHeight - 0.1;
  z = z < 0 ? 0 : z;
  z = 1;
  return [x, y + wave * Math.sin((x + scale(offset) / 1000) / scale(0.5)) * z];
}

function paddingTop({ scale }: any) {
  return scale(0.2) + 2;
}

function WarpText(props: any) {
  const wrapTextProps = {
    transform,
    padding: 2,
    paddingTop,
    paddingBottom: paddingTop,
    color: '#000',
    animate: false,
    message: '아빠는 개발자',
    ...props,
  };

  const ref = useRef<HTMLDivElement>(null);

  const [key, setKey] = useState<string>('');

  const indices = useRecoilValue(indicesState);

  useEffect(() => {
    if (ref.current?.getBoundingClientRect().height === 0) {
      setKey(Math.random().toString(36).substr(-6));
    }
  }, [indices]);

  return (
    <div ref={ref} style={{ marginBottom: '1.75rem' }}>
      <BaseWarpText key={key} {...wrapTextProps} />
    </div>
  );
}

export default WarpText;

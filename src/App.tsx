import React from 'react';
import { RecoilRoot } from 'recoil';
import Slides from './components/Slides';

function App() {
  return (
    <RecoilRoot>
      <Slides />
    </RecoilRoot>
  );
}

export default App;

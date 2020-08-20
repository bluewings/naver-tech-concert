import { atom } from 'recoil';

export const indicesState = atom<any>({
  key: 'indicesState',
  default: {
    indexh: 0,
    indexv: 0,
  },
});

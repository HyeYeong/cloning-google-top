import { keywordState } from '@/src/recoil/searchKeyword/atoms';
import { selector } from 'recoil';

export const changeKeywordState = selector({
  key: 'keywordState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const keyword = get(keywordState);

    return keyword;
  },
});

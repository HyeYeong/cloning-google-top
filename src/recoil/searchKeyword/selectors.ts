import { keywordState } from '@/src/recoil/searchKeyword/atoms';
import { selector } from 'recoil';

export const changeKeywordState = selector({
  key: 'keywordsArr', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const keywords = get(keywordState);
    let array: string[] = [];
    
    return array;
  },
});

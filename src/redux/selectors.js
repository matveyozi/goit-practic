import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words.items;
export const selectFilter = state => state.filter;
export const selectCheckedWords = state => state.words.items.filter(word => {
  return word.isChecked
});
export const selectFilteredWords = createSelector(
  [selectWords, selectFilter],
  (words, filter) => {
    return words.filter(
      word =>
        word.ukrWord.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.enWord.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

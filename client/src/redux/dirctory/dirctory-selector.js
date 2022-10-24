import { createSelector } from "reselect";

const selectDirctory = (state) => state.dirctory;

export const selectSections = createSelector(
  [selectDirctory],
  (dirctory) => dirctory.sections
);

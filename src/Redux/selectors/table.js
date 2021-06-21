import { createSelector } from 'reselect'

const getState = (state) => state.table

export const getTitles = createSelector(getState, (table) => table.titles)
export const getIsLoaded = createSelector(getState, (table) => table.isLoaded)

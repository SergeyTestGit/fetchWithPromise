import { SET_TITLES, DELETE_TITLE } from '../actions/table'

const initialState = {
  titles: [],
  isLoaded: false,
}

const createReducer =
  (initialState, handlers) =>
  (state = initialState, action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state

const handlers = {
  [SET_TITLES]: (prevState, { payload }) => {
    return {
      ...prevState,
      titles: payload,
      isLoaded: true,
    }
  },
  [DELETE_TITLE]: (prevState, { payload }) => {
    const titlesLocal = prevState.titles
    titlesLocal.splice(payload, 1)
    return {
      ...prevState,
      titles: titlesLocal,
    }
  },
}

export default createReducer(initialState, handlers)

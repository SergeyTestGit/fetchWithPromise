export const SET_TITLES = 'TABLE/SET_TITLES'
export const setTitles = (data) => {
  return {
    payload: data,
    type: SET_TITLES,
  }
}

export const DELETE_TITLE = 'TABLE/DELETE_TITLE'
export const deleteTitle = (index) => {
  return {
    payload: index,
    type: DELETE_TITLE,
  }
}

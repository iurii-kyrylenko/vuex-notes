export const addNote = ({ commit }) => {
  commit('ADD_NOTE')
}

export const editNote = ({ commit }, e) => {
  commit('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ commit }) => {
  commit('DELETE_NOTE')
}

export const updateActiveNote = ({ commit }, note) => {
  commit('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ commit }) => {
  commit('TOGGLE_FAVORITE')
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes = state.notes.filter(note => note != state.activeNote);
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

const actions = {
  addNote:          ({commit})         => commit('ADD_NOTE'),
  editNote:         ({ commit }, text) => commit('EDIT_NOTE', text),
  deleteNote:       ({ commit })       => commit('DELETE_NOTE'),
  updateActiveNote: ({ commit }, note) => commit('SET_ACTIVE_NOTE', note),
  toggleFavorite:   ({ commit })       => commit('TOGGLE_FAVORITE')
}

const getters = {
  notes:      state => state.notes,
  activeNote: state => state.activeNote
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

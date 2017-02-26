import Vue from 'vue'
import Vuex from 'vuex'
import { addNote } from './actions'

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
    state.notes = state.notes.filter(note => n != state.activeNote);
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: { addNote },
  // actions: {
  //   addNote(context) {
  //     context.commit('ADD_NOTE')
  //   }
  // },
  getters: {
    activeNote: state => state.activeNote
  },
})

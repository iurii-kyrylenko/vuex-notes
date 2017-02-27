<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <div v-if="activeNote">
      <i @click="toggleFavorite"
         class="glyphicon glyphicon-star"
         :class="{starred: activeNote.favorite}"></i>
      <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'toolbar',
  methods: {
    ...mapActions(['addNote','deleteNote', 'toggleFavorite'])
  },
  computed: {
    ...mapGetters(['activeNote'])
  }
}
</script>

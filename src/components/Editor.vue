<template>
  <div id="note-editor">
    <textarea
      :value="activeNote.text"
      @input="editNote($event.target.value)"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'editor',
  methods: {
    ...mapActions(['editNote'])
  },
  computed: {
    ...mapGetters(['activeNote'])
  }
}
</script>

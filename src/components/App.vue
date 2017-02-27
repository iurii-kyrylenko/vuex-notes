<template>
  <div id="app">
    <!-- <div class="well">{{ state }}</div> -->
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
  import Toolbar from './Toolbar.vue'
  import NotesList from './NotesList.vue'
  import Editor from './Editor.vue'

  export default {
    name: 'app',
    // data() { return { state: this.$store.state } },
    components: {
      Toolbar,
      NotesList,
      Editor
    }
  }
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="../assets/styles.css"></style>

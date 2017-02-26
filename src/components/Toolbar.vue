<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'toolbar',
  methods: {
    ...mapActions(['addNote'])
    // addNote() {
    //   this.$store.dispatch('addNote')
    // }
  }
}
</script>

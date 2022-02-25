<template>
  <div class="home">
    <header-menu></header-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderMenu from './components/header-menu.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HeaderMenu
  },
})
</script>

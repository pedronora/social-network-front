<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <nav-bar></nav-bar>
  <main>
    <div class="container p-3">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped></style>

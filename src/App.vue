<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import AppTopBar from './components/shared/AppTopBar.vue'

export default {
  nome: 'App',
  components: {
    AppTopBar,
  }
};
</script>
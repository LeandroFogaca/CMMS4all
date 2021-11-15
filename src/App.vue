<template>
  <v-app>
    <div id="TheHeader">
      <TheHeader></TheHeader>
    </div>
    <v-main>
     
<!-- main page -->
<!-- <router-view/> -->
    </v-main>
    <div id="TheFooter">
      <TheFooter></TheFooter>
    </div>
  </v-app>
</template>

<script>

import TheFooter from './components/TheFooter.vue'
import TheHeader from "./components/TheHeader.vue";




export default {
  components: { 
    TheFooter,
    TheHeader,
  },
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
  })
}
</script>

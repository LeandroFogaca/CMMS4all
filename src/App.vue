<template>
  <v-app>

      <TheHeader></TheHeader>
    
      <TheSideBar/>

    <v-main>
     
<!-- main page -->

    
    
    
    
    
    </v-main>
    <div id="TheFooter">
      <TheFooter></TheFooter>
    </div>
  </v-app>
</template>

<script>

import TheFooter from './components/TheFooter.vue'
import TheHeader from "./components/TheHeader.vue"
import TheSideBar from "./components/TheSideBar";




export default {
  components: { 
    TheFooter,
    TheHeader,
    TheSideBar
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

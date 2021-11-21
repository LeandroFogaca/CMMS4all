<template>
  <v-app>
    <TheHeader></TheHeader>
    <TheSideBar
      v-on:currentView="changeView"
     ></TheSideBar>
     
     <v-main>
          <!-- main page -->

          <!-- <v-btn block v-on:click="newWindows">
          Block Button
          </v-btn> -->
        
       <router-view class="view"></router-view>
    
    
     </v-main>
    
    <TheFooter></TheFooter>
  </v-app>
</template>

<script>

import TheFooter from './components/TheFooter.vue'
import TheHeader from "./components/TheHeader.vue"
import TheSideBar from "./components/TheSideBar"

const { ipcRenderer} = require('electron')

export default {
  components: { 
    TheFooter,
    TheHeader,
    TheSideBar,
  },
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
  }),
  methods:{
    changeView: function (e){
      console.log(e);
    },
    newWindows: function () {
      ipcRenderer.send('tobackend', './index.html')
    }
  },

}
</script>

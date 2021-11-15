<template>
<div>
<v-navigation-drawer
      v-model="drawer"
      app
    >
 <TheSideBar></TheSideBar>
</v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</div>
</template>

<script>

import TheSideBar from "./TheSideBar";


  export default {
    data: () => ({ 
      drawer: null 
      }),
    components: {  
    TheSideBar,
  },
}
</script>
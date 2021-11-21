<template>
      <v-navigation-drawer
        permanent
        expand-on-hover
        app
      >
        <!-- <v-list>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider> -->

        <v-list
          nav
          dense
        >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          v-on:click="$emit('currentView', item.view); $router.push(item.view)"
          >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title>
                  {{ item.title }}
                <!-- <router-link :to="item.view">
                  </router-link> -->
                </v-list-item-title>
          </v-list-item-content>
        </v-list-item> 
        </v-list>
      </v-navigation-drawer>
    
</template>

<script>
  export default {
      data: () => ({
    
    items: [
      // { title: 'Dashboard', icon: 'mdi-view-dashboard', view: '/' },
      { title: 'Tansações', icon: 'mdi-magnify', view: '/viewAction' },
      // { title: 'Calendário', icon: 'mdi-calendar', view: './viewCalendar' },
      { title: 'Equipamentos', icon: 'mdi-calendar', view: '/viewMachine' },
      { title: 'Equipe', icon: 'mdi-calendar', view: '/viewTeam' },
      { title: 'Planos mestres', icon: 'mdi-calendar', view: '/viewMplan' },
      // { title: 'Ferramentas', icon: 'mdi-tools', view: './viewTools' },
      { title: 'Configurações', icon: 'mdi-cog', view: '/viewConfig' },
      { title: 'About', icon: 'mdi-help-box', view: '/viewAbout' },
    ],
  })
}
</script>
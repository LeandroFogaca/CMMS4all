<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Nome do usuário
          </v-list-item-title>
          <v-list-item-subtitle>
            Nivel de acesso do usuário
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title>
                <router-link :to="item.view">
                  {{ item.title }}
                </router-link>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Pagina Principal</v-toolbar-title>
    </v-app-bar>

    <v-main>
<!-- main page -->
<router-view/>
    </v-main>
    <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: null,
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', view: '/' },
      { title: 'Tansações', icon: 'mdi-magnify', view: '/viewAction' },
      { title: 'Calendário', icon: 'mdi-calendar', view: './viewCalendar' },
      { title: 'Ferramentas', icon: 'mdi-tools', view: './viewTools' },
      { title: 'Configurações', icon: 'mdi-cog', view: './viewConfig' },
      { title: 'About', icon: 'mdi-help-box', view: './viewAbout' },
    ],
  })
}
</script>

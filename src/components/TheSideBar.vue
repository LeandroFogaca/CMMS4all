<template>
<div>
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
      </div>
</template>

<script>

export default {
  data: () => ({
    
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', view: '/' },
      { title: 'Tansações', icon: 'mdi-magnify', view: '/viewAction' },
      { title: 'Calendário', icon: 'mdi-calendar', view: './viewCalendar' },
      { title: 'Equipamentos', icon: 'mdi-calendar', view: './viewMachine' },
      { title: 'Equipe', icon: 'mdi-calendar', view: './viewTeam' },
      { title: 'Planos mestres', icon: 'mdi-calendar', view: './viewMplan' },
      { title: 'Ferramentas', icon: 'mdi-tools', view: './viewTools' },
      { title: 'Configurações', icon: 'mdi-cog', view: './viewConfig' },
      { title: 'About', icon: 'mdi-help-box', view: './viewAbout' },
    ],
  })
}


</script>


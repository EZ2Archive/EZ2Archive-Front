<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        dense
        disable-resize-watcher
        permanent
    >
        <v-navigation-drawer
        v-model="drawer"
        absolute
        color="grey lighten-3"
        mini-variant
        disable-resize-watcher
        permanent
        >
        <v-avatar
            class="d-block text-center mx-auto mt-4"
            color="grey darken-1"
            size="36"
        ></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar
            v-for="n in 6"
            :key="n"
            class="d-block text-center mx-auto mb-9"
            color="grey lighten-1"
            size="28"
        ></v-avatar>
        </v-navigation-drawer>
        
        <v-list-item
            class="pl-15"
        >

            <v-list-item-content>
            
            <h3>
                EZ2DB
            </h3>
            <v-list-item-subtitle>
                서열표
            </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list
        dense
        class="pl-14"
        shaped
        >

        <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            link
            :to="item.to"
        >
    <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data: () => ({ 
    menuItems:[
      { title: '성과표', icon: 'mdi-view-dashboard', to: '/' },
      { title: '서열표', icon: 'mdi-gesture-tap-button', to: '/rank' },
      { title: '티어표', icon: 'mdi-emoticon-excited-outline', to: '/tier' },
      { title: '몰?루', icon: 'mdi-emoticon-excited-outline', to: '/admin' },
      { title: '몰?루', icon: 'mdi-emoticon-excited-outline', to: '/log' },

    ] 
  }),
  computed:{
    drawer:{
        get(){
            return this.$store.getters['getDrawer']
        },
        set(value){
            return this.$store.commit('setDrawer', value)
        }

    }
  },
  methods:{
    ...mapMutations([
        'setDrawer'
    ]),
    logout(){
        this.$store.commit('logout')
        this.$router.push('/login')
    },
    }
}
</script>

<style lang="scss">

</style>

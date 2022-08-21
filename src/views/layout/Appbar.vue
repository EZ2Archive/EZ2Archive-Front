<template>
    <v-app-bar
      app
      flat
      dense
      color="#242F9B"
    >
      <router-link to="/">
      <v-app-bar-title style="color:white" >
      <h3>EZ2 ARCHIVE</h3>
      </v-app-bar-title>
      </router-link>
      
        

      <v-spacer></v-spacer>

      <v-btn v-for="(item, idx) in menuItems" :key="idx" color="transparent" x-large class="white--text text-h5 font-weight-black" elevation="0" :to="item.to">{{item.title}}</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        to="/login"
      >
        Login
      </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    data: () => ({ 
      menuItems:[
        { title: '성과표', icon: 'mdi-view-dashboard', to: '/select' },
        { title: '서열표', icon: 'mdi-gesture-tap-button', to: '/rank/0/0' },
        { title: '티어표', icon: 'mdi-emoticon-excited-outline', to: '/tier' },
      ] 
    }),
    computed:{
    
    },
    methods:{
      clickTitle(){
        console.log('click')
        this.$router.go('/')
      }
    }

}
</script>

<style lang="scss">

</style>

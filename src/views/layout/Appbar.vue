<template>
    <v-app-bar
      app
      flat
      dense
      color="#242F9B"
      src="/resource/appbar_bg.svg"
      height="60"
    >
      <router-link to="/">
      <v-img src="/resource/ez2archive_logo.svg" width="250" height="25" contain></v-img>
      </router-link>
      
      <div class="ml-10">
        <v-btn v-for="(item, idx) in menuItems" :key="idx" color="transparent" x-large class="white--text text-h6 font-weight-black" elevation="0" :to="item.to">{{item.title}}</v-btn>
      </div>
      
      <v-spacer></v-spacer>
      <v-btn
        to="/login"
        color="transparent"
        class="white--text"
        elevation="0"
      >
      <v-icon class="mr-1">mdi-key-variant</v-icon>
      로그인
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

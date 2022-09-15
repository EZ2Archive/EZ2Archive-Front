<template>

    <v-app-bar
      app
      flat
      dense
      color="#242F9B"
      src="/resource/appbar_bg.svg"
      height="60"
    >
      <div class="fill-height d-flex align-center ma-auto app-bar-content">
      
        <router-link to="/">
        <v-img src="/resource/ez2archive_logo.svg"  width="200" contain></v-img>
        </router-link>
        
        <div class="ml-10">
          <v-btn v-for="(item, idx) in menuItems" :key="idx" color="transparent" x-large class="white--text text-h7 font-weight-black" elevation="0" :to="item.to">{{item.title}}</v-btn>
        </div>
        
        <v-spacer></v-spacer>

        <v-btn
          v-if="isAuth"
          color="transparent"
          class="white--text font-weight-black text-center"
          elevation="0"
          @click.stop.prevent="clickLogout">
          {{currentUser}}
        </v-btn>
        <div class="text-center">
          
          <v-dialog
            v-if="!isAuth"
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
            <v-btn           
              color="transparent"
              class="white--text font-weight-black"
              elevation="0"
              v-bind="attrs"
              v-on="on"
            >
            <v-icon class="mr-1 ">mdi-key-variant</v-icon>
            로그인
            </v-btn>
            </template>
            <v-toolbar
                dark
                color="#250033"
                dense       
              >
              
              <v-spacer></v-spacer>
              <v-btn
                icon
                dark
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <Login @login="dialog=false" /> 
          </v-dialog>
        </div>
      </div>
        
    </v-app-bar>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import Login from '../Login.vue'
export default {
    data: () => ({ 
      menuItems:[
        { title: '성과표', icon: 'mdi-view-dashboard', to: '/achievement/0/0' },
        { title: '서열표', icon: 'mdi-gesture-tap-button', to: '/rank/0/0' },
        { title: '티어표', icon: 'mdi-emoticon-excited-outline', to: '/tier' },
      ],
      dialog: false 
    }),
    components:{
      Login
    }, 
    computed:{
      ...mapGetters([
        'isAuth'
      ]),
      ...mapState([
        'currentUser'
      ])
    },
    methods:{
      ...mapMutations([
        'logout'
      ]),
      clickTitle(){
        this.$router.push('/')
      },
      clickLogout(){
        if(this.$route.path !== '/'){
          this.$router.push('/')
        }
        
        this.logout();
        this.dialog = false;  
      }
    }

}
</script>

<style scoped>
.app-bar-content{
  margin: 0 auto;
  width: 1100px;
  min-width: 1100px;
}


</style>

<template>
    <v-menu
        top
        close-on-content-click
        offset-y
        tile
        content-class="theme-changer-wrapper"  
    >
      <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            class="floating home-btn-text"
            width="175"
            absolute 
            depressed>
            테마선택
            </v-btn>
      </template>
    <v-card class="theme-changer ma-4" :ripple="false" width="175">
      <v-list-item-group
        :value="currentTheme"
        active-class="theme-select-btn font-weight-bold"
        mandatory>
        <v-list-item
          v-for="(item, index) in themes"
          :key="index"
          @click="setTheme(item)"
          class="text-center"
        >
          <v-list-item-title :id="item.name">{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-card>
  </v-menu>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data(){
        return{
          selectTheme: null,
          selectItem: null
        }
    },
    methods:{
        setTheme(select){
            this.setCurrentTheme(select.index)
            Object.keys(select.color).forEach((element, idx) => {
                this.$vuetify.theme.themes.light[element] = select.color[element];
            });
        },
        ...mapMutations([
          'setCurrentTheme'
        ])
    }, 
    computed:{
      ...mapState([
        'currentTheme',
        'themes'
      ])
    }

}
</script>

<style scoped>
.floating {
  position: fixed; 
  right: 26px; 
  bottom: 20px;
  z-index: 10;
  /* animation: rotate_image 6s linear infinite; */
  transform-origin: 50% 50%;
  
}


/* @keyframes rotate_image{
    100% {
        transform: rotate(360deg);
    }
} */

.v-list-item--link:before {
  background: none;
}

.v-btn{
  border-radius: 13px !important;
}
.home-btn-text{
  letter-spacing: 0px;
}

.theme-select-btn{
  color: var(--v-primary-base);
}

.theme-changer{
  z-index: 5;
  border-style: solid;
  border-width: 3px;
  border-color: var(--v-secondary-base); 
  margin-bottom: 20px;
  z-index: 10;
  box-shadow: 0px 10px 15px rgba(113, 75, 255, 0.15) !important;
  border-radius: 13px !important;
}

.theme-changer-wrapper{
  background-color: transparent;
}
</style>
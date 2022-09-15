<template > 
<v-container id="home">
    <v-row class="fill-height justify-center" no-gutters>
    <v-col
      cols="12"
      class="mt-5"      
    >
      <v-card color="transparent" outlined tile class="text-center">
        <div class="text-h4 font-weight-bold ">Welcome to</div>
        <div class="text-h3 font-weight-black primary--text">EZ2ARCHIVE!</div>
        <div class="text-h6 font-weight-medium mt-2">성과표, 서열표 및 티어표를 포함한 다양한 기능을 제공합니다.</div>    
      </v-card>
    </v-col>

    <v-col cols="6" class="mt-5 mr-5">
      <v-card class="home-card rounded-xl pa-3">
           
          <div class="text-h5 font-weight-black ml-3 primary--text my-2">공지사항</div>             
              <div
                v-for="n in 6"
                :key="n"
                class="my-1 ml-3 home-card-text"
              >
                · 공지사항 {{ n }}          
          </div>
      </v-card>
      <v-row class="mt-5" no-gutters>
        <v-col
          cols="6">
          <v-card class="home-card rounded-xl text-center pa-3 mr-2">
            <div>
              <div class="text-h5 font-weight-black primary--text my-2">게임 도움말</div>
              <div class="my-10 home-card-text">
                「EZ2ON REBOOT : R」이
                <br />
                처음이시라면?
              </div>            
              <v-btn color="primary" class="rounded-xl mb-2 home-btn-text" depressed width="175px">게임 도움말 확인하기</v-btn>
            </div>   
          </v-card>
        </v-col>
        <v-col
        cols="6">    
          <v-card class="home-card rounded-xl text-center pa-3 ml-2">
            <div>
              <div class="text-h5 font-weight-black primary--text my-2">도움말 및 안내</div>
              <div class="my-10 home-card-text">
                활용하기 어렵거나 
                <br />
                사용법이 궁금하시다면?
              </div>        
              <v-btn color="primary" class="rounded-xl mb-2 home-btn-text" depressed width="175px">도움말 및 안내 확인하기</v-btn>           
            </div>   

          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4" class="mt-5">
      <v-card height="100%" class="home-card rounded-xl pa-3 text-center">
        <div class="fill-height d-flex flex-column justify-center">
          <div class="text-h5 font-weight-black primary--text mt-2">성과 기록용 클라이언트</div>
          <div class="mt-2">
          <v-skeleton-loader
            class="ma-auto"   
            type="image"
            width="150px"
            height="100px"

          ></v-skeleton-loader>
          <v-skeleton-loader
            class="ma-auto"  
            type="image"
            width="150px"
            height="100px"
          ></v-skeleton-loader>
          </div>
          <v-spacer></v-spacer>
          <div class="text-center home-card-text mb-10">단 두번의 조작으로<br/>성과를 간편하게 기록하세요.</div>
          <div class="align-self-center">
            <v-btn color="primary" class="white--text mb-2 home-btn-text" depressed width="175px">다운로드</v-btn>
          </div>
        </div>   
      </v-card>
    </v-col>
    </v-row>
    <ThemeChangerVue />
</v-container>


</template>

<script>
import ThemeChangerVue from './ThemeChanger.vue';
export default {
  name: 'Home',
  components:{
    ThemeChangerVue
  },
  created(){

  },
  methods:{
    getWindowHeight(){
      return window.innerHeight;
    }
  }
}
</script>

<style scoped>
.home-card{
  border-style: solid;
  border-width: 3px;
  border-color: var(--v-secondary-base);
  box-shadow: 0px 10px 15px rgba(113, 75, 255, 0.15) !important;
}
#home{
  margin: 0 auto;
  width: 1200px;
  min-width: 1200px;
}


.home-btn-text{
  letter-spacing: 0px;
  margin: 0 auto;
}

.home-card-text{
  font-size: 20px;
  line-height: 30px;
}


.v-btn{
  border-radius: 13px !important;
  text-align: center;
}

</style>

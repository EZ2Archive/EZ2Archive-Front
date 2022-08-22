<template > 
    <v-row class="mx-10 container">
    <v-col
      cols="12"
    >
      <v-card color="transparent" outlined tile>
        <v-card-title class="text-h2 font-weight-bold">Welcome to EZ2ARCHIVE!</v-card-title>
        <v-subheader>성과표, 서열표 및 티어표를 포함한 다양한 기능을 제공합니다.</v-subheader>     
      </v-card>
    </v-col>

    <v-col cols="8">
      <v-card class="my-2">
        <v-list two-line class="mx-2">
          <v-list-item-title class="text-h4 font-weight-bold ml-3">공지사항</v-list-item-title>
          <v-divider class="my-1 mx-3"></v-divider>          
            <template >
              <v-list-item
                v-for="n in 6"
                :key="n"
              >
                <v-list-item-content>
                  <v-list-item-title>공지사항 {{ n }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
        </v-list>
      </v-card>
      <v-card class="my-2">
        <v-list two-line class="mx-2">
          <v-list-item-title class="text-h4 font-weight-bold ml-3">문의</v-list-item-title>
          <v-divider class="my-1 mx-3"></v-divider>
          <div class="d-flex">
          <v-skeleton-loader
            v-for="n in 6"
            :key="n"         
            type="image, image"
            height="50"
            width="50"
            tile
            class="mx-2">
          </v-skeleton-loader>  
          </div>
      
        </v-list>
      </v-card>
    </v-col>
    <v-col
    cols="4"
    class="my-2">

    <v-card height="100%" width="90%">
    <v-card-title class="text-h4 font-weight-bold">성과 기록용 클라이언트</v-card-title>
    <v-divider class="my-1 mx-5"></v-divider>
    <div class="home-client-img">
    <v-skeleton-loader      
      type="image, image"
      height="200px"
      width="200px"
      tile
      class="mx-2">
      
    </v-skeleton-loader>
    <v-card-text class="text-h6 font-weight-bold">Comming Soon!</v-card-text>
    <v-card-text>몰루</v-card-text>
    <v-card-text>몰루</v-card-text>
    <v-card-text>몰루</v-card-text>
    </div>
    </v-card>

    </v-col>
    <v-col
    cols="12"
    class="mt-2"><hr width="100%" color="#90A4AE"  align="center" class="my-3"/> </v-col>
    <v-col
      cols="12"
      >
    <v-footer     
        color="transparent"
      >
      <v-card
        flat
        tile
        width="90%"
      >
        <v-row>
        <v-col cols="6" align-self="start">
        <div class="font-weight-bold">
          <v-icon color="black">mdi-copyright</v-icon>
          2022 EZ2ARCHIVE
        </div>
        <div  class="font-weight-bold">
          <v-icon color="black">mdi-copyright</v-icon>
          2020 NEONOVICE All Rights Reserved.
        </div>
        <div  class="font-weight-bold">
          <v-icon color="black">mdi-copyright</v-icon>
          2021 SQUARE PIXELS
        </div>
        </v-col>
        <v-col cols="6" >
          <v-row justify="end" class="d-flex flex-column align-end">
            <div class="font-weight-bold">
              * Special Thanks *
            </div>
            <a class="font-weight-bold" href="https://twitter.com/suisou610">
              suisou/수조(지유콘 제작자)
            </a>
            <div class="font-weight-bold">
              샤미루(티어시스템 테스트)
            </div>
          </v-row>
        
        </v-col>



        </v-row>

      </v-card>
    </v-footer>
    </v-col>




     
        <!-- <v-card class="d-flex flex-column align-center mt-10" >
          
          <v-img
          src="/resource/ezu_home.png"
          height="500"
          width="500"
          contain 
          >
          <template v-slot:placeholder>
                <v-skeleton-loader         
                type="image, image"
                height="100%"
                tile
                ></v-skeleton-loader>
          </template>    
          </v-img>
        </v-card> -->


    </v-row>
    
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  created(){

  }
}
</script>

<style>
.home-client-img{
  display: table; margin-left: auto; margin-right: auto;

}

</style>

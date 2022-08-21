<template > 
  <div >
    <v-row justify="center">

        <v-card class="d-flex flex-column align-center mt-10" >
          
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

          <v-card-title>홈 화면</v-card-title>
          <v-card-text>뭐 넣을지 몰루</v-card-text>
          <v-card-text>공지사항?</v-card-text>
        </v-card>


    </v-row>


  </div>
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

</style>

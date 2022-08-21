<template>
    <v-card class="music-img-wrapper" width="110" height="100%" tile elevation="0">
    
    <v-card-actions class="music-img-wrapper">
        
        <v-img :src="getDiskImg(music.NAME)" height="80" contain>
            <template v-slot:placeholder>
                <v-skeleton-loader
                class="mx-auto"
                type="image"
                ></v-skeleton-loader>
            </template>               
        </v-img>
        <v-img class="diff-img" :src="getDiffImg(music.DIFFICULTY)" width="30" height="15" contain  />
    </v-card-actions>
    <div v-if="isVisibleTitle" class="d-flex justify-center align-center music-title mx-1">{{music.NAME}}</div>
    </v-card>
    
</template>

<script>
export default {
    props: {
        music: Object,
        isVisibleTitle: Boolean
    },
    data(){
        return {
        }
    },
    methods:{
        getDiskImg(title){
            return `/disk/${title}.webp`
        },
        getDiffImg(diff){
            return `/difficulty/${diff}.png`
        },
    }
}
</script>

<style scoped>

.music-card-allcool{
  border-style: solid;
  border-width: 3px;
  border-image: linear-gradient(45deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82) 1;
  background-size: 300% 300%;
}
.music-card-norecord{
  border-style: solid;
  border-width: 3px;
  border-color: #CFD8DC;
  background-size: 300% 300%;
}
.music-card-record{
  border-style: solid;
  border-width: 3px;
  border-color: #29B6F6;
  background-size: 300% 300%;
}
.music-card-nomiss{
  border-style: solid;
  border-width: 3px;
  border-color: #F9A825;
  background-size: 300% 300%;
}
.select-color{
    font-weight: bold ;
    text-align: center;
}

.music-img-wrapper{
  position : relative;

}

.music-img{
    opacity: 0.2;
}
.music-img-row{
  position: absolute;
  top: 0px;
  left : 15px;
  right: 15px;
  bottom: 0px;
  margin: 1px; 
  z-index: 5;
}

.diff-img{
    position: absolute;
    bottom: 1px;
    right : 1px; 
    z-index: 0;
}

.grade-img{
    position: absolute;
  bottom: 0px;
  left : 0px; 
  z-index: 0;

}

.badge-img{
position: absolute;
  top: 0px;
  left : 0px; 
  z-index: 0;
}

.checkbox{
    height: 2px;
    zoom: 0.9;
    margin: 0px;
}

.save-btn{
    margin: auto;
    width: 50%;
}

.music-title{
    height: 40px;
    font-size: 11px;
}

</style>
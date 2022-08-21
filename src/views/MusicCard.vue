<template>
    <v-card :class="cardStyle" class="ma-2 rounded music-card" width="130" height="100%" tile elevation="0">

    <v-card-text v-if="isEditScore" class="d-flex flex-column align-center" >
        <VueNumberInput class="number-input" v-model="value" :min="0" :max="1106000" :step="1000" width="100px" size="small" align="center" />
        <v-card color="transparent" outlined height="24"></v-card>
         
    </v-card-text>
    <v-card-text v-else class="justify-center font-weight-black"  @click="isEditScore=true">
        <div class="white--text" style="background-color: #646FD4;">{{value}}</div>
        <div class="white--text" style="background-color: #646FD4;">{{percentage}}%</div>

    </v-card-text>
    
    <v-card-actions class="music-img-wrapper">
        
        <v-img :src="getDiskImg(music.NAME)" height="80" contain  :class="isEditScore ? 'music-img' : '' ">
            <template v-slot:placeholder>
                <v-skeleton-loader
                class="mx-auto"
                type="image"
                ></v-skeleton-loader>
            </template>               
        </v-img>
        <v-row v-if="isEditScore" dense class="music-img-row font-weight-black">
            <v-checkbox class="checkbox" dense v-model="isAllCool" label="All Cool" color="primary"></v-checkbox>
            <v-checkbox class="checkbox" dense v-model="isNoMiss" label="No Miss" color="primary" ></v-checkbox>
            <div class="save-btn"><v-btn class="font-weight-bold mt-3" x-small @click="isEditScore=false" color="primary">저장</v-btn></div>       
        </v-row>
        <v-img :class="isEditScore ? 'diff-img music-img' : 'diff-img'" :src="getDiffImg(music.DIFFICULTY)" width="30" height="15" contain  />
        <v-img :class="isEditScore ? 'grade-img music-img' : 'grade-img'" :src="randGradeImg()" width="40" contain  />
        <!-- <v-img :class="isEditScore ? 'badge-img music-img' : 'badge-img'" :src="randBadgeImg()" width="40" contain  />           -->
    </v-card-actions>
    <div v-if="isVisibleTitle" class="d-flex justify-center align-center music-title mx-1 font-weight-medium white--text" >{{music.NAME}}</div>
    </v-card>

    
</template>

<script>
import VueNumberInput from 'vue-numeric-input'
export default {
    props: {
        music: Object,
        isVisibleTitle: Boolean
    },
    components:{
        VueNumberInput
    },
    data(){
        return {
            value: 1005000,
            percentage: 95.34,
            isEditScore: false,
            isAllCool: false,
            isNoMiss: false,
            diffImgList: ['/difficulty/EZ.png', '/difficulty/NM.png', '/difficulty/HD.png', '/difficulty/SHD.png'],
            gradeImgList: ['/grade/F.png', '/grade/E.png', '/grade/D.png', '/grade/C.png', '/grade/B.png', 
                            '/grade/A.png', '/grade/A+.png', '/grade/S.png', '/grade/S+.png', '/grade/S++.png', '/grade/S+++.png'],
            badgeImgList: ['/badge/AC.png', '/badge/FC.png', null]
        }
    },
    computed:{
        cardStyle: function(){
            
            if(this.value === 0){
                return 'music-card-norecord'
            }
            else if(this.value !== 0 && this.isAllCool === false && this.isNoMiss === false){
                return 'music-card-record'
            }
            else if(this.value !== 0 && this.isAllCool === false && this.isNoMiss === true){
                return 'music-card-nomiss'
            }
            else if(this.value !== 0 && this.isAllCool === true){
                return 'music-card-allcool'
            }
        }
    },  
    methods:{
        randDiffImg(){
            return this.diffImgList[Math.floor(Math.random() * this.diffImgList.length)]
        },
        getDiffImg(diff){
            return `/difficulty/${diff}.png`
        },
        randGradeImg(){
            return this.gradeImgList[Math.floor(Math.random() * this.gradeImgList.length)]
        },
        randBadgeImg(){
            return this.badgeImgList[Math.floor(Math.random() * this.badgeImgList.length)]
        },
        getDiskImg(title){
            return `/disk/${title}.webp`
        }
    }
}
</script>

<style scoped>

.music-card-allcool{
    
  --angle: 0deg;
	width: 50vmin;
	height: 50vmin;
	border-style: solid;
    border-width: 3px;
	border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
	
	animation: 10s rotate linear infinite;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.music-card{
    background-color: #9BA3EB;
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

.music-title{
    height: 40px;
    font-size: 11px;
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
.number-input{
    background-color: white;
}

.save-btn{
    margin: auto;
    width: 50%;
}


</style>
<template>
    <v-card :class="cardStyle" class="ma-2 rounded music-card" width="130" height="100%" tile elevation="0">

    <v-card-text v-if="isEditScore" class="d-flex flex-column align-center" >
        <VueNumberInput class="number-input" v-model="music.score" :min="0" :max="1106000" :step="1000" width="100px" size="small" align="center" />
        <v-card color="transparent" outlined height="24"></v-card>
         
    </v-card-text>
    <v-card-text v-else class="justify-center font-weight-black"  @click="isEditScore=true">
        <div class="white--text" style="background-color: #646FD4;">{{music.score === -1 ? 0 : music.score}}</div>
        <div class="white--text" style="background-color: #646FD4;">{{music.percentage === -1 ? 0 : music.percentage.toFixed(2)}}%</div>

    </v-card-text>
    
    <v-card-actions class="music-img-wrapper">
        
        <v-img :src="getDiskImg(music.name)" height="80" contain  :class="isEditScore ? 'music-img' : '' ">
            <template v-slot:placeholder>
                <v-skeleton-loader
                class="mx-auto"
                type="image"
                ></v-skeleton-loader>
            </template>               
        </v-img>
        <v-row v-if="isEditScore" dense class="music-img-row font-weight-black">
            <v-checkbox class="checkbox" dense v-model="music.allCool" label="All Cool" color="primary"></v-checkbox>
            <v-checkbox class="checkbox" dense v-model="music.noMiss" label="No Miss" color="primary" ></v-checkbox>
            <div class="save-btn"><v-btn class="font-weight-bold mt-3" x-small @click="save" color="primary">저장</v-btn></div>       
        </v-row>
        <v-img :class="isEditScore ? 'diff-img music-img' : 'diff-img'" :src="getDiffImg(music.difficulty)" width="30" height="15" contain  />
        <v-img :class="isEditScore ? 'grade-img music-img' : 'grade-img'" :src="getGradeImg(music.grade)" width="40" contain  />
        <!-- <v-img :class="isEditScore ? 'badge-img music-img' : 'badge-img'" :src="randBadgeImg()" width="40" contain  />           -->
    </v-card-actions>
    <div v-if="isVisibleTitle" class="d-flex justify-center align-center music-title mx-1 font-weight-medium" >{{music.name}}</div>
    </v-card>

    
</template>

<script>
import VueNumberInput from 'vue-numeric-input'
import { mapActions } from 'vuex'
import match from '../common/match.json'
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
            isEditScore: false,
            diffImgList: ['/difficulty/EZ.png', '/difficulty/NM.png', '/difficulty/HD.png', '/difficulty/SHD.png'],
            gradeImgList: ['/grade/F.png', '/grade/E.png', '/grade/D.png', '/grade/C.png', '/grade/B.png', 
                            '/grade/A.png', '/grade/A+.png', '/grade/S.png', '/grade/S+.png', '/grade/S++.png', '/grade/S+++.png'],
            badgeImgList: ['/badge/AC.png', '/badge/FC.png', null]
        }
    },
    computed:{
        cardStyle: function(){
            
            if(this.music.score === -1){
                return 'music-card-norecord'
            }
            else if(this.music.score !== -1 && this.music.allCool === false && this.music.noMiss === false){
                return 'music-card-record'
            }
            else if(this.music.score !== -1 && this.music.allCool === false && this.music.noMiss === true){
                return 'music-card-nomiss'
            }
            else if(this.music.score !== -1 && this.music.allCool === true){
                return 'music-card-allcool'
            }
        }
    },  
    methods:{
        ...mapActions([
            'saveAchievementScore'
        ]),
        getDiffImg(diff){
            return `/difficulty/${diff}.png`
        },
        getDiskImg(title){
            const filename = match[title]
            console.log(filename)
            return `/music_disk/${filename}`
        },
        getGradeImg(grade){
            if(grade === ''){
                return ''
            }
            return `/grade/${grade}.png`
        },
        async save(){
            try{
                await this.saveAchievementScore({
                    allCool: this.music.allCool,
                    noMiss: this.music.noMiss,
                    score: this.music.score,
                    musicInfoId: this.music.musicInfoId,
                })
            }
            catch(err){
                console.log(err)
                alert('저장실패')
            }
            finally{
                this.isEditScore=false
            }
            
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
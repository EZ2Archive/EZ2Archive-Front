<template>
<div class="ma-0 achievement">

    <v-card width="100%" img="/resource/page_bg.jpg" class="ma-0" tile min-width="1200">
    <v-img src="/resource/page_bg.jpg" height="350" class="ma-0">
        <v-row class="fill-height mx-5">
            <v-col     
            cols="2"
            class="user-info"
            >      
            <h1 class="white--text">USER NAME</h1>
            <h2 class="red--text">{{currentKey}}-{{currentLevel}}</h2>
            </v-col>

            <v-col
            cols="4"
            class="white--text d-flex flex-column align-center mt-5">
                <div class="d-flexflex-row">
                    <div class="float-left my-3 text-lg-h5 fill-width font-weight-black">OVERALL</div>
                </div>
                      
                <div class="d-flex flex-row my-2">
                    <h4 class="info-title">Rate Avg.</h4>
                    <v-progress-linear
                    class="ml-3"
                    v-model="rateAverage"
                    buffer-value="100"
                    color="amber"
                    height="17"
                    ></v-progress-linear>
                </div>
                <div class="d-flex flex-row my-2 ">
                    <h4 class="info-title">All Cool</h4>
                    <v-progress-linear
                    class="ml-3"
                    v-model="allCoolCount"
                    buffer-value="100"
                    color="amber"
                    height="17"
                    ></v-progress-linear>
                </div>
                <div class="d-flex flex-row my-2">
                    <h4 class="info-title">No Miss</h4>
                    <v-progress-linear
                    class="ml-3"
                    v-model="noMissCount"
                    buffer-value="100"
                    color="amber"
                    height="17"
                    ></v-progress-linear>
                </div>
                <div class="d-flex flex-row my-2">
                    <h4 class="info-title">S+++</h4>
                    <v-progress-linear
                    class="ml-3"
                    v-model="tripleSCount"
                    buffer-value="100"
                    color="amber"
                    height="17"
                    ></v-progress-linear>
                </div>
                <div class="d-flex flex-row my-2">
                    <h4 class="info-title">S++</h4>
                    <v-progress-linear
                    class="ml-3"
                    v-model="doubleSCount"
                    buffer-value="100"
                    color="amber"
                    height="17"
                    ></v-progress-linear>
                </div>
                <div class="d-flex flex-row my-2">
                    <h4 class="info-title">S+</h4>
                    <v-progress-linear
                    class="ml-3"
                    v-model="singleSCount"
                    buffer-value="100"
                    color="amber"
                    height="17"
                    ></v-progress-linear>
                </div>             
            </v-col>
            <v-col
                cols="6"
                class="d-flex flex-row align-end white--text filter-item">

                <h2 class="my-10">FILTER</h2>
                <v-card color="transparent" elevation="0" min-width="500">
                <v-row>
                    <v-col cols="12" > 
                        <v-btn v-for="(key, idx) in keyList" :key="idx" x-large color="transparent" class="white--text font-weight-bold" elevation="0" :to="`/achievement/${key}/${currentLevel}`">{{key}}</v-btn>
                    </v-col>
                    <v-col cols="12">            
                        <v-btn v-for="(level, idx) in levelList" :key="idx"   color="transparent" class="white--text font-weight-bold" elevation="0" :to="`/achievement/${currentKey}/${level}`" >{{level}}</v-btn>
                    </v-col>

                </v-row>
                </v-card>

            </v-col>
        </v-row>
    </v-img>
    </v-card>


            <v-card width="10%" outlined color="transparent" class="ml-8"><v-checkbox v-model="isVisibleTitle" label="곡제목 표시" ></v-checkbox></v-card>
            
            <div
            v-for="(rank, index) in reverseKeys(maxRank)" :key="index">
                <v-row no-gutters>
                <v-col
                    cols="12"
                    class="d-flex flex-row"
                    
                >
                
                    <v-card  width="5%" outlined color="transparent" class="ma-3">
                        <h3>{{currentLevel}}.{{rank + 1}}</h3>
                    </v-card>
                    
                    <v-card width="95%" outlined color="transparent" class="d-flex flex-row flex-wrap ma-3 align-self-center">
                        <MusicCard :music="item" :isVisibleTitle="isVisibleTitle" v-for="(item, idx) in getRankList(rank + 1)" :key="idx" />
                    </v-card>                    
                </v-col> 
                <hr width="95%" color="black"  align="center" class="my-3"/>
                
                </v-row>

            </div>
            <div v-show="getNoRankList().length">
            <v-row no-gutters>
                <v-col
                    cols="12"
                    class="d-flex flex-row"
                    
                >
                
                    <v-card  width="5%" outlined color="transparent" class="ma-3">
                        <h3>미분류</h3>
                    </v-card>
                    
                    <v-card width="95%" outlined color="transparent" class="d-flex flex-row flex-wrap ma-3 align-self-center">
                        <MusicCard :music="item" :isVisibleTitle="isVisibleTitle" v-for="(item, idx) in getNoRankList()" :key="idx" />
                    </v-card>              
                </v-col> 
                <hr width="95%" color="black"  align="center" class="my-3"/>               
            </v-row>
            </div>
           
            


</div>

</template>

<script>
import MusicCard from './MusicCard.vue'
import firebase from 'firebase/app'
export default {
    components:{
        MusicCard
    },
    data(){
        return{
            music:{
                title: '',
                level: 13,
                rank: 3
            },
            level:[10,9,8,7,6,5,4,3,2,1],
            rateAverage: 90,
            allCoolCount: 30,
            noMissCount: 54,
            tripleSCount: 20,
            doubleSCount: 13,
            singleSCount: 45,
            keyList: ['4K', '5K', '6K', '8K'],
            levelList: [11,12,13,14,15,16,17,18,19,20],
            currentLevel: null,
            currentKey: null,
            musicList: [],
            maxRank: 0,
            isVisibleTitle: false,
        }

    },
    created(){
        this.getMusicList()
    },
    watch:{
        "$route.params.key"(value){
            this.getMusicList()
        },
        "$route.params.level"(value){
            this.getMusicList()
        },
    },
    methods:{

        getRankList(rank){    
            return this.musicList.filter( x => x.RANKS === rank)
        },
        getNoRankList(){
            return this.musicList.filter( x => x.RANKS === 0).sort(function(a,b){
                var nameA = a.NAME
                var nameB = b.NAME
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            })
        },
        reverseKeys(n) {
            return [...Array(n).keys()].reverse()
        },
        getMusicList(){
            this.currentKey = this.$route.params.key
            this.currentLevel = Number(this.$route.params.level)
            console.log(this.currentKey, this.currentLevel)
            firebase.database().ref(this.currentKey).orderByChild('LEVEL').equalTo(this.currentLevel).once('value').then((snapshot) => {
                this.musicList = Object.values(snapshot.toJSON())
                this.maxRank = Math.max(...this.musicList.map(o => o.RANKS), 0);
            });  
        }


    }
}
</script>

<style>
 .v-progress-linear {
    width: 250px;
}
.info-title{
    width: 80px;
}
.filter-item{
    min-width: 400px;
}

.user-info{
   margin: 100px 0px;
}

.achievement{
    text-align: center;
}
</style>
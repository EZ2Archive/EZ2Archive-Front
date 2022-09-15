<template>
<div>
  <v-row justify="center">
  <v-col
    cols="12"
    sm="2"
    
  >
  <v-img src="/resource/ezu_01.png"  contain class="ma-5"/>

  </v-col>

  <v-col
    cols="12"
    sm="8"
    class="mt-5"
  >
    <v-card color="primary" elevation="0" width="100%">
      <v-row>
          <v-col cols="3" v-for="(item, idx) in keyLevelList" :key="idx"> 
            <v-card width="100%" class="d-flex flex-column align-center" color="primary" outlined>
              <h2>{{item.key}}</h2>
              <v-btn 
              color="transparent" elevation="0" class="white--text font-weight-bold" 
              v-for="(level, keyIdx) in item.level" :key="keyIdx" :to="`/rank/${item.key}/${level}`">LV.{{level}}</v-btn>
            </v-card>
          </v-col>

      </v-row>
    </v-card>
    <v-card width="20%" outlined color="transparent" class="ml-2"><v-checkbox v-model="isVisibleTitle" label="곡제목 표시" ></v-checkbox></v-card>          
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
                <RankMusicCard :music="item" :isVisibleTitle="isVisibleTitle" v-for="(item, idx) in getRankList(rank + 1)" :key="idx" />
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
                  <RankMusicCard :music="item" :isVisibleTitle="isVisibleTitle" v-for="(item, idx) in getNoRankList()" :key="idx" />
              </v-card>              
          </v-col> 
          <hr width="95%" color="black"  align="center" class="my-3"/>               
      </v-row>
    </div>   
  </v-col>
  <v-col
    cols="12"
    sm="2"
  >
  <v-img src="/resource/ezu_01.png"  class="ma-5" contain/>
  </v-col>
  </v-row>

  
</div>

</template>

<script>
import { mapActions } from 'vuex'
import RankMusicCard from './RankMusicCard.vue'
export default {
    data(){
        return{
            currentKey: null,
            currentLevel: null,
            musicList: [],
            maxRank: 0,
            isVisibleTitle: false,
            keyLevelList:[
              {key:'4K', level: [19,18,17,16]},
              {key:'5K', level: [20,19,18,17]},
              {key:'6K', level: [20,19,18,17]},
              {key:'8K', level: [20,19,18,17]},

            ]
        }
    },
    components:{
      RankMusicCard
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
        ...mapActions([
          'getRankTableList'
        ]),
        getRankList(rank){    
            return this.musicList.filter( x => x.rank === rank)
        },
        getNoRankList(){
            return this.musicList.filter( x => x.rank === 0)
        },
        reverseKeys(n) {
            return [...Array(n).keys()].reverse()
        },
        getMusicList(){
            
            this.currentKey = this.$route.params.key
            this.currentLevel = Number(this.$route.params.level)

            if(this.currentKey === '0' || this.currentLevel === 0){
              this.musicList = []
              this.maxRank = 0
              return;
            }
            this.getRankTableList({key:this.currentKey, level: this.currentLevel})
              .then(result => {
                  this.musicList = result.data
                  this.maxRank = Math.max(...this.musicList.map(o => o.rank), 0);
              })
            // firebase.database().ref(this.currentKey).orderByChild('LEVEL').equalTo(this.currentLevel).once('value').then((snapshot) => {
            //     this.musicList = Object.values(snapshot.toJSON())
            //     this.maxRank = Math.max(...this.musicList.map(o => o.RANKS), 0);
            // });  
        }
    }

}
</script>

<style>

</style>
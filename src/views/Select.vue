<template>
    <v-container>
        <v-row>
            <v-col v-for="(key, idx) in keyList" :key="idx" cols="12">
                <v-card class=" ma-12" height="250">
                    
                    <div class="d-flex flex-column">
                    <v-img
                        :src="getBackgroundImg(key)"
                        width="100"
                        height="100"
                        contain
                    >
                    <template v-slot:placeholder>
                        <v-skeleton-loader
                        class="mx-auto"
                        type="card"
                        ></v-skeleton-loader>
                    </template>   
                    </v-img>
                    <v-card-title>{{key}}</v-card-title>
                    </div>
                    
                    <div class="ma-3">
                    <v-btn v-for="(level, idx) in levelList" :key="idx" class="font-weight-bold mx-2" elevation="0" :to="`/achievement/${key}/${level}`" >{{level}}</v-btn>     
                    </div>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
    data(){
        return{
            keyList: ['4K', '5K', '6K', '8K'],
            levelList: [11,12,13,14,15,16,17,18,19,20]
        }
    },
    methods:{
        getBackgroundImg(key){
            return `/select/${key}_select_bg.png`
        }
    }
}
</script>

<style>

</style>
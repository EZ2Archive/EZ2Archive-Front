<template>
    <v-row class="text-center">
        <v-col class="d-flex justify-center ma-5" cols="6">
            <v-card width="500">
                <v-card-title>
                <v-img
                    :src="randTierImg()"
                    width="200"
                    height="200"
                    contain
                    class="pulse"
                ></v-img>

                </v-card-title>
                <h1>
                {{tier}}
                </h1>

            </v-card>
        </v-col>
        <v-col class="d-flex justify-center ma-5" cols="auto">
            <v-card width="500">
                <v-card-title>
                    Name: FOX-B
                </v-card-title>
                <v-card-title>TOP50합계: 10000</v-card-title>
                <v-card-title>환산포인트: 10000</v-card-title>
                <v-card-title>Next Tier -> XXX</v-card-title>
            </v-card>
        </v-col>

        <v-col cols="12" class="d-flex justify-center ma-5">
            <v-card width="800">
            <VueTabulator v-model="data" :options="tableOptions"/>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data(){
        return{
            tierImgList: ['/tiers/Bronze.png', '/tiers/Silver.png', '/tiers/Gold.png', '/tiers/Platinum.png', 
                        '/tiers/Diamond.png', '/tiers/Master.png', '/tiers/Nemesis.png', '/tiers/Vanquisher.png',],
            tableOptions:{
                layout: "fitColumns",
                selectable:1,
                columns:[
                    {title: '', width: '4%', field: 'index', align:'center', headerSort:false},
                    {title: '이미지', width: '10%', field: 'image', formatter:"image", align:"center", headerSort:false, formatterParams:{
                        height:"40px",
                        width:"40px"
                    }},
                    {title: '제목', width: '40%', headerSort:false, align:"center", field: 'title'},
                    {title: '레벨', width: '10%', headerSort:false, align:"center", field: 'level' },
                    {title: '스코어', width: '20%', headerSort:false, align:"center", field: 'score'},              
                    {title: '포인트', width: '16%', headerSort:false, align:"center", field: 'point'},
                ],
                paginationSize:5,
                height: '100%',
                columnVertAlign: 'middle',
                width: '500',
                layout: 'fitColumns'
                
            },
            tier: '',
            data:[
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
                {index: 0, title:'ATOPY', image: '/Atopy.png', level: 12, score: 1100000, point: 200},
            ]
        }
    },
    methods:{

        randTierImg(){
            const item = this.tierImgList[Math.floor(Math.random() * this.tierImgList.length)];
            this.tier = item.split('/')[2].split('.')[0];
            return item
        }
    }
}
</script>

<style>
.tabulator .tabulator-header .tabulator-col {
    text-align:center;
    
}
.pulse{
	animation-name: pulse;
	-webkit-animation-name: pulse;	

	animation-duration: 1.5s;	
	-webkit-animation-duration: 1.5s;

	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;
}

@keyframes pulse {
	0% {
		transform: scale(0.9);
		opacity: 0.7;		
	}
	50% {
		transform: scale(1);
		opacity: 1;	
	}	
	100% {
		transform: scale(0.9);
		opacity: 0.7;	
	}			
}

@-webkit-keyframes pulse {
	0% {
		-webkit-transform: scale(0.95);
		opacity: 0.7;		
	}
	50% {
		-webkit-transform: scale(1);
		opacity: 1;	
	}	
	100% {
		-webkit-transform: scale(0.95);
		opacity: 0.7;	
	}			
}

</style>
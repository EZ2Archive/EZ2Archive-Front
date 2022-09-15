<template>
<div>
    <hr width="100%" align="center" class="my-3 footer-divider" :color="$vuetify.theme.themes.light['secondary']" /> 
    <v-container id="footer">
        <v-row no-gutters>  
            <v-col cols="6">
                <v-card
                    flat
                    tile>      
                    <p>
                    본 사이트는 게임 <span class="font-weight-bold">「EZ2ON REBOOT:R」</span>의 팬 사이트이며,
                    <br />
                    사이트 내 사용된 모든 게임 컨텐츠의 저작권은 <span class="font-weight-bold">NEONOVICE</span> 에 있습니다.    
                    </p>
                    <div>
                        ©️ 2022 <span class="font-weight-bold">EZ2ARCHIVE</span>
                    </div>
                    <div>
                        © 2020 <span class="font-weight-bold">NEONOVICE </span>& ©️ 2011-2022 <span class="font-weight-bold">SQUARE PIXELS </span>All Rights Reserved.
                    </div>
                </v-card>  
            </v-col>               
        </v-row>  
    

    </v-container>
</div>


</template>

<script>
export default {

}
</script>

<style scoped>

#footer{
    position: relative;
    margin: 0 auto;
    width: 1100px;
    min-width: 1100px;
}
.v-card{  
    position: absolute;
}

.footer-divider{
    z-index: 0;
}

</style>
<template>
<v-app>
<v-main>
<div class="notfound-wrapper">
<center class="notfound">
        <v-card width="500" tile elevation="0" flat color="transparent">           
                <v-img
                    src="../../assets/img_404.png"
                    contain
                ></v-img>

                <v-spacer></v-spacer>
                <h1>404 Not Found</h1>
                <v-btn to="/" class="my-3" elevation="0" color="success" >메인으로</v-btn>
        </v-card>
</center>
</div>
</v-main>
</v-app>




</template>

<script>
export default {

}
</script>

<style scoped>
.notfound-wrapper .notfound{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.notfound{
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
}
div {
    display: block;
}
</style>
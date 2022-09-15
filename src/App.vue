<template>
  <div id="app">
      <router-view></router-view>    
  </div>
</template>
<script>
export default {
  name: 'App',
  created(){
    this.$vuetify.theme.themes.light['primary'] = '#473395'
    this.$vuetify.theme.themes.light['secondary'] = '#E3DBFF'
  }
}
</script>

<style>
.v-btn:before {
  opacity: 0 !important;
  box-shadow: 0px 0px 0px 0px;
}

.v-ripple__container {
  opacity: 0 !important;
  box-shadow: 0px 0px 0px 0px;
}
</style>

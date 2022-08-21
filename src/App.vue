<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  created(){

  }

}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  background-color: #DBDFFD;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

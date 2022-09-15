<template>
  <v-app>
    <default-bar />
    <default-view />
    <Footer />
  </v-app>
</template>
<script>
import DefaultBar from './Appbar'
import DefaultDrawer from './Drawer'
import DefaultView from './View'
import Footer from './Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar,
    DefaultDrawer,
    DefaultView,
    Footer
  },
}
</script>
<style lang="">

</style>

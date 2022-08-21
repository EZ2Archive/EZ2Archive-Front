<template>
  <v-app>
    <default-bar />
    <default-view />
  </v-app>
</template>
<script>
import DefaultBar from './Appbar'
import DefaultDrawer from './Drawer'
import DefaultView from './View'
import SystemBar from './Systembar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar,
    DefaultDrawer,
    DefaultView,
    SystemBar,
  },
}
</script>
<style lang="">

</style>

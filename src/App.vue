<template>
  <v-app>
    <home-header />
    <home-body style="background-color:#fafafa;" />
    <bottom-menu />
  </v-app>

</template>

<script>
import titleMixin from './mixins/titleMixin'
import HomeHeader from "./components/HomeHeader.vue";
import HomeBody from "./components/HomeBody.vue";
import BottomMenu from "./components/BottomMenu.vue";
export default {
  mixins: [titleMixin],
  title: 'Instagram',
  components: {
    HomeHeader,
    HomeBody,
    BottomMenu,
  },
  name: 'App',

  data: () => ({

  }),
}
</script>

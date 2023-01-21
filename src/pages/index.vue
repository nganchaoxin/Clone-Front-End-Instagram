<template>
  <home-header />
  <v-app>
    <home-body :posts="posts" />
  </v-app>
  <bottom-menu />
  <router-view />
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import HomeBody from "../components/HomeBody.vue";
import BottomMenu from "../components/BottomMenu.vue";

import posts from "../data/posts";

export default {
  components: {
    HomeHeader,
    HomeBody,
    BottomMenu,
  },

  data: () => ({
    posts,
  }),
};
</script>

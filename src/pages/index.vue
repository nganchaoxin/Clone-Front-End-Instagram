<template>
  <home-header />
  <v-app>
    <home-body 
      :posts="posts" 
      :step="step"
      :filters="filters"
      :image="image"
      :selectedFilter="selectedFilter"
      v-model="caption" 
    />
  </v-app>
  <bottom-menu />
  <router-view />
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import HomeBody from "../components/HomeBody.vue";
import BottomMenu from "../components/BottomMenu.vue";

import posts from "../data/posts";
import filters from "../data/filters"

export default {
  components: {
    HomeHeader,
    HomeBody,
    BottomMenu,
  },

  data: () => ({
    step: 1,
    posts,
    filters,
    image: "",
    selectedFilter: "",
    caption: ""
  }),
};
</script>

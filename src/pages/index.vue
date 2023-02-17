<template>
  <home-header
    :step="step"
    @update-step="step = $event"
    @uploadImage="handleImage"
    @button-clicked="handlePost"
  />
  <v-app>
    <home-body
      :posts="posts"
      :step="step"
      :filters="filters"
      :image="image"
      :selectedFilter="selectedFilter"
      @caption-change="handleCaptionChange"
    />
  </v-app>
  <bottom-menu />
  <router-view />
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import HomeBody from "../components/HomeBody.vue";
import BottomMenu from "../components/BottomMenu.vue";
import HomeUpload from "../components/HomeUpload.vue";

import posts from "../data/posts";
import filters from "../data/filters";
import EventBus from "../event-bus";

export default {
  components: {
    HomeHeader,
    HomeBody,
    BottomMenu,
    HomeUpload,
  },
  created() {
    EventBus.on("filter-selected", (evt) => {
      this.selectedFilter = evt.filter;
    });
  },
  data: () => ({
    step: 1,
    posts,
    filters,
    image: "",
    selectedFilter: "",
    caption: "",
  }),

  methods: {
    handleImage(img) {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        this.image = reader.result;
      };
    },
    handleCaptionChange(value) {
      this.caption = value;
    },
    handlePost() {
      const post = {
        username: "new_post",
        userImage:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        postImage: this.image,
        likes: 0,
        caption: this.caption,
        filter: this.selectedFilter,
      };
      this.posts.unshift(post);
      this.step = 1;
    },
  },
};
</script>

<template>
  <v-main class="py-12">
    <v-card v-if="step === 1" v-for="post in posts" :key="post.id">
      <v-row
        class="px-6 my-auto py-auto"
        justify="center"
        align="center"
        style="height: 60px"
      >
        <v-col cols="10" class="pa-0">
          <v-row>
            <v-avatar size="40" class="my-auto mx-2">
              <v-img :src="post.userImage" />
            </v-avatar>
            <v-col class="pa-0">
              <p class="pa-0 ma-0 text-sm-h6">
                {{ post.username }}
              </p>
              <v-card-subtitle class="pa-0 text-sm-h6">
                {{ post.location }}
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" align="end" class="pa-0">
          <v-btn icon flat>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-card>
        <v-img :class="post.filter" :src="post.postImage"></v-img>
      </v-card>
      <v-container>
        <v-row>
          <v-col cols="7" class="py-0 px-0">
            <v-btn-toggle>
              <v-btn
                flat
                icon
                @click="likePost(post)"
                v-model="post.hasBeenLiked"
                color="red"
              >
                <v-icon color="black">mdi-heart-outline</v-icon>
              </v-btn>
            </v-btn-toggle>

            <v-btn flat icon>
              <img src="../assets/images/comment-button.svg" alt="" />
            </v-btn>
            <v-btn flat icon>
              <img src="../assets/images/share-button.svg" alt="" />
            </v-btn>
          </v-col>
          <v-col align="end" cols="5" class=" py-0 px-0">
            <v-btn icon flat>
              <img src="../assets/images/bookmark-button.svg" alt="" />
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="px-4 py-0 my-2">
          <p class="mb-2">{{ post.likes }} Liked by vo_hoang_phi and others</p>

          <p>
            <a href="">{{ post.username }}</a> {{ post.caption }}
          </p>
        </v-row>
        <v-row>
          <v-card-subtitle>{{ niceDate(post) }}</v-card-subtitle>
        </v-row>
      </v-container>
    </v-card>
    <div v-if="step === 2">
      <div
        class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="filter-container">
        <home-filter
          v-for="filter in filters"
          :filter="filter"
          :image="image"
          :key="filters.indexOf(filter)"
        />
      </div>
    </div>
    <div v-if="step === 3">
      <div
        class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div class="caption-container">
        <textarea
          class="caption-input"
          placeholder="Write a caption..."
          type="text"
          v-model="caption"
        >
        </textarea>
      </div>
    </div>
  </v-main>
</template>

<script>
import moment from "moment";
import HomeFilter from "./HomeFilter.vue";

export default {
  components: {
    HomeFilter,
  },
  props: {
    step: Number,
    posts: Object,
    filters: Array,
    image: String,
    selectedFilter: String,
  },
  watch: {
    caption(newVal) {
      this.$emit("caption-change", newVal);
    },
  },
  data() {
    return {
      caption: "",
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  methods: {
    niceDate(post) {
      return moment(post.date).format("MM/DD/YYYY hh:mm");
    },
    likePost(post) {
      post.hasBeenLiked ? post.likes-- : post.likes++;
      post.hasBeenLiked = !post.hasBeenLiked;
    },
  },
};
</script>

<style lang="scss" src="../styles/phone-body.scss"></style>

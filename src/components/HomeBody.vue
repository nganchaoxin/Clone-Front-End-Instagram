<template>
  <v-main class="py-12">
    <v-card v-for="post in posts" :key="post.id">
      <v-row
        class="px-6 my-auto py-auto"
        justify="center"
        align="center"
        style="height: 60px"
      >
        <v-col cols="10" class="pa-0">
          <v-row>
            <v-avatar size="50">
              <v-img>
                {{ post.userImage }}
              </v-img>
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

      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-container>
        <v-row>
          <v-col cols="7" class="pl-4">
            <v-btn-toggle>
              <v-btn
                flat
                icon
                @click="likePost(post)"
                v-model="post.hasBeenLiked"
                color="red"
              >
                <v-icon color="black">mdi-heart-outline</v-icon>
                <!-- <img src="../assets/images/notification-button.svg" alt=""> -->
              </v-btn>
            </v-btn-toggle>

            <v-btn flat icon>
              <img src="../assets/images/comment-button.svg" alt="" />
            </v-btn>
            <v-btn flat icon>
              <img src="../assets/images/share-button.svg" alt="" />
            </v-btn>
          </v-col>
          <v-col align="end" cols="5" class="pr-4">
            <v-btn icon flat>
              <img src="../assets/images/bookmark-button.svg" alt="" />
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="px-4 py-2">
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
  </v-main>
</template>

<script>
import moment from "moment";

export default {
  props: {
    posts: Object,
  },
  data() {
    return {
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

<style></style>

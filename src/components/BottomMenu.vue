<template>
  <v-bottom-navigation height="44">
    <v-row justify="center">
      <v-btn value="recent">
        <img src="../assets/images/home-button.svg" />
      </v-btn>
      <v-btn value="favorites">
        <img src="../assets/images/search-button.svg" />
      </v-btn>
      <v-btn value="nearby">
        <img src="../assets/images/reel-button.svg" />
      </v-btn>
      <v-btn value="nearby">
        <img src="../assets/images/message-button.svg" />
      </v-btn>
      <v-btn value="nearby">
        <img width="25" src="../assets/images/profile.jpg" />
      </v-btn>
    </v-row>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: "recent" }),
};
</script>

<style></style>

<template>
  <v-app-bar fixed app elevation="1" height="44">
    <v-row class="px-3 pt-4" v-if="step === 1">
      <v-col>
        <img src="../assets/images/instagram.svg" />
      </v-col>
      <v-col align="end" class="py-0">
        <v-btn flat icon @click="onInputFile">
          <img src="../assets/images/add-post-button.svg" />
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/png, image/jpeg"
            @change="inputFile"
          />
        </v-btn>
        <v-btn flat icon>
          <img src="../assets/images/notification-button.svg" />
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="px-3 pt-4">
      <v-btn @click="goToHome" v-if="step === 2 || step === 3">Cancel</v-btn>
      <v-btn @click="nextStep" v-if="step === 2">Next</v-btn>
    </v-row>
    <!-- <h3>New Photo Post</h3> -->
    <v-row v-if="step === 3">
      <v-btn @click="emitEvent">Share</v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    step: Number,
  },
  data() {
    return {};
  },
  methods: {
    onInputFile() {
      this.$refs.fileInput.click();
    },
    inputFile(event) {
      const img = event.target.files[0];
      this.$emit("uploadImage", img);
      const newStep = this.step + 1;
      this.$emit("update-step", newStep);
    },
    goToHome() {
      // this.image = "";
      // this.selectedFilter = "";
      // this.caption = "";

      const newStep = this.step - 1;
      this.$emit("update-step", newStep);
    },
    nextStep() {
      // this.image = "";
      // this.selectedFilter = "";
      // this.caption = "";

      const newStep = this.step + 1;
      this.$emit("update-step", newStep);
    },
    emitEvent() {
      this.$emit("button-clicked");
    },
  },
};
</script>

<style></style>

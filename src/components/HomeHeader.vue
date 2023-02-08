<template>
  <v-app-bar fixed app elevation="1" height="44">
    <v-row class="px-3 pt-4">
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
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      image: null,
    };
  },
  methods: {
    onInputFile() {
      this.$refs.fileInput.click();
    },
    inputFile(event) {
      const files = event.target.files;
      if (!files.length) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.addEventListener("load", () => {
        this.imageURL = fileReader.result;
      });

      this.image = files[0];
      
      console.log(this.image);
      // this.$router.push({
      //   name: "Create",
      //   params: { image: this.image },
      // });
    },
  },
};
</script>

<style></style>

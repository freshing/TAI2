<template>
  <v-container>
    <v-layout column class="dropzone">
      <input type="file" id="file" ref="file" @change="selectFile()" class="file-input"/>
    </v-layout>
  </v-container>
</template>

<script>
  import API from '@/api';

  export default {
    name: "Upload",

    data() {
      return {
        file: "",
        valid: false,
      }
    },

    methods: {
      selectFile() {
        this.file = this.$refs.file.files[0];
        this.valid = this.file ? true : false;
      },

      submitFile() {
        const formData = new FormData();
        formData.append('f', this.file);
        API.uploadFile(formData);
      }
    }
  }
</script>

<style scoped>
  .dropzone {
    min-height: 200px;
    padding: 10px 10px;
  }
</style>

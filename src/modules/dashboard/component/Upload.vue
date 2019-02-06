<template>
  <v-container sm3>
    <v-layout column xs3>
      <v-label>File</v-label>
      <input type="file" id="file" ref="file" @change="selectFile()" class="file-input"/>
      <v-btn @click="submitFile" :disabled=!valid :class="valid ? 'blue white--text' : 'disabled'">Wyślij</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  import API from '@/api';

  export default {
    name: "Upload",

    props: [
      'path'
    ],

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
        API.uploadFile(formData, this.$props['path']);
        this.$emit('uploadFile');
      }
    }
  }
</script>

<style scoped>

</style>

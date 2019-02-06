<template>
  <v-container>
    <v-layout column xs3>
      <!-- <v-label>Nazwa folderu</v-label> -->
      <v-flex xs3 >
          <v-text-field label="Nazwa folderu"
                        v-model="dirName"
                        @input="check"
                        required >
          </v-text-field>
      </v-flex>
      <v-btn @click="addDirectory" :disabled=!valid :class="valid ? 'blue white--text' : 'disabled'">Utwórz</v-btn>
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
        dirName: "",
        valid: false,
      }
    },

    methods: {
      check() {
        this.valid = this.dirName == '' ? false : true;
      },

      addDirectory() {
        API.addDirectory(this.$props['path'] + '/' + this.dirName);
        this.$emit('addDirectory')
      }
    }
  }
</script>

<style scoped>

</style>

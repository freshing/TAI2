<template>
  <v-layout column>
    <Files :key="updateFiles" v-bind:path="path" @changePath="changePath"/>
    <v-layout xs3>
      <Directory @addDirectory="update" v-bind:path="path" :key="updateDirectory"/>
      <Upload @uploadFile="update" v-bind:path="path" :key="updateUpload"/>
    </v-layout>
  </v-layout>
</template>

<script>
  import Upload from './component/Upload';
  import Files from './component/Files';
  import Directory from './component/Directory';


	export default {
		name: "Dashboard",

    data() {
      return {
        updateFiles: 0,
        updateDirectory: 10,
        updateUpload: 20,
        path: '',
      }
    },

		components: {
      Upload,
      Files,
      Directory
		},

    mounted() {
      localStorage.path = 'asd';
    },

    methods: {
      update() {
        this.updateFiles += 1;
        this.updateDirectory += 1;
        this.updateUpload += 1;
      },

      changePath(path) {
        this.path = path;
        this.update();
      }
    }
	}
</script>

<style scoped>
</style>

<template>
  <v-layout>
    <Upload />
    <Dropzone/>
  </v-layout>
</template>

<script>
  import Upload from './component/Upload';
  import Dropzone from './component/Dropzone';


	export default {
		name: "Dashboard",

		components: {
      Upload,
      Dropzone
		},
	}
</script>

<style scoped>
</style>

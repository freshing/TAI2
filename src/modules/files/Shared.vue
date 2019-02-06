<template>
  <v-container>
    <v-label>Udostępnione dla mnie</v-label>
    <ReceivedFiles />
    <v-label>Udostępnione przeze mnie</v-label>
    <SharedFiles @unshare="update" :key="shared" />
  </v-container>
</template>

<script>
	import API from '@/api';
  import SharedFiles from './component/SharedFiles';
  import ReceivedFiles from './component/ReceivedFiles';

	export default {
		name: "Shared",

    components: {
      SharedFiles,
      ReceivedFiles,
    },

		data: () => ({
      shared: 0,
      // received: 10,
		}),

    methods: {
      update() {
        this.shared += 1;
        // this.received += 1;
      },
    }
  }

		// mounted() {
    //   this.loadFiles();
		// },


</script>

<style scoped>

</style>

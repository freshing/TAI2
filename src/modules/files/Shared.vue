<template>
  <v-container>
    <v-label>Udostępnione dla mnie</v-label>
    <ReceivedFiles />
    <v-label>Udostępnione przeze mnie</v-label>
    <SharedFiles />
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
      files: [],
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [
        {
          text: 'Nazwa',
          align: 'left',
          value: 'name'
        },
        { text: 'Utworzono', value: 'is_dir' },
        { text: 'Właściciel'},
        { text: 'Pobierz'},

      ],
		}),

		methods: {
      log(event) {
        console.log("log", event);
      },

      loadFiles() {
				API.getSharedFiles()
					.then( files => {
            this.files = files;
					});
			},
		},

		mounted() {
      this.loadFiles();
		},

	}
</script>

<style scoped>

</style>

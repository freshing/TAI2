<template>
  <v-layout>
    <v-flex xs11>
        <v-toolbar color="blue">
          <v-toolbar-title clipped-left>Zaproszenia</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="request in requests" :key="request.data.id">
            <v-list-tile-content>
              <v-card>
                {{ request.data.username }}
              </v-card>
            </v-list-tile-content>

            <v-btn @click="accept(request.data.id)" color="blue" icon flat>
                <v-icon>fa-check</v-icon>
            </v-btn>
            <v-btn @click="reject(request.data.id)" color="blue" icon flat>
                <v-icon>fa-ban</v-icon>
            </v-btn>

          </v-list-tile>
        </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
	import config  from "@/configuration";
	import API from '@/api';

	export default {
		name: "RequestsList",

		data: () => ({
      requests: [],
		}),

		methods: {
      accept(id) {
        console.log("accept", id);
      },

      reject(id) {
        console.log("reject", id);
      },

			loadRequests() {
				API.loadRequests()
					.then( requests => {
            this.requests = requests;
					});
			},

		},

		mounted() {
			this.loadRequests();
		},

	}
</script>

<style scoped lang="scss">
    #dayspan {
        height: 100%;
        min-height: 1000px;
    }
</style>

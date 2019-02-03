<template>
  <v-layout>
    <v-flex xs12 sm6 >
        <v-toolbar color="blue">
          <v-toolbar-title clipped-left>Użytkownicy</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="user in users" :key="user.data.id">
            <v-list-tile-content>
              <v-card>
                {{ user.data.username }}
              </v-card>
            </v-list-tile-content>

            <v-btn @click="add(user.data.id)" color="blue" icon flat>
                <v-icon>fa-plus-square</v-icon>
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
		name: "UsersList",

		data: () => ({
      users: [],
		}),

		methods: {
      add(id) {
        console.log("asd", id);
      },

			loadUsers() {
				API.loadUsers()
					.then( users => {
            this.users = users;
					});
			},

		},

		mounted() {
			this.loadUsers();
		},

	}
</script>

<style scoped lang="scss">
    #span {
        // height: 100%;
        // min-height: 1000px;
        width: 100%;
    }
</style>

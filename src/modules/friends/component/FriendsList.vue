<template>
  <v-layout row>
    <v-flex sm11>
        <v-toolbar color="blue">
          <v-toolbar-title clipped-left>Znajomi</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="friend in friends" :key="friend.data.id">
            <v-list-tile-content>
              <v-card>
                {{ friend.data.username }}
              </v-card>
            </v-list-tile-content>

            <v-btn @click="add(friend.data.id)" color="blue" icon flat>
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
		name: "FriendsList",

		data: () => ({
      friends: [],
		}),

		methods: {
      log(event) {
        console.log("asd", event);
      },
      loadFriends() {
				API.loadFriends()
					.then( friends => {
            this.friends = friends;
					});
			},
		},

		mounted() {
      this.loadFriends();
		},

	}
</script>

<style scoped lang="scss">
    #dayspan {
        height: 100%;
        min-height: 1000px;
    }
</style>

<template>
  <v-layout>
    <v-flex sm11>
        <v-toolbar color="blue">
          <v-toolbar-title clipped-left>Znajomi</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="friend in friends" :key="friend.id">
            <v-list-tile-content>
              <v-card>
                {{ friend.username }}
              </v-card>
            </v-list-tile-content>
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

    props: [
      'friends'
    ],

	}
</script>

<style scoped lang="scss">
</style>

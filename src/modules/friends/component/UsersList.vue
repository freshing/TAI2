<template>
  <v-layout>
    <v-flex sm12>
        <v-toolbar color="blue">
          <v-toolbar-title clipped-left>Użytkownicy</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="user in users" :key="user.id">
            <v-list-tile-content>
              <v-card>
                {{ user.username }}
              </v-card>
            </v-list-tile-content>
            <v-btn @click="addFriend(user.id)" color="blue" icon flat>
                <v-icon>fa-plus-square</v-icon>
            </v-btn>
          </v-list-tile>
        </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
	import config  from "@/configuration";
  import helper from '@/api/user/userApiHelper'
	import API from '@/api';

	export default {
		name: "UsersList",

    props: [
      'users'
    ],

		methods: {
      addFriend(id) {
        let user = {
          to_user: id
        }

        API.addFriend(user);
        this.$emit('update');
      },

		},

	}
</script>

<style scoped lang="scss">

</style>

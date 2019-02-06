<template>
  <v-layout>
    <v-flex sm11>
        <v-toolbar color="blue">
          <v-toolbar-title clipped-left>Zaproszenia</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="request in requests" :key="request.id">
            <v-list-tile-content>
              <v-card>
                {{ request.username }}
              </v-card>
            </v-list-tile-content>

            <v-btn @click="accept(request.id)" color="blue" icon flat>
                <v-icon>fa-check</v-icon>
            </v-btn>
            <v-btn @click="reject(request.id)" color="blue" icon flat>
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

    props: [
      'requests'
    ],

		methods: {
      accept(id) {
        let user = {
          from_user: id,
        }
        API.acceptFriend(user);
        this.$emit('update');
      },

      reject(id) {
        let user = {
          from_user: id,
        }
        API.rejectFriend(user);
        this.$emit('update');
      },

		},

	}
</script>

<style scoped lang="scss">

</style>

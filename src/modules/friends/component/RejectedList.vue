<template>
  <v-layout>
    <v-flex sm12>
        <v-toolbar color="blue">
          <v-toolbar-title clipped-left>Odrzuceni</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="rejected in rejected" :key="rejected.id">
            <v-list-tile-content>
              <v-card>
                {{ rejected.username }}
              </v-card>
            </v-list-tile-content>
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
      'rejected'
    ],

	}
</script>

<style scoped lang="scss">
</style>

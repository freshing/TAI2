<template>
    <card title="Dane użytkownika">
      <v-layout justify-center row>
          <v-flex xs3>
              <v-card tile flat color="grey lighten-5">
                  <v-card-text>Nazwa użytkownika: </v-card-text>
              </v-card>
          </v-flex>

          <v-flex xs6>
              <v-card tile flat color="grey lighten-4">
                  <v-card-text> {{ userInfo.username }} </v-card-text>
              </v-card>
          </v-flex>
      </v-layout>

      <!-- <v-layout justify-center row>
          <v-flex xs3>
              <v-card tile flat color="grey lighten-5">
                  <v-card-text> Email: </v-card-text>
              </v-card>
          </v-flex>

          <v-flex xs6>
              <v-card tile flat color="grey lighten-4">
                  <v-card-text> {{ userInfo.email }} </v-card-text>
              </v-card>
          </v-flex>
      </v-layout> -->

        <template slot="actions">
            <v-spacer></v-spacer>

            <v-btn v-on:click="editUser" color="blue darken-1 white--text">
                Edytuj
            </v-btn>

            <v-spacer></v-spacer>
        </template>
    </card>
</template>

<script>
	import Card from '@/layout/material/Card'
	import helper from '@/api/user/userApiHelper'
	import API from '@/api';

	export default {
		name: "ShowUser",

		components: {
			Card
		},

		data() {
			return {
				userInfo: helper.getEmptyUserForm(),
			}
		},

		methods: {
			editUser() {
				this.$router.push('/user/edit/');
			}
		},

		mounted() {
			API.loadCurrentUserInfo()
				.then(userInfo => {
					this.userInfo = userInfo;
				});
		}
	}
</script>

<style scoped>

</style>

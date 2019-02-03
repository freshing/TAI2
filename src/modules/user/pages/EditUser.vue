<template>
    <card title="Zmiana hasła" >
        <v-form ref="form" v-model="valid" sm3>
            <v-container py-0 style="max-width: 90%" column>
                <v-layout row>
                    <v-flex xs3 >
                        <v-text-field label="Stare hasło"
                                      v-model="userForm.old_password"
                                      :rules="requireRule"
                                      required >
                        </v-text-field>
                    </v-flex>

                    <v-flex xs3 offset-xs1>
                        <v-text-field label="Nowe hasło"
                                      v-model="userForm.new_password1"
                                      :rules="requireRule"
                                      required >
                        </v-text-field>
                    </v-flex>

                    <v-flex xs3>
                        <v-text-field label="Powtórz nowe hasło"
                                      v-model="userForm.new_password2"
                                      :rules="requireRule"
                                      required >
                        </v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>

        <template slot="actions">
            <v-spacer></v-spacer>
            <v-btn :loading="sended"
                   :disabled="sended"
                   color="blue darken-2 white--text"
                   @click="submit">Wyślij</v-btn>
        </template>
    </card>
</template>

<script>
	import API from '@/api';
	import helper from '@/api/user/userApiHelper'
	import Card from "@/layout/material/Card";

	export default {
		name: "EditUser",

		components: {
			Card
        },

		data() {
			return {
				valid: false,
				userForm: helper.getEmptyUserPassword(),
				requireRule: [v => !!v || 'Pole jest wymagane'],
				sended: false,
			}
		},

		methods: {
			submit() {
				if (this.$refs.form.validate()) {
					this.sended = true;
					// this.userForm.personId = this.userId;
					API.changePassword(this.userForm)
                        .catch(() => this.sended = false);
				}
			},
		},

	}
</script>

<style scoped>

</style>

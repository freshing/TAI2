<template>
    <card title="Formularz Użytkownika" text="Uzupełnij i wyślij" >
        <v-form ref="form" v-model="valid">
            <v-container>
                <v-layout row>
                    <v-flex xs3 >
                        <v-text-field label="Imię"
                                      v-model="userForm.firstName"
                                      :rules="requireRule"
                                      required >
                        </v-text-field>
                    </v-flex>

                    <v-flex xs3 offset-xs1>
                        <v-text-field label="Nazwisko"
                                      v-model="userForm.lastName"
                                      :rules="requireRule"
                                      required >
                        </v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs3>
                        <v-text-field label="Email"
                                      v-model="userForm.email"
                                      :rules="emailRules"
                                      required >
                        </v-text-field>
                    </v-flex>

                    <v-flex xs2 offset-xs1>
                        <v-text-field label="Numer Telefonu"
                                      v-model="userForm.phone"
                                      :rules="phoneRules"
                                      required >
                        </v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs2>
                        <v-text-field label="Pesel"
                                      v-model="userForm.pesel"
                                      :rules="peselRules"
                                      required >
                        </v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs3 >
                        <v-text-field label="Miasto"
                                      v-model="userForm.address.city"
                                      :rules="requireRule"
                                      required >
                        </v-text-field>
                    </v-flex>

                    <v-flex xs2 offset-xs1>
                        <v-text-field label="Kod Pocztowy"
                                      v-model="userForm.address.zipCode"
                                      :rules="zipCodeRules"
                                      required >
                        </v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs3 >
                        <v-text-field label="Ulica"
                                      v-model="userForm.address.address_1"
                                      :rules="requireRule"
                                      required >
                        </v-text-field>
                    </v-flex>

                    <v-flex xs2 offset-xs1>
                        <v-text-field label="Numer Budynku"
                                      v-model="userForm.address.number"
                                      :rules="requireRule"
                                      required >
                        </v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs3>
                        <v-select label="Stanowisko"
                                  v-model="userForm.position"
                                  :items="positionTypesDictionary"
                                  item-text="text"
                                  item-value="id"
                                  :rules="requireRule"
                                  required >
                        </v-select>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs3>
                        <v-select label="Instytut"
                                  v-model="userForm.institution"
                                  :items="institutionsDictionary"
                                  item-text="text"
                                  item-value="id"
                                  :rules="requireRule"
                                  required >
                        </v-select>
                    </v-flex>
                </v-layout>

                <!--<v-layout row>-->
                <!--<v-flex xs4>-->
                <!--&lt;!&ndash;&lt;!&ndash; TODO ogarnąć te title &ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;<v-select label="Titles"&ndash;&gt;-->
                <!--&lt;!&ndash;v-model="userForm.titles"&ndash;&gt;-->
                <!--&lt;!&ndash;:items="titlesDictionary"&ndash;&gt;-->
                <!--&lt;!&ndash;multiple&ndash;&gt;-->
                <!--&lt;!&ndash;item-text="text"&ndash;&gt;-->
                <!--&lt;!&ndash;item-value="id"&ndash;&gt;-->
                <!--&lt;!&ndash;v-validate="'required'"&ndash;&gt;-->
                <!--&lt;!&ndash;data-vv-name="titles"&ndash;&gt;-->
                <!--&lt;!&ndash;:error-messages="errors.collect('titles') >&ndash;&gt;-->
                <!--&lt;!&ndash;</v-select>&ndash;&gt;-->
                <!--</v-flex>-->
                <!--</v-layout>-->

                <v-layout row>
                    <v-flex xs4>
                        <v-select label="Typ Pracy"
                                  v-model="userForm.jobStatuses"
                                  :items="jobStatusesDictionary"
                                  multiple
                                  item-text="text"
                                  item-value="id" >
                        </v-select>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs4>
                        <v-select label="Prace Naukowe"
                                  v-model="userForm.scientificWorks"
                                  :items="scientificWorksDictionary"
                                  multiple
                                  item-text="text"
                                  item-value="id" >
                        </v-select>
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs3>
                        <v-select label="Rola"
                                  v-model="userForm.role"
                                  :items="rolesDictionary"
                                  item-text="text"
                                  item-value="id"
                                  :rules="requireRule"
                                  required >
                        </v-select>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>

        <template slot="actions">
            <v-spacer></v-spacer>
            <v-btn :loading="sended" :disabled="sended" color="blue darken-2 white--text" @click="submit">
                Wyślij
            </v-btn>
            <v-btn color="blue darken-2 white--text" @click="clear">
                Wyczyść
            </v-btn>
        </template>
    </card>
</template>

<script>
	import API from '@/api';
	import helper from '@/api/user/userApiHelper'
	import Card from "@/layout/material/Card";

	export default {
		name: "UserCreateForm",

		components: {
			Card
        },

		data() {
			return {
				valid: false,
				positionTypesDictionary: [],
				institutionsDictionary: [],
				titlesDictionary: [],
				jobStatusesDictionary: [],
				scientificWorksDictionary: [],
				rolesDictionary: [],
				userForm: helper.getEmptyUserForm(),
				requireRule: [v => !!v || 'Pole jest wymagane'],
				zipCodeRules: [
                    v => !!v || 'Pole jest wymagane',
					v => /\d{2}-\d{3}/.test(v) || 'Kod pocztowy musi być podany w formacie XX-XXX'
                ],
				peselRules: [
                    v => !!v || 'Pole jest wymagane',
					v => /\d{11}/.test(v) || 'Pesel musi zawierać 11 cyfr'
                ],
				phoneRules: [
                    v => !!v || 'Pole jest wymagane',
					v => !/\D+/.test(v) || 'Numer musi składać się tylko z cyfr'
                ],
				emailRules: [
                    v => !!v || 'Pole jest wymagane',
					v => /.+@.+\..+/.test(v) || 'Zły format maila'
                ],
				sended: false,
			}
		},

		methods: {
			submit() {
				if (this.$refs.form.validate()) {
					this.sended = true;
                    API.addUser(this.userForm)
						.catch(() => this.sended = false);
				}
			},
			clear() {
				this.userForm = helper.getEmptyUserForm();
				this.$refs.form.reset();
			},
		},

		mounted() {
			API.loadInstitutions()
				.then(institutions => this.institutionsDictionary = institutions);

			API.loadJobStatuses()
				.then(jobStatuses => this.jobStatusesDictionary = jobStatuses);

			API.loadScientificWorks()
				.then(scientificWorks => this.scientificWorksDictionary = scientificWorks);

			API.loadPositionTypes()
				.then(positionTypes => this.positionTypesDictionary = positionTypes);

			API.loadTitles()
				.then(titles => this.titlesDictionary = titles);

			API.loadRoles()
				.then(roles => this.rolesDictionary = roles);
		},
	}
</script>

<style scoped>

</style>
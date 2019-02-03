<template>
    <card title="Użykownicy" text="Lista aktywnych użytkowników">
        <v-data-table :headers="headers" :items="persons">
            <template slot="headerCell" slot-scope="{ header }">
                  <span class="subheading">
                      {{ header.text }}
                  </span>
            </template>

            <template slot="items" slot-scope="{ item }">
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.position }}</td>
                <td align="right">
                    <v-icon class="mr-2" @click="showUser(item.personId)"> person_pin </v-icon>
                    <v-icon class="mr-2" @click="editUser(item.personId)"> edit </v-icon>
                    <v-icon @click="deactivateUser(item.personId)"> delete </v-icon>
                </td>
            </template>
        </v-data-table>

        <template slot="actions">
            <v-spacer></v-spacer>
            <v-btn color="blue darken-2 white--text" v-on:click="createUser">
                Stwórz
            </v-btn>
        </template>
    </card>
</template>

<script>
	import API from '@/api'
	import Card from "@/layout/material/Card";

	export default {
		name: "Users",

		components: {
			Card
		},

		data () {
			return {
				persons: [],
				headers: [
					{ text: 'Imię', align: 'left', value: 'firstName' },
					{ text: 'Nazwisko', align: 'left', value: 'lastName' },
					{ text: 'Email', value: 'email' },
					{ text: 'Stanowisko', value: 'position' },
					{ text: 'Akcje', align: 'right', value: 'name', sortable: false }
				],
			}
		},

		created () {
			this.initialize();
		},

		methods: {
			initialize () {
				API.loadActiveUsers(this)
					.then(users => this.persons = users);
			},
			createUser () {
				this.$router.push('/user/create');
			},
			editUser (id) {
				this.$router.push('/user/edit/' + id);
			},
			showUser (id) {
				this.$router.push('/user/show/' + id);
			},
			deactivateUser (id) {
				API.deactivateUser(id)
					.then(() => this.initialize())
			},
		}
	}
</script>

<style>

</style>
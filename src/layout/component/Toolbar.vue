<template>
    <v-toolbar color="blue" dark app flat prominent >

        <v-toolbar-title>
            <v-btn icon v-on:click="onDrawerButtonClick">
                <v-icon>format_list_bulleted</v-icon>
            </v-btn>
            {{ title }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon v-on:click="showUser">
            <v-icon size="35">person_pin</v-icon>
        </v-btn>

        <v-btn color="blue darken-3" v-on:click="loggout">
            Wyloguj
        </v-btn>
    </v-toolbar>
</template>

<script>
  import API from '@/api';

	export default {
		name: "toolbar",

		data () {
			return {
				title: this.$route.name,
			}
		},

		watch: {
			'$route' (val) {
				this.title = val.name
			},
		},

		methods: {
			loggout() {
				// delete localStorage.token;
				// delete localStorage.role;
				// this.$router.push('/login');
        API.logout();
			},
			showUser() {
				this.$router.push('/user/show');
			},
			onDrawerButtonClick () {
				this.$emit('drawerButtonClick');
			},
		}
	}
</script>

<style scoped>

</style>

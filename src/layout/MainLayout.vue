<template>
    <div id="layout-container">
        <toolbar @drawerButtonClick="hideDrawer"></toolbar>

        <snackbar></snackbar>

        <navigation-drawer :drawer="drawer"></navigation-drawer>

        <v-content>
            <div id="content">
                <v-fade-transition mode="out-in">
                    <router-view />
                </v-fade-transition>
            </div>

            <footer></footer>
        </v-content>
    </div>
</template>

<script>
  import Toolbar from "./component/Toolbar";
	import NavigationDrawer from "./component/NavigationDrawer";
	import Snackbar from "@/layout/component/Notification/Snackbar";

	export default {
		name: 'app',

		components: {
			Snackbar,
			NavigationDrawer,
			Toolbar,
		},

		data() {
			return {
				drawer: true,
			}
		},

		methods: {
			hideDrawer () {
				this.drawer = !this.drawer;
			},
		},
	}
</script>

<style>
    #content {
        height: 100%;
        padding: 10px;
    }
</style>

<template>
    <v-navigation-drawer v-model="drawer" app dark floating persistent width="280">

        <v-layout class="fill-height" tag="v-list" column>
            <v-list-tile avatar>
                <v-list-tile-avatar icon color="blue">
                    <v-icon>fa-box-open</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title class="title">
                    TAIBOX
                </v-list-tile-title>
            </v-list-tile>

            <v-divider/>

            <v-list-tile class="v-list-item" v-for="(item, i) in userNavigationItems" :key="i" :to="item.url" active-class="blue">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title v-text="item.text"/>
            </v-list-tile>

            <!-- <v-divider id="role-divider"/>

            <v-list-tile v-if="showAdminPanel()" class="v-list-item" v-for="(item, i) in adminNavigationItems" :key="'a' + i" :to="item.url" active-class="blue">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title v-text="item.text"/>
            </v-list-tile> -->
        </v-layout>

    </v-navigation-drawer>
</template>

<script>
	import config from '@/configuration'

	export default {
		name: "NavigationDrawer",

		data () {
			return {
				userNavigationItems: config.userNavigation,
				// adminNavigationItems: config.adminNavigation,
                roles: []
			}
		},

		props: {
			drawer: Boolean,
		},

      //   methods: {
			// showAdminPanel() {
			// 	return localStorage.role === "ROLE_ADMIN";
      //       }
      //   }
	}
</script>

<style lang="scss">
    #app-drawer {
        .v-list__tile {
            border-radius: 4px;
        }

        .v-image__image--contain {
            top: 9px;
            height: 60%;
        }
    }
    #role-divider {
        border-bottom: solid gray 2px;
        margin-bottom: 0;
        margin-top: 8px;
    }
</style>

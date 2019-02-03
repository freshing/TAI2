<template>
    <v-snackbar v-model="apiInfo.isVisable" :color="apiInfo.color" top multi-line >
        <v-alert :value="true" :type="apiInfo.type">
            {{ apiInfo.message }}
        </v-alert>

        <v-btn dark flat @click="apiInfo.isVisible = false">
            Zamknij
        </v-btn>
    </v-snackbar>
</template>

<script>
    import snackbarNotification from './snackbarNotification'

	export default {
		name: "NotificationBar",

		data() {
			return {
				apiInfo: snackbarNotification
			}
		},
	}
</script>

<style scoped>

</style>
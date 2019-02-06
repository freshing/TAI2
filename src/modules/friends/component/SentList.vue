<template>
  <v-layout>
    <v-flex sm11>
        <v-toolbar color="blue">
          <v-toolbar-title clipped-left>Wysłane</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="sent in sent" :key="sent.id">
            <v-list-tile-content>
              <v-card>
                {{ sent.username }}
              </v-card>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-flex>
  </v-layout>
</template>

<script>

	export default {
		name: "SentList",

    props: [
      'sent'
    ],


	}
</script>

<style scoped lang="scss">

</style>

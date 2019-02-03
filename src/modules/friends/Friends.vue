<template>
    <v-container>
      <v-layout xs:column>
        <FriendsList/>
        <RequestsList/>
      </v-layout>
      <v-layout justify-center>
        <UsersList/>
      </v-layout>
    </v-container>
</template>

<script>
	import FriendsList from './component/FriendsList'
  import UsersList from './component/UsersList'
  import RequestsList from './component/RequestsList'

  

	export default {
		name: "Friends",
		components: {
			FriendsList: FriendsList,
      UsersList: UsersList,
      RequestsList: RequestsList,
		},
	}
</script>

<style>
</style>

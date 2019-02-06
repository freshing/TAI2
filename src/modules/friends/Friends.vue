<template>
    <v-container>
      <v-layout>
        <FriendsList v-bind:friends="friends"/>
        <UsersList v-bind:users="usersToShow" @update="update" />
      </v-layout>
      <v-layout>
        <RequestsList v-bind:requests="requests" @update="update" />
        <SentList v-bind:sent="sent" />
        <RejectedList v-bind:rejected="rejected" />
      </v-layout>
    </v-container>
</template>

<script>
  import API from '@/api';
	import FriendsList from './component/FriendsList'
  import UsersList from './component/UsersList'
  import RequestsList from './component/RequestsList'
  import RejectedList from './component/RejectedList'
  import SentList from './component/SentList'

	export default {
		name: "Friends",
		components: {
			FriendsList: FriendsList,
      UsersList: UsersList,
      RequestsList: RequestsList,
      RejectedList: RejectedList,
      SentList: SentList,
		},

    data() {
      return {
        current: '',
        friends: [],
        requests: [],
        rejected: [],
        users: [],
        sent: [],
        usersNotToShow: [],
        usersToShow: [],
      }
    },

    methods: {
      update() {
        this.loadAll();
      },

      loadCurrentUser() {
        API.loadCurrentUserInfo().
          then(current => {
            this.current = current;
          })
          .then(() => this.usersNotToShow.push(this.current.id))
          .then(() => this.loadUsers());
      },

      loadFriends() {
				API.loadFriends()
					.then( friends => {
            this.friends = friends;
					})
          .then(() => this.friends.forEach((friend) => this.usersNotToShow.push(friend.id)))
          .then(() => this.loadUsers());
			},

      loadRejected() {
				API.loadRejected()
					.then( rejected => {
            this.rejected = rejected;
					})
          .then(() => this.rejected.forEach((rejected) => this.usersNotToShow.push(rejected.id)))
          .then(() => this.loadUsers());
			},

      loadRequests() {
				API.loadRequests()
					.then( requests => {
            this.requests = requests;
					})
          .then(() => this.requests.forEach((request) => this.usersNotToShow.push(request.id)))
          .then(() => this.loadUsers());
			},

      loadSent() {
				API.loadSent()
					.then( sent => {
            this.sent = sent;
					})
          .then(() => this.sent.forEach((sent) => this.usersNotToShow.push(sent.id)))
          .then(() => this.loadUsers());
			},

      loadUsers() {
				API.loadUsers()
					.then( users => {
            this.users = users;
					}).then(() => {
            this.filterUsers();
            this.sent = this.mapIdToUsername(this.sent);
            this.requests = this.mapIdToUsername(this.requests);
            this.rejected = this.mapIdToUsername(this.rejected);
          });
			},

      filterUsers() {
        this.usersToShow = this.users.filter((user) => {
          return !this.usersNotToShow.includes(user.id);
        });
      },

      mapIdToUsername(list) {
        return list.map(el => {
          return this.users.find(user => user.id == el.id);
        });
      },

      loadAll() {
        this.loadCurrentUser();
        this.loadFriends();
        this.loadRequests();
        this.loadRejected();
        this.loadSent();
      }

    },

    mounted() {
      this.loadAll();
    },

	}
</script>

<style>
</style>

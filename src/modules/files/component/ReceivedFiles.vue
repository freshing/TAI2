<template>
  <v-container>
    <v-data-table
   v-model="selected"
   :headers="headers"
   :items="files"
   :pagination.sync="pagination"

   item-key="name"
   class="elevation-1"
 >
   <template slot="headers" slot-scope="props">
     <tr>
       <th>
         <v-btn icon @click="back()" icon color="blue" flat :disabled="$props['path'] === ''">
           <v-icon>fa-level-up-alt</v-icon>
         </v-btn>
         <!-- <v-checkbox
           :input-value="props.all"
           :indeterminate="props.indeterminate"
           primary
           hide-details
           @click.stop="toggleAll"
         ></v-checkbox> -->
       </th>
       <th
         v-for="header in props.headers"
         :key="header.text"
         :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
         @click="changeSort(header.value)"
       >
         <v-icon small>arrow_upward</v-icon>
         {{ header.text }}
       </th>
     </tr>
   </template>
   <template slot="items" slot-scope="props">
     <tr :active="props.selected" @click="props.selected = !props.selected">
       <td>
         <!-- <v-checkbox
           :input-value="props.selected"
           primary
           hide-details
         ></v-checkbox> -->
       </td>
       <td>{{ props.item.filename }}</td>
       <td class="text-xs-center">{{ props.item.creation_date }}</td>
       <td class="text-xs-center">
         <v-btn @click="download(props.item.name)" icon color="blue" flat v-if=!props.item.is_dir>
           <v-icon>fa-download</v-icon>
         </v-btn>
         <v-btn @click="changePath(props.item.path)" icon color="blue" flat v-if=props.item.is_dir>
           <v-icon>fa-folder-open</v-icon>
         </v-btn>
         <!-- <v-btn @click="deleteItem(props.item.path)" icon color="blue" flat>
           <v-icon>fa-trash</v-icon>
         </v-btn> -->
       </td>
       <!-- <td class="text-xs-center">
         <v-btn @click="share(props.item.path)" icon color="blue" flat>
           <v-icon>fa-share</v-icon>
         </v-btn>
       </td> -->
     </tr>
   </template>
 </v-data-table>
  </v-container>

</template>

<script>
	import API from '@/api';

	export default {
		name: "Files",

    props: [
      'path',
    ],

		data: () => ({
      files: [],
      friends: [],
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [
        {
          text: 'Nazwa',
          align: 'left',
          value: 'name'
        },
        { text: 'Utworzono', value: 'is_dir' },
        { text: 'Akcje'},
        { text: 'Udostępnij'},
      ],
		}),

		methods: {

      // {
      // 	"path": "/katalog1",
      // 	"is_public": false,
      // 	"shared_with": [1]
      // }

      share(path) {
        let props = {
        	path: path,
        	is_public: false,
        	shared_with: this.friends
        }

        API.shareItem(props);
      },

      log(event) {
        console.log("log", event);
      },

      back() {
        let pathArray = this.$props['path'].split('/');
        pathArray.pop();
        let backwardPath = pathArray.join('/');
        this.changePath(backwardPath);
      },

      download(file){
        API.download(file)
      },

      // deleteItem(item){
      //   API.deleteItem(item);
      //
      //   this.changePath(this.$props['path']);
      // },

      loadFiles(path) {
				API.getSharedFiles(path)
					.then( files => {
            this.files = files;
					});

			},

      loadFriends() {
        API.loadFriends().then(friends => this.friends = friends.map(friend => friend.id));
      },

      changePath(path) {
        this.$emit('changePath', path);
      }
		},

		mounted() {
      this.loadFiles(this.$props['path']);
      // this.loadFriends();
		},

	}
</script>

<style scoped>

</style>

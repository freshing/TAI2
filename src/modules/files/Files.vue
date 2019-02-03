<template>
  <v-container>
    <v-data-table
   v-model="selected"
   :headers="headers"
   :items="files"
   :pagination.sync="pagination"
   select-all
   item-key="name"
   class="elevation-1"
 >
   <template slot="headers" slot-scope="props">
     <tr>
       <th>
         <v-checkbox
           :input-value="props.all"
           :indeterminate="props.indeterminate"
           primary
           hide-details
           @click.stop="toggleAll"
         ></v-checkbox>
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
         <v-checkbox
           :input-value="props.selected"
           primary
           hide-details
         ></v-checkbox>
       </td>
       <td>{{ props.item.name }}</td>
       <td class="text-xs-right">{{ props.item.creation_date }}</td>
       <td class="text-xs-right">
         <v-btn @click="log(props.item.name)" icon color="blue" flat>
           <v-icon>fa-download</v-icon>
         </v-btn>
       </td>
       <td class="text-xs-right">
         <v-btn @click="log(props.item.name)" icon color="blue" flat>
           <v-icon>fa-share</v-icon>
         </v-btn>
       </td>
       <!-- <td class="text-xs-right">{{ props.item.protein }}</td> -->
       <!-- <td class="text-xs-right">{{ props.item.iron }}</td> -->
     </tr>
   </template>
 </v-data-table>
  </v-container>

</template>

<script>
	import API from '@/api';

	export default {
		name: "Files",

		data: () => ({
      files: [],
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
        { text: 'Pobierz'},
        { text: 'Udostępnij'},
      ],
		}),

		methods: {
      log(event) {
        console.log("log", event);
      },

      loadFiles() {
				API.getFiles()
					.then( files => {
            this.files = files;
					});
			},
		},

		mounted() {
      this.loadFiles();
		},

	}
</script>

<style scoped>

</style>

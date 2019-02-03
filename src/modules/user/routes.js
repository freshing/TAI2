import User from "./User";
import ShowUser from "./pages/ShowUser";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import UsersList from "./pages/UsersList";

export default [{
	path: '/user',
	name: 'User',
	component: User,
	children: [
		{
			path: 'show/:id?',
			name: 'Użytkownik',
			component: ShowUser
		},
		{
			path: 'create',
			name: 'Stwórz Użytkownika',
			component: CreateUser,
			meta: { adminAuth: true }
		},
		{
			path: 'edit/',
			name: 'Edytuj Użytkownika',
			component: EditUser
		},
		{
			path: 'list',
			name: 'Lista Użytkowników',
			component: UsersList,
			meta: { adminAuth: true }
		},
	]
}]

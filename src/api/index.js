import friendsApi from "./friends/friendsApi"
import loginApi from "./login/loginApi"
import userApi from "./user/userApi"
import usersApi from "./user/usersApi"
import filesApi from "./files/filesApi"

export default {
	...friendsApi,
	...loginApi,
	...userApi,
	...usersApi,
	...filesApi,
}

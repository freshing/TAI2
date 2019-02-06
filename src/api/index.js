import friendsApi from "./friends/friendsApi"
import loginApi from "./login/loginApi"
import userApi from "./user/userApi"
import filesApi from "./files/filesApi"

export default {
	...friendsApi,
	...loginApi,
	...userApi,
	...filesApi,
}

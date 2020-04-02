import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/charity/user';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUsername(username) {
        return axios.get(""+USER_API_BASE_URL + '/' + username);
    } 

    fetchUserById(id) {
        return axios.post(USER_API_BASE_URL + '/' + id);
    }

    fetchUser() {
        return axios.post(USER_API_BASE_URL)}

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(username) {
        return axios.put(""+USER_API_BASE_URL, username);
    } 

}

export default new ApiService();


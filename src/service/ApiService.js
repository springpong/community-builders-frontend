import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081/api/charity';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL +'/user/{username}');
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/user/{Id}' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL +'/user', user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();


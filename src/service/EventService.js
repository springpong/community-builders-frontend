import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081/api/charity/events';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUsername(username) {
        return axios.get(USER_API_BASE_URL + '/' + username);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(events) {
        return axios.post(""+USER_API_BASE_URL, events);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    } 

}

export default new ApiService();


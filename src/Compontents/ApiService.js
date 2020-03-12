import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081/api/charity';

class ApiService {

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    fetchUserByUsername(username) {
        return axios.get(USER_API_BASE_URL + '/' + username);
    }

}

export default new ApiService();
import axios from 'axios';

const EVENT_API_BASE_URL = 'http://localhost:8080/api/charity/events';

class EventService {

    fetchEvents() {
        return axios.get(EVENT_API_BASE_URL);
    }

    fetchUsername(username) {
        return axios.get(EVENT_API_BASE_URL + '/' + username);
    } 

    deleteUser(eventsId) {
        return axios.delete(EVENT_API_BASE_URL + '/' + eventsId);
    }

    addEvents(events) {
        return axios.post(""+EVENT_API_BASE_URL, events);
    }

    editUser(events) {
        return axios.put(EVENT_API_BASE_URL + '/' + events.id, events);
    } 
}

export default new EventService();


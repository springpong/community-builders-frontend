import axios from 'axios';

const EVENT_API_BASE_URL = 'http://localhost:8081/api/charity/events';

class EventService {

    fetchEvents() {
        return axios.get(EVENT_API_BASE_URL);
    }

    fetchEventname(eventName) {
        return axios.get(Event_API_BASE_URL + '/' + eventName);
    }

    deleteEvents(eventName) {
        return axios.delete(EVENT_API_BASE_URL + '/' + eventName);
    }

    addEvents(events) {
        return axios.post(""+EVENT_API_BASE_URL, events);
    }

    editEvents(events) {
        return axios.put(EVENT_API_BASE_URL + '/' + events.id, events);
    } 

}

export default new EventService();


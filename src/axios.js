import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://restaurantreact-c8bb4-default-rtdb.firebaseio.com'
})

export default instance
import axios from "axios"

const mykey = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    params: {
        key: 'AIzaSyAr-fsGAPfCsDNX727rTyBQusa38Ui5WiE'
    }
})

export default mykey
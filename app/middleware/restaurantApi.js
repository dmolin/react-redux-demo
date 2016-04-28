import axios from 'axios'

const api = axios.create({
  baseURL: 'http://public.je-apis.com/restaurants',
  timeout: 10000,
  headers: {
    'Accept-Tenant': 'uk',
    'Accept-Version': '2.0',
    'Accept-Language': 'en-GB',
    //'Accept': 'application/json',
    'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI='
  }
})

export default api

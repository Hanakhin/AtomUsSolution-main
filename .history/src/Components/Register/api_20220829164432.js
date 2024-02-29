import axios from "axios";
Access-Control-Allow-Origin: *

export default axios.create({
    baseURL:`http://localhost:3000/users`,
})

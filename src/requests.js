import axios from "axios"
let baseURL = "http://localhost:3000"
let loginEndpoint = "/auth/login"
async function sendLogin (data,base = baseURL,Endpoint = loginEndpoint){
    let loginEndpoint = `${baseURL}${loginEndpoint}`
    return axios.post(loginEndpoint,data)
}

function sendSignUp (data){
    let signupEndpoint = "http://localhost:3000/auth/signup"
    return axios.post(signupEndpoint,data)
}

export {sendLogin}
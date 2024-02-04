import axios from "axios"

async function sendLogin (data,baseURL,endpoint){
    let fullURL = `${baseURL}${endpoint}`
    return axios.post(fullURL,data)
}

function sendSignUp (data){
    let signupEndpoint = "http://localhost:3000/auth/signup"
    return axios.post(signupEndpoint,data)
}

export {sendLogin}
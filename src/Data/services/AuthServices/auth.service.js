import {get, post, patch, del, getAuthHeaders} from '../common.services' ;

export async function signinService(payload){
    console.log('payload: ', payload);
    payload = {
        "email" : payload.username,
        "password" : payload.password
    } ;
    const data =  await post("http://localhost:8080/api/login", payload,{}) ;
    return data ;
}
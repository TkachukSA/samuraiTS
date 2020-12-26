import axios, {AxiosResponse} from "axios";
import {ResponseUsersType} from "../components/users/UsersContainer";



const instance= axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "7866738e-c5bf-440e-864d-4cc467150876"
    }
})

/*export const getUsers =(currentPage: number, pageSize:number)=> {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    )
        .then((response: AxiosResponse<ResponseUsersType>) => {
            return response.data
        })
}*/
export const userApi = {
    getUsers(currentPage: number, pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then((response: AxiosResponse<ResponseUsersType>) => {
                return response.data
            })
    }
}
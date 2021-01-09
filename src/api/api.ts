import axios from "axios";




const instance= axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "7866738e-c5bf-440e-864d-4cc467150876"
    }
})


export const userApi = {
    getUsers(currentPage: number, pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
    },
    getUnFollow(id: number){
     return  instance.delete(`follow/${id}`)

    },
    getFollow(id: number){
        return  instance.post(`follow/${id}`)

    },
    getProfile(userId: number){
        return  instance.get(`profile/` + userId)
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
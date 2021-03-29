import axios from "axios";

import ss from '../assets/images/user.png'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "7866738e-c5bf-440e-864d-4cc467150876"
    }
})


export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
    },
    getUnFollow(id: number) {
        return instance.delete(`follow/${id}`)

    },
    getFollow(id: number) {
        return instance.post(`follow/${id}`)

    },
    getProfile(userId: string | undefined) {
        console.warn('Obsolete method')
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId: string | undefined) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status},);
    },
    saveProfile(profile: any) {
        return instance.put(`profile`, profile,);
    },
    updatePhotos(image: string) {
        const formData = new FormData()
        formData.append("image", image)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': `multipart/form-data`,
            },
        })
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
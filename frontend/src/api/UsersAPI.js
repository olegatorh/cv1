import {instance} from "./api";

export const UsersAPI = {
    getUsers(){
        return instance.get(`Users`).then(response => response.data)
    },
    addUser(user){
        return instance.post(`Users/`, user).then(response => response)
    },
    deleteUser(userId){
        return instance.delete(`Users/${userId}`).then(response => response)
    },
    updateUser(user){
        return instance.put(`Users/${user.id}/`, {Email: user.Email, Group: user.Group, Admin: user.Admin}).then(response => response.data)
    }
}



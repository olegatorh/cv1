import {instance} from "./api";

export const GroupsAPI = {
    getGroups() {
        return instance.get(`Groups/`).then(response => response.data)
    },
    addGroup(group) {
        return instance.post(`Groups/`, group).then(response => response.data)
    },
    deleteGroup(groupId) {
        return instance.delete(`Groups/${groupId}`).catch(error =>
            error.response.status)
    },
    updateGroup(group) {
        let status
        return instance.put(`Groups/${group.id}/`, group).catch(error =>
            status = error.response.status).then(
            response => status === 500 ? 500 : response.data
        )
    }
}

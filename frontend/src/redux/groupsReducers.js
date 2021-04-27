import {GroupsAPI} from "../api/GroupsAPI";

const initialState = {
    groups: []
}

const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_GROUP": {
            let newGroup = {
                id: action.payload.id,
                Name: action.payload.Name,
                Data_Analytics: action.payload.Data_Analytics,
                Services_Analytics: action.payload.Services_Analytics,
                Voice_Analytics: action.payload.Voice_Analytics,
                Queue_Stats: action.payload.Queue_Stats,
                Voice_Stats: action.payload.Voice_Stats,
                Video: action.payload.Video,
                Smart_Access: action.payload.Smart_Access,
                Diagrams: action.payload.Diagrams,
            }
            return {
                ...state, groups: [...state.groups, newGroup]
            }
        }
        case "GET_GROUPS": {
            return {
                ...state, groups: action.payload
            }
        }
        case "DELETE_GROUP": {
            return {
                ...state, groups: state.groups.filter(group => group.id !== action.payload)
            }
        }
        case "UPDATE_GROUP": {
            let updateGroup = state.groups.map(group => group.id === action.payload.id ? action.payload : group)
            return {
                ...state, groups: updateGroup
            }
        }
        default:
            return state
    }
}


export const actions = {
    addGroupActionCreator: (payload) => ({type: "ADD_NEW_GROUP", payload}),
    getGroupsActionCreator: (payload) => ({type: "GET_GROUPS", payload}),
    updateGroupsActionCreator: (payload) => ({type: "UPDATE_GROUP", payload}),
    deleteGroupActionCreator: (payload) => ({type: "DELETE_GROUP", payload})
}

export const deleteGroup = (id) => async (dispatch) => {
    let data = await GroupsAPI.deleteGroup(id)
    if (data === 500){
      alert("u cant delete because group have users")
    }
    else {
        dispatch(actions.deleteGroupActionCreator(id))
    }
}

export const addGroup = (newPost) => async (dispatch) => {
    let data = await GroupsAPI.addGroup(newPost)
    dispatch(actions.addGroupActionCreator(data))
}

export const getGroups = () => async (dispatch) => {
    let data = await GroupsAPI.getGroups()
    dispatch(actions.getGroupsActionCreator(data))
}

export const updateGroup = (updatedGroup) => async (dispatch) => {
    let data = await GroupsAPI.updateGroup(updatedGroup)
    data === 500
        ? alert("U cant rename Group with Users")
        : dispatch(actions.updateGroupsActionCreator(data))
}


export default groupsReducer

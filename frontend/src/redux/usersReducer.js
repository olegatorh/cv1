import {UsersAPI} from "../api/UsersAPI";

const initialState = {
    users: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_USER": {
            let newUser = {
                id: action.payload.data.id,
                Email: action.payload.data.Email,
                Group: action.payload.data.Group,
                Admin: action.payload.data.Admin,
            }
            return {
                ...state, users: [...state.users, newUser]
            }
        }
        case "GET_USERS": {
            return {
                ...state, users: action.payload
            }
        }
        case "DELETE_USER": {
            return {
                ...state, users: state.users.filter(user => user.id !== action.payload)
            }
        }
        case "UPDATE_USER": {
            let updatedUsers = state.users.map(user => user.id === action.payload.id ? action.payload : user)
            return {
                ...state, users: updatedUsers
            }

        }
        default:
            return state
    }
}


export const actions = {
    addUserActionCreator: (payload) => ({type: "ADD_NEW_USER", payload}),
    getUsersActionCreator: (payload) => ({type: "GET_USERS", payload}),
    deleteUserActionCreator: (payload) => ({type: "DELETE_USER", payload}),
    updateUserActionCreator: (payload) => ({type: "UPDATE_USER", payload})
}

export const deleteUser = (id) => {
    return (dispatch) => {
        UsersAPI.deleteUser(id).then(
            dispatch(actions.deleteUserActionCreator(id))
        )
    }
}

export const addUser = (newPost) => async (dispatch) => {
    let data = await UsersAPI.addUser(newPost)
    dispatch(actions.addUserActionCreator(data))
}

export const getUsers = () => async (dispatch) => {
    let data = await UsersAPI.getUsers()
    console.log(data)
    dispatch(actions.getUsersActionCreator(data))
}

export const updateUser = (updatedUser) => async (dispatch) => {
    let data = await UsersAPI.updateUser(updatedUser)
    dispatch(actions.updateUserActionCreator(data))
}

export default usersReducer

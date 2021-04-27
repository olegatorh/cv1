import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";
import {addUser, deleteUser, getUsers, updateUser} from "../../redux/usersReducer";
import {getGroups} from "../../redux/groupsReducers";


const UsersContainer = (props) => {
    if (!props.users.length) {
        props.getUsers()
    }

    return (
        <Users
            users={props.users}
            getGroups={props.getGroups}
            addUser={props.addUser}
            deleteUser={props.deleteUser}
            getUsers={props.getUsers}
            groups={props.groups}
            updateUser={props.updateUser}
        />
    )
}


const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        groups: state.GroupsPage.groups
    }
}

const mapDispatchToProps = {
    addUser: addUser,
    getUsers: getUsers,
    deleteUser: deleteUser,
    getGroups: getGroups,
    updateUser: updateUser


}

export default compose(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))
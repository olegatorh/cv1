import {connect} from "react-redux";
import {compose} from "redux";
import {addGroup, deleteGroup, getGroups, updateGroup} from "../../redux/groupsReducers";
import Groups from "./Groups";


const GroupContainer = (props) => {
    if (!props.groups.length) {
        props.getGroups()
    }


    return (
        <Groups
            groups={props.groups}
            addGroup={props.addGroup}
            deleteGroup={props.deleteGroup}
            getGroups={props.getGroups}
            updateGroup={props.updateGroup}
        />
    )
}


const mapStateToProps = (state) => {
    return {
        groups: state.GroupsPage.groups
    }
}

const mapDispatchToProps = {
    addGroup: addGroup,
    updateGroup: updateGroup,
    getGroups: getGroups,
    deleteGroup: deleteGroup

}

export default compose(connect(mapStateToProps, mapDispatchToProps)(GroupContainer))
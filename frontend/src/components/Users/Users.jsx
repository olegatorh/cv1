import {
    Button, ButtonGroup, Checkbox, Paper, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow
} from "@material-ui/core";
import UserForm from "./UserForm";
import UpdateUserForm from "./UpdateUserForm";


const Users = (props) => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Group</TableCell>
                            <TableCell align="center">Admin</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...props.users].map((user, index) =>
                            <TableRow key={index}>
                                <TableCell style={{paddingTop: 25}} component="th" scope="row">
                                    {user.id}
                                </TableCell>
                                <TableCell style={{paddingTop: 25}} align="center">{user.Email}</TableCell>
                                <TableCell style={{paddingTop: 25}} align="center">{user.Group}</TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={user.Admin} inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <ButtonGroup disableElevation variant="contained" color="primary">
                                        <Button onClick={() => props.deleteUser(user.id)}>Del</Button>
                                        <Button>
                                            <UpdateUserForm updateUser={props.updateUser} getGroups={props.getGroups}
                                                            getUsers={props.getUsers} user={user}
                                                            groups={props.groups}/>
                                        </Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button disableRipple={false} style={{marginTop: 20}} title={"click on text :)"} variant="contained"
                    color="primary"
                    justifycontent="center"
                    children={<UserForm groups={props.groups} addUser={props.addUser} getGroups={props.getGroups}/>}
            />
        </div>
    )
}

export default Users

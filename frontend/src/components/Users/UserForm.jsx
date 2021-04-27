import {Checkbox, FormControlLabel, FormGroup, TextField} from "@material-ui/core";
import React, {useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

const UserForm = (props) => {
    const [open, setOpen] = useState(false);

    const [email, setEmail] = useState("")
    const [group, setGroup] = useState("")
    const [admin, setAdmin] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const submitHandler = (event) => {
        event.preventDefault()
        const newUser = {
            "Email": email,
            "Group": group,
            "Admin": admin
        }
        if (email) {
            props.addUser(newUser)
            handleClose()
        } else alert("write Email")

        setEmail("")
        setGroup("")
        setAdmin(false)
    }

    return (
        <>
            <span onClick={handleClickOpen}>Add User</span>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Group</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <TextField style={{marginBottom: 10}} label="Email" value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   helperText="Write your Email" noValidate autoComplete="off"/>
                        <TextField
                            id="standard-select-currency-native"
                            select
                            label="No group"
                            value={group}
                            style={{marginBottom: 10}}
                            onClick={() => props.getGroups()}
                            onChange={(event) => setGroup(event.target.value)}
                            SelectProps={{
                                native: true,

                            }}
                            helperText="select Group please">
                            <option value={""}>{""}</option>
                            {props.groups.map((group, index) => <option key={index}>
                                {group.Name}
                            </option>)}

                        </TextField>
                        {group.length ? <FormControlLabel
                            style={{color: "rgba(0, 0, 0, 0.54)"}}
                            control={
                                <Checkbox
                                    checked={admin}
                                    onChange={() => setAdmin(!admin)}
                                    name="checkedB"
                                    color="primary"
                                />}
                            label="Admin"
                        /> : null}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <input onClick={handleClose} color="primary" type={"button"} value={"Cancel"}/>
                    <input color="primary" type={"submit"} onClick={submitHandler} value={"Submit"}/>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default UserForm
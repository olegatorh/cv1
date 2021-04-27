import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useState} from "react";
import {Checkbox, FormControlLabel} from "@material-ui/core";


export default function UpdateUserForm(props) {
    const [open, setOpen] = useState(false);
    const [Email, setEmail] = useState('');
    const [Group, setGroup] = useState(props.user.Group);
    const [Admin, setAdmin] = useState(props.user.Admin);

    const submitValue = () => {
        const updatedUser = {
            "id": props.user.id,
            'Email': !Email.length ? props.user.Email : Email,
            'Group': Group,
            'Admin': Admin
        }
        if (updatedUser === props.user) {
            handleClose()
        } else {
            props.updateUser(updatedUser)
            handleClose()
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
        props.getGroups()
        props.getUsers()
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <span onClick={handleClickOpen}>upd</span>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id={"email"}
                        label={` Email: ${props.user.Email}`}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        fullWidth
                    />
                    <TextField
                        id="standard-select-currency-native"
                        fullWidth
                        select
                        value={Group}
                        style={{marginTop: 15}}
                        onChange={(event) => setGroup(event.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="select Group please">
                        <option aria-label="None" value={""}>{""}</option>
                        {props.groups.map((group, index) => <option key={index}>
                            {group.Name}
                        </option>)}

                    </TextField>
                    {Group ? <FormControlLabel
                        style={{paddingTop: 15, paddingLeft: 20, color: "rgba(0, 0, 0, 0.54)"}}
                        control={
                            <Checkbox
                                checked={Admin}
                                onChange={() => setAdmin(!Admin)}
                                name="checkedB"
                                color="primary"
                            />}
                        label="Admin"
                    /> : null}
                </DialogContent>
                <DialogActions>
                    <input onClick={handleClose} color="primary" type={"button"} value={"Cancel"}/>
                    <input color="primary" type={"submit"} onClick={submitValue} value={"Update"}/>
                </DialogActions>
            </Dialog>
        </div>
    );
}
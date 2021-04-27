import React, {useState} from "react";
import {Checkbox, Dialog, FormControlLabel, FormGroup} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

export default function UpdateGroupFrom(props) {
    const [open, setOpen] = useState(false);
    const [group, setGroup] = useState(props.group);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitHandler = () => {
        props.updateGroup(group)
        setGroup(props.group);
        handleClose()
    }

    return (
        <div>
            <span onClick={handleClickOpen}>upd</span>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Group</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label={` Group: ${group.Name}`}
                        name={"Name"}
                        onChange={e => setGroup({...group, [e.target.name]: e.target.value})}
                        fullWidth
                    />
                    <FormGroup>
                        {Object.entries(group).slice(2).map((value, index) => <FormControlLabel
                            key={index}
                            control={
                                <Checkbox name={value[0]}
                                          checked={value[1]}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label={value[0]}
                        />)}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <input onClick={handleClose} color="primary" type={"button"} value={"Cancel"}/>
                    <input color="primary" type={"submit"} onClick={submitHandler} value={"Update"}/>
                </DialogActions>
            </Dialog>
        </div>
    )
}
import {useState} from "react";
import React from "react"
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

export const GroupForm = (props) => {
    const [open, setOpen] = useState(false);
    const [group, setGroup] = useState()

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const submitHandler = () => {
        let newGroup
        if (group && group.Name) {
            newGroup = {
                Name: group.Name,
                Data_Analytics: group.Data_Analytics ? group.Data_Analytics : false,
                Services_Analytics: group.Services_Analytics ? group.Services_Analytics : false,
                Voice_Analytics: group.Voice_Analytics ? group.Voice_Analytics : false,
                Queue_Stats: group.Queue_Stats ? group.Queue_Stats : false,
                Voice_Stats: group.Voice_Stats ? group.Voice_Stats : false,
                Video: group.Video ? group.Video : false,
                Smart_Access: group.Smart_Access ? group.Smart_Access : false,
                Diagrams: group.Diagrams ? group.Diagrams : false
            }
            props.addGroup(newGroup)
            setGroup()
            handleClose()
        } else alert("write group Name please")

    };


    return (
        <>
            <span onClick={handleClickOpen}>Add Group</span>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Group</DialogTitle>
                <DialogContent>
                    <TextField label="Group" name={"Name"} helperText="Write your Group" noValidate
                               autoComplete="off"
                               onChange={(e) => setGroup({
                                   ...group,
                                   [e.target.name]: e.target.value ? e.target.value : ""
                               })}/>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox name={"Data_Analytics"}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label="Data Analytics"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name={"Services_Analytics"}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label="Services Analytics"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name={"Voice_Analytics"}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label="Voice Analytics"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name={"Queue_Stats"}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label="Queue Stats"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name={"Voice_Stats"}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label="Voice Stats"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name={"Video"}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label="Video"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name={"Smart_Access"}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label="Smart Access"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name={"Diagrams"}
                                          onChange={(e) => setGroup({...group, [e.target.name]: e.target.checked})}
                                />}
                            label="Diagrams"
                        />
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
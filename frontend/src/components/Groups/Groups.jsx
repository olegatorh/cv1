import {
    Button,
    ButtonGroup,
    Checkbox,
    Paper, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import UpdateGroupFrom from "./UpdateGroupFrom";
import {GroupForm} from "./GroupForm";


const Groups = (props) => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Data Analytics</TableCell>
                            <TableCell align="center">Services Analytics</TableCell>
                            <TableCell align="center">Voice Analytics</TableCell>
                            <TableCell align="center">Queue Stats</TableCell>
                            <TableCell align="center">Voice Stats</TableCell>
                            <TableCell align="center">Video</TableCell>
                            <TableCell align="center">Smart Access</TableCell>
                            <TableCell align="center">Diagrams</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...props.groups].map((group, index) =>
                            <TableRow key={index}>
                                <TableCell style={{paddingTop: 25}} component="th" scope="row">
                                    {group.id}
                                </TableCell>
                                <TableCell style={{paddingTop: 25}} align="center">{group.Name}</TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={group.Data_Analytics}
                                              inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={group.Services_Analytics}
                                              inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={group.Voice_Analytics}
                                              inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={group.Queue_Stats}
                                              inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={group.Voice_Stats}
                                              inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={group.Video} inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={group.Smart_Access}
                                              inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={group.Diagrams}
                                              inputProps={{'aria-label': 'secondary checkbox'}}/>
                                </TableCell>
                                <TableCell align="center">
                                    <ButtonGroup disableElevation variant="contained" color="primary">
                                        <Button onClick={() => props.deleteGroup(group.id)}
                                                title={"click on text :)"} children={"Del"}/>
                                        <Button
                                            children={<UpdateGroupFrom group={group} updateGroup={props.updateGroup}/>}
                                            title={"click on text :)"}/>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button disableRipple={false} style={{marginTop: 20}} title={"click on text :)"} variant="contained"
                    color="primary"
                    justifycontent="center"
                    children={<GroupForm addGroup={props.addGroup}/>}
            />
        </div>
    )
}

export default Groups

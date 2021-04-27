import React from "react"
import './App.css';
import {AppBar, Container, Tab} from "@material-ui/core";
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import {TabList} from "@material-ui/lab";
import UsersContainer from "./components/Users/usersContainer";
import GroupContainer from "./components/Groups/groupContainer";


function App() {

    const [value, setValue] = React.useState('Users');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl">
            <TabContext value={value}>
                <AppBar position="static">
                    <TabList onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Users" value="Users"/>
                        <Tab label="Groups" value="Groups"/>
                    </TabList>
                </AppBar>
                <TabPanel value="Users">
                    <UsersContainer/>
                </TabPanel>
                <TabPanel value="Groups">
                    <GroupContainer/>
                </TabPanel>
            </TabContext>
        </Container>
    )
}

export default App;

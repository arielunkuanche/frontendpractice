import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import ToDoListApp from './ToDoListApp';


function BasicTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} position="static">
            <TabList textColor="secondary" indicatorColor="secondary" onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="HOME" value="1" />
                <Tab label="ADD TODOS" value="2" />
            </TabList>
            </Box>
            <TabPanel value="1">
                This is the home page!
            </TabPanel>
            <TabPanel value="2">
                <ToDoListApp />
            </TabPanel>
        </TabContext>
    </Box>
    );
}

export default BasicTabs;
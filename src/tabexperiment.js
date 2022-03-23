import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ span: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };


export default function BasicTabs() {
  const [tabvalue, setTabValue] = React.useState(0);

  const tabHandleChange = (event, newValue) => {setTabValue(newValue);};

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabvalue} onChange={tabHandleChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two"/>
        </Tabs>
      </Box>
      <TabPanel value={tabvalue} index={0}>
        <Box>
            <div>
                lol LIBRARIES_AND_DEMO
            </div>
        </Box>
      </TabPanel>
      <TabPanel value={tabvalue} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
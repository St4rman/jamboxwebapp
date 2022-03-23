// import * as React from 'react';
import React, {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import axios from 'axios';


const categorylist =  [
    'APPLICATION',
    'ANDROID_WEAR',
    'ART_AND_DESIGN',
    'AUTO_AND_VEHICLES',
    'BEAUTY',
    'BOOKS_AND_REFERENCE',
    'BUSINESS',
    'COMICS',
    'COMMUNICATION',
    'DATING',
    'EDUCATION',
    'ENTERTAINMENT',
    'EVENTS',
    'FINANCE',
    'FOOD_AND_DRINK',
    'HEALTH_AND_FITNESS',
    'HOUSE_AND_HOME',
    'LIBRARIES_AND_DEMO',
    'LIFESTYLE',
    'MAPS_AND_NAVIGATION',
    'MEDICAL',
    'MUSIC_AND_AUDIO',
    'NEWS_AND_MAGAZINES',
    'PARENTING',
    'PERSONALIZATION',
    'PHOTOGRAPHY',
    'PRODUCTIVITY',
    'SHOPPING',
    'SOCIAL',
    'SPORTS',
    'TOOLS',
    'TRAVEL_AND_LOCAL',
    'VIDEO_PLAYERS',
    'WATCH_FACE',
    'WEATHER',
    'GAME',
    'GAME_ACTION',
    'GAME_ADVENTURE',
    'GAME_ARCADE',
    'GAME_BOARD',
    'GAME_CARD',
    'GAME_CASINO',
    'GAME_CASUAL',
    'GAME_EDUCATIONAL',
    'GAME_MUSIC',
    'GAME_PUZZLE',
    'GAME_RACING',
    'GAME_ROLE_PLAYING',
    'GAME_SIMULATION',
    'GAME_SPORTS',
    'GAME_STRATEGY',
    'GAME_TRIVIA',
    'GAME_WORD',
    'FAMILY'
]

const collectionlist = [
    'topselling_free',
    'topselling_paid',
    'topselling_new_free',
    'topselling_new_paid',
    'topgrossing',
    'movers_shakers',
    'topselling_free_games',
    'topselling_paid_games',
    'topselling_grossing_games'
]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "#e0e0e0",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


{/* <summary>
    Class for the tab panels that pop when u click the tab
</summary> */}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'} variant={'body2'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

{/* <summary>
    Main function that returns the table
</summary> */}


export default function MainTable() {
  
    const [rows, setRows] = useState([])

    const [filter, setFilter] = useState([]);
    const handleChange = e => setFilter(e.target.value)

    const [category, setCategory] = useState([]);
    const categoryChange = e => setCategory(e.target.value)

    const [num, setNum] = useState([]);
    const numChange = e => setNum(e.target.value)

    const [seacrhstr, setSeacrhstr] = useState([]);
    const stringChange = e => setSeacrhstr(e.target.value);

    const [tabvalue, setTabValue] = React.useState(0);
    const tabHandleChange = (event, newValue) => {setTabValue(newValue);};

    const base = `http://18.222.213.91:4000/data/`

    const seacrhapiurl = `http://18.222.213.91:4000/data/search?search=${seacrhstr}&key=!jambox$123&format=json`
    const searchdownload = `http://18.222.213.91:4000/data/search?search=${seacrhstr}&key=!jambox$123`

    function SearchApiFire(){

        console.log(seacrhapiurl);

        axios.get(seacrhapiurl)
            .then(res =>{
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const listdownload = `${base}list?collection=${filter}&category=${category}&num=${num}&key=!jambox$123`
    const finalapi = `${base}list?collection=${filter}&category=${category}&num=${num}&key=!jambox$123&format=json`

    function ListApiFire(){


        console.log(finalapi)

        axios.get(finalapi)
            .then(res =>{
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

   
  
    return (
    <>

    <Box>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
                <Tabs value={tabvalue} onChange={tabHandleChange} aria-label="basic tabs example">
                    <Tab icon={<ManageSearchIcon/>} label="Search" iconPosition="start" />
                    <Tab icon={<TuneIcon/>} label="List"  iconPosition="start"/>
                </Tabs>
        </Box>

        <TabPanel value={tabvalue} index={0}>
            <Box
                sx={{
                    height: "100%",
                }}
            >

            
            <Stack spacing={5} direction="row">
                <Box sx = {{ minWidth: '85%', minHeight: "100%"}}>
                <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label ="Search...." 
                        variant="standard" 
                        onChange={stringChange}
                    />
                </Box>
                <IconButton onClick= {SearchApiFire} variant="contained"><SearchRoundedIcon/></IconButton>
                <IconButton href={searchdownload} variant="contained"><DownloadRoundedIcon/></IconButton>
            </Stack>
            </Box>



        </TabPanel>

        <TabPanel value={tabvalue} index={1}>
            <Box
                sx={{height: "100%"}}
            >

            
            <Stack spacing={5} direction="row">
                <Box sx={{ minWidth: "30%" }}>
                    <FormControl fullWidth>
                        <InputLabel>Collections </InputLabel>
                            <Select
                                defaultValue={'topgrossing'} 
                                onChange={handleChange}
                                label= "Collections"
                            >
                                {collectionlist.map((collectionName)=>
                                <MenuItem value = {collectionName}>{collectionName}</MenuItem>
                                )}
                            </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: "30%" }}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            defaultValue={'GAME'} 
                            onChange={categoryChange}
                            label= "Category"
                        >
                            {categorylist.map((categoryname)=> 
                            <MenuItem value={categoryname}>{categoryname}</MenuItem>)}
                    </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: "20%"}}>
                    <TextField 
                        id="outlined-basic" 
                        label ="number" 
                        type="number"
                        variant="outlined" 
                        onChange={numChange}
                    />
                </Box>
               
                <IconButton  onClick={ListApiFire} variant="contained"><SearchRoundedIcon/></IconButton>
                <IconButton  href={listdownload} variant="contained"><DownloadRoundedIcon/></IconButton>
                
            </Stack>
            </Box>
        </TabPanel>

        </Box>
    </Box>

        

        {/* 
        <summary>
        Table container with all the relevant table corresponding to json
        </summary> 
        */}
        <Box sx={{
            color: "#fdffe0",
            margin: 2.5
            
            }}>
                   

        <Paper sx={{overflow: 'hidden'}}>

        <TableContainer sx={{maxHeight: 500}} component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">installs</TableCell>
                <TableCell align="right">min</TableCell>
                <TableCell align="right">max</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">developer</TableCell>
                <TableCell align="right">developerId</TableCell>
                <TableCell align="right">DevEmails</TableCell>
                <TableCell align="right">genre</TableCell>
                <TableCell align="right">genreID</TableCell>
                <TableCell align="right">released</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                < StyledTableRow 
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell align="right">{row.installs}</TableCell>
                <TableCell align="right">{row.minInstalls}</TableCell>
                <TableCell align="right">{row.maxInstalls}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">{row.developer}</TableCell>
                <TableCell align="right">{row.developerId}</TableCell>
                <TableCell align="right">{row.developerEmail}</TableCell>
                <TableCell align="right">{row.genre}</TableCell>
                <TableCell align="right">{row.genreId}</TableCell>
                <TableCell align="right">{row.released}</TableCell>
                </ StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </Paper>
             
        </Box>
   
    
    </>
    
  );
}

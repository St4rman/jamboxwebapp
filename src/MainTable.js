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
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from "@mui/system";


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

export default function MainTable() {
  
    const [rows, setRows] = useState([])

    const [filter, setFilter] = useState([]);
    const handleChange = e => setFilter(e.target.value)

    const [category, setCategory] = useState([]);
    const categoryChange = e => setCategory(e.target.value)

    function ApiFire(){


        const finalapi = `http://18.222.213.91:4000/data/list?collection=${filter}&category=${category}&num=2&key=!jambox$123&format=json`;

        console.log("button pressed")
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
        <Stack spacing={10} direction="row">
        <Box sx={{ minWidth: 500 }}>
            <FormControl fullWidth>
                <InputLabel>Filter</InputLabel>
                <Select
                defaultValue={'topgrossing'} 
                onChange={handleChange}
                label= "Filter"
                >
                    {collectionlist.map((collectionName)=>
                        <MenuItem value = {collectionName}>{collectionName}</MenuItem>
                    )}
            </Select>
        </FormControl>
        </Box>

        <Box sx={{ minWidth: 500 }}>
            <FormControl fullWidth>
                <InputLabel>Filter</InputLabel>
                <Select
                defaultValue={'topgrossing'} 
                onChange={categoryChange}
                label= "Filter"
                >
                    {categorylist.map((categoryname)=> 
                    <MenuItem value={categoryname}>{categoryname}</MenuItem>)}
            </Select>
        </FormControl>
        </Box>
        
        <Button onClick={ApiFire}variant="contained">go</Button>
        </Stack>

        {/* 
        <summary>
        Table container with all the relevant table corresponding to json
        </summary> 
        */}

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                <TableRow
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
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

    
    </>
    
  );
}

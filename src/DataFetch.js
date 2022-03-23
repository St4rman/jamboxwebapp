import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from "@mui/system";

import axios from 'axios';

export default function DataFetch(){
    const [rows, setRows] = useState([])

    const [filter, setFilter] = useState([]);
    const handleChange = e => setFilter(e.target.value)

    function ApiFire(){

        const finalapi = `http://18.222.213.91:4000/data/list?collection=${filter}&category=GAME_ADVENTURE&num=2&key=!jambox$123&format=json`;

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
    return(

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
                <MenuItem value={'topselling_free'}>Top Selling Free</MenuItem>
                <MenuItem value={'topselling_paid'}>Top Selling Paid</MenuItem>
                <MenuItem value={'topselling_new_free'}>Top Selling New Free</MenuItem>
                <MenuItem value={'topselling_new_paid'}>Top Selling New Paid</MenuItem>
                <MenuItem value={'topgrossing'}>Top Grossing</MenuItem>
                <MenuItem value={'movers_shakers'}>Movers Shakers</MenuItem>
                <MenuItem value={'topselling_free_games'}>TopSelling Free Games</MenuItem>
                <MenuItem value={'topselling_paid_games'}>Top Selling Paid Games</MenuItem>
                <MenuItem value={'topselling_grossing_games'}>Top Selling Grossing Games</MenuItem>
            </Select>
        </FormControl>
        </Box>
        
        <Button onClick={ApiFire}variant="contained">go</Button>
        </Stack>
        
    </>
    );
}
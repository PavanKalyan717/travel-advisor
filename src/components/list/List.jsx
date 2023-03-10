import React,{useState} from 'react'
import {CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select} from '@material-ui/core'
import useStyles from './styles'
import { type } from '@testing-library/user-event/dist/type';
import Placedetails from '../placedetails/Placedetails';

const List = ({places}) => {
  const classes= useStyles();
  const [type,setType] =useState('restaurants');
  const [rating,setRating] =useState('');
  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restuarants,attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value )}>
          <MenuItem value='restaurants'> restaurants</MenuItem>
          <MenuItem value='hotels'> hotels</MenuItem>
          <MenuItem value='attractions'> attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value )}>
          <MenuItem value={0}> All</MenuItem>
          <MenuItem value={3}> Above 3.0</MenuItem>
          <MenuItem value={4}> Above 4.0</MenuItem>
          <MenuItem value={4.5}> Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
            <Placedetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
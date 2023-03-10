import React,{useEffect, useState} from 'react';
import {Header,List,Map} from './components';
import { CssBaseline,Grid} from '@material-ui/core';
import {getPlacesData} from './api'

const App = () => {
  const [places,setPlaces] = useState([]);
  const [coordinates,setCoordinates] =useState({});
  const [bounds,setBounds] =useState({});

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
        setCoordinates({lat:latitude,lng:longitude});
    })
  });

  useEffect(()=>{
    getPlacesData(bounds?.sw,bounds?.ne).then((data)=>{
      console.log(data);
      setPlaces(data);
    })
  },[coordinates,bounds]);

  return (
    <div>
      < CssBaseline />
      <Header />
      <Grid container spacing ={3} style={{width: '100%'}}>
        <Grid item xs ={12} md={3}>
          <List places={places} />
        </Grid>
        <Grid item xs ={12} md ={8}>
          <Map 
              setCoordinates={setCoordinates}
              setBounds = {setBounds}
              coordinates= {coordinates}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
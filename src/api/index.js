 import axios from "axios";

 const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';


 
 export const getPlacesData = async(sw,ne)=>{
    try {
        const {data :{data}} = await axios.get(URL,
          {
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng ,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
            },
            headers: {
              'X-RapidAPI-Key': '6ef6c4b183mshfd73a91eef2fb18p1c4640jsn6d7a9a67fe31',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          }
          );
        return data;
    } catch (error) {
        console.log(error)
    }

 }
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [ City,setCity]=useState("")
    let [error,seterror] = useState(false)
    let API_URL = import.meta.env.VITE_API_URL;
    let API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            
            let result ={
             City:City,
             temp:jsonResponse.main.temp,
             tempmin : jsonResponse.main.temp_min,
             tempmax : jsonResponse.main.temp_max,
             humidity : jsonResponse.main.humidity,
             feelsLike : jsonResponse.main.feels_like,
             weather : jsonResponse.weather[0].description
             }
             
             return result
        }
        catch(err){
            throw err;
        }
     
        
    }
    let handleChange= (event)=>{
        setCity(event.target.value)
    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            
            setCity("")
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }
        catch(err){
            seterror(true)
        }
        
        
        
    }
    return(

        <div>
            
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" variant="outlined" required value={City} onChange={handleChange}/><br /><br />
            <Button variant="contained" type='Submit' >Search</Button>
            {error && <p style={{color:"red"}}>No Such place exist In our API! </p>}
            </form>
            </div>
    )
}
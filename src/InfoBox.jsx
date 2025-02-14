import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1615226120487-90ec48f5d316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const RAINY_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=ky5JTM-ZpKr0zoDfB4jnatyATQ-5ZG7kdg9vU8ndrww="
    return (
        <>
            <div className='InfoBox'>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}

                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.City} {info.humidity > 80 ? <WaterDropIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}

                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Maximum Temperature = {info.tempmax}&deg;C</p>
                            <p>Minimum Temperature ={info.tempmin}&deg;C</p>
                            <p>The Weather in this state is like <i>{info.weather}</i> and its feels like {info.feelsLike}&deg;C</p>
                           
                        </Typography>
                    </CardContent>

                </Card>

            </div>
        </>
    )
}
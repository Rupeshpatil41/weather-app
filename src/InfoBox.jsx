import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({ Info }){
    const INIT_URL=
    "https://images.unsplash.com/photo-1628525805814-cf9fe2582727?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    const HOT_URL=
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const COLD_URL=
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    const RAIN_URL=
    "https://images.unsplash.com/photo-1561634666-669fe33c3d0a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
    <div className="InfoBox">

<div className='cardContainer'>
    <Card sx={{ maxWidth: 345, width:'100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 ? RAIN_URL: Info.temp> 15 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
          {Info.humidity > 80 
          ?<ThunderstormIcon/>
          : Info.temp> 15
           ?<SunnyIcon/>:
            <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <div>Temperature: {Info.temperature}°C</div>
         <div>Humidity: {Info.humidity}%</div>
         <div>Description: {Info.description}</div>
         <div>Wind Speed: {Info.windSpeed} m/s</div>
         <div>Pressure: {Info.pressure} hPa</div>

        </Typography>
      </CardContent>
    </Card></div>

    </div>)
}
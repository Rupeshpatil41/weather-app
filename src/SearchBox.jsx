import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import { useState, useEffect } from 'react';

export default function SearchBox({ UpdateInfo }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);       // Controls whether error is rendered
  const [fade, setFade] = useState(false);         // Controls the CSS fade-in/out

  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '478590b59cccba355d25f83e8cae1685';

  const getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('City not found');
    }

    let jsonResponse = await response.json();
    return {
      city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      description: jsonResponse.weather[0].description,
      icon: jsonResponse.weather[0].icon,
    };
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      UpdateInfo(newInfo);
      setCity('');
      setError(false); // Clear previous errors
    } catch (err) {
      setError(true);     // Render the error
      setFade(true);      // Start fade-in

      // Remove after 3 seconds
      setTimeout(() => {
        setFade(false);   // Start fade-out
        setTimeout(() => setError(false), 500); // Remove from DOM after fade
      }, 3000);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>

        {error && (
          <p className={`error-message ${fade ? 'fade-in' : 'fade-out'}`}>
            No such place exists
          </p>
        )}
      </form>
    </div>
  );
}

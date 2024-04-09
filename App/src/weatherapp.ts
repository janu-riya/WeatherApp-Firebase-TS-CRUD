// src/weatherapp.ts
import axios from 'axios';
import { WeatherModel } from './models/WeatherModel';

export async function getWeather(location: string): Promise<WeatherModel | null> {
  try {
    const apiKey = '1f1ceee1ac34f92a66f9d73657705522';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const weatherData: WeatherModel = {
        lon: response.data.coord.lon,
        lat: response.data.coord.lat,
        time: new Date().toISOString(),
        temperature: response.data.main.temp,
        description: response.data.weather[0].description
      };
      return weatherData;
    } else {
      console.error('Failed to fetch weather data');
      return null;
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

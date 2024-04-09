// src/index.ts
import firestoreService from "./services/FirestoreService";
import { getWeather } from "./weatherapp";
import { WeatherModel } from "./models/WeatherModel";

const main = async () => {
    const location = 'Bangalore';
    const weatherData: WeatherModel | null = await getWeather(location);
    
    if (weatherData) {
        console.log(`Weather in ${location}:`);
        console.log(`Longitude: ${weatherData.lon}`);
        console.log(`Latitude: ${weatherData.lat}`);
        console.log(`Time: ${weatherData.time}`);
        console.log(`Temperature: ${weatherData.temperature}°C`);
        console.log(`Description: ${weatherData.description}`);

        // Save weather data to Firestore with location as document ID
        await firestoreService.addWeather(location, weatherData);
        console.log("Weather data saved to Firestore for location:", location);

        // Retrieve weather data for the same location
        const retrievedWeatherData = await firestoreService.getWeather(location);
        console.log("Retrieved weather data for location:", retrievedWeatherData);

        // Update weather data (just for demonstration)
        await firestoreService.updateWeather(location, { temperature: 30 });
        console.log("Weather data updated for location:", location);

        /*// Delete weather data (just for demonstration)
        await firestoreService.deleteWeather(location);
        console.log("Weather data deleted for location:", location);*/
    } else {
        console.log(`Failed to fetch weather data for ${location}`);
    }
}

main();

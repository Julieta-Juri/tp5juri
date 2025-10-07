import { useState, useEffect } from 'react';
import '../estilos/Weather.css';

// Configuración de la API (todo integrado aquí)
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json';
const API_KEY = '8bf7100828274b6bb46212643250610';

// Función para obtener el clima
const getWeather = async (city = 'Salta,Argentina') => {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}?key=${API_KEY}&q=${city}&lang=es&aqi=no`
    );

    if (!response.ok) {
      throw new Error('Error al obtener el clima');
    }

    const data = await response.json();

    return {
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      feelsLike: data.current.feelslike_c,
      location: data.location.name,
      country: data.location.country
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        setError('No se pudo obtener el clima');
        setLoading(false);
      }
    };

    fetchWeather();
    // Actualizar cada 10 minutos
    const interval = setInterval(fetchWeather, 600000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="weather-widget">Cargando...</div>;
  }

  if (error) {
    return <div className="weather-widget">{error}</div>;
  }

  return (
    <div className="weather-widget">
      <h3 className="weather-title">Clima en Salta Capital</h3>
      <div className="weather-content">
        <img src={weather.icon} alt={weather.condition} className="weather-icon-img" />
        <span className="weather-temp">{Math.round(weather.temperature)}°C</span>
        <span className="weather-desc">{weather.condition}</span>
      </div>
    </div>
  );
}

export default Weather;
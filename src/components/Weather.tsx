import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import ForecastCard from './ForecastCard';
import styles from '../Modules/Weather.module.css';

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface ForecastData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        maxtemp_f: number;
        mintemp_f: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }>;
  };
}

const Weather: React.FC = () => {
  // Weather data state - null indicates no data fetched yet
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
  // Forecast data state - null indicates no forecast data fetched yet
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  
  // Loading state - false initially since we haven't started fetching
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Error state - null indicates no error
  const [error, setError] = useState<string | null>(null);

  // Location state - for tracking current search location
  const [currentLocation, setCurrentLocation] = useState<string>('London');

  // Temperature unit state - tracks user's preferred unit
  const [temperatureUnit, setTemperatureUnit] = useState<'celsius' | 'fahrenheit'>('celsius');

  // Function to set temperature unit
  const setUnit = (unit: 'celsius' | 'fahrenheit') => {
    setTemperatureUnit(unit);
  };

  // Function to fetch weather data for a given location
  const fetchWeatherData = async (location: string) => {
    setIsLoading(true);
    setError(null); // Clear previous errors
    
    try {
      const apiKey = (import.meta.env as any).VITE_API_KEY;
      
      // First, fetch current weather data
      const currentWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
      const currentResponse = await fetch(currentWeatherUrl);
      
      if (!currentResponse.ok) {
        throw new Error(`Weather API error: ${currentResponse.status} ${currentResponse.statusText}`);
      }
      
      const currentData = await currentResponse.json();
      setWeatherData(currentData);
      
      // Then, fetch forecast data
      // Try with explicit days parameter and ensure we get 5 days
      const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`;
      console.log('Forecast API URL:', forecastUrl);
      const forecastResponse = await fetch(forecastUrl);
      
      if (!forecastResponse.ok) {
        throw new Error(`Forecast API error: ${forecastResponse.status} ${forecastResponse.statusText}`);
      }
      
      const forecastData = await forecastResponse.json();
      console.log('Forecast API Response:', forecastData);
      console.log('Number of forecast days:', forecastData.forecast?.forecastday?.length);
      
      // Check if we got the expected number of days
      if (!forecastData.forecast?.forecastday || forecastData.forecast.forecastday.length < 5) {
        console.warn(`Expected 5 days, but got ${forecastData.forecast?.forecastday?.length || 0} days`);
        console.log('This might be due to API plan limitations. Free plans often limit forecast days.');
      }
      
      setForecastData(forecastData);
      
      setCurrentLocation(location); // Update current location
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search from SearchBar component
  const handleSearch = (location: string) => {
    fetchWeatherData(location);
  };

  // useEffect with empty dependency array runs only once on mount
  useEffect(() => {
    // Initial weather fetch for default location
    fetchWeatherData(currentLocation);
  }, []); // Only run on mount

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img 
          src="/weatherapplogo.png" 
          alt="Nimbus Weather" 
          className={styles.logo}
        />
      </div>
      
      {/* SearchBar Component */}
      <SearchBar 
        onSearch={handleSearch}
        isLoading={isLoading}
        currentLocation={currentLocation}
      />
      
      {/* Loading State */}
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Loading weather data...</p>
        </div>
      )}
      
      {/* Error State */}
      {error && (
        <div className={styles.errorContainer}>
          <strong className={styles.errorTitle}>Error: </strong>
          <span className={styles.errorMessage}>{error}</span>
        </div>
      )}
      
      {/* Success State - Weather Data */}
      {weatherData && !isLoading && (
        <div className={styles.weatherContainer}>
          <WeatherCard
            location={weatherData.location}
            current={weatherData.current}
            temperatureUnit={temperatureUnit}
            onUnitChange={setUnit}
          />
          
          {/* Forecast Section */}
          {forecastData && (
            <ForecastCard
              forecast={forecastData.forecast.forecastday}
              temperatureUnit={temperatureUnit}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;

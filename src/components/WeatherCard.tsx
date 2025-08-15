import React from 'react';
import WeatherAnimation from './WeatherAnimation';
import styles from '../Modules/WeatherCard.module.css';

interface WeatherCardProps {
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
  temperatureUnit: 'celsius' | 'fahrenheit';
  onUnitChange: (unit: 'celsius' | 'fahrenheit') => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  current,
  temperatureUnit,
  onUnitChange
}) => {
  const temperature = temperatureUnit === 'celsius' ? current.temp_c : current.temp_f;
  const unit = temperatureUnit === 'celsius' ? '°C' : '°F';

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.locationInfo}>
          <h2 className={styles.cityName}>{location.name}</h2>
          <p className={styles.locationDetails}>
            {location.region}, {location.country}
          </p>
        </div>
        
        <div className={styles.unitToggle}>
          <button
            onClick={() => onUnitChange('celsius')}
            className={`${styles.unitButton} ${temperatureUnit === 'celsius' ? styles.active : ''}`}
            aria-pressed={temperatureUnit === 'celsius'}
          >
            °C
          </button>
          <button
            onClick={() => onUnitChange('fahrenheit')}
            className={`${styles.unitButton} ${temperatureUnit === 'fahrenheit' ? styles.active : ''}`}
            aria-pressed={temperatureUnit === 'fahrenheit'}
          >
            °F
          </button>
        </div>
      </div>

             <div className={styles.weatherDisplay}>
         <div className={styles.animationSection}>
           <WeatherAnimation condition={current.condition.text} />
           <div className={styles.condition}>
             {current.condition.text}
           </div>
         </div>
         
         <div className={styles.temperatureSection}>
           <div className={styles.temperature}>
             {Math.round(temperature)}
             <span className={styles.unit}>{unit}</span>
           </div>
         </div>
       </div>
    </div>
  );
};

export default WeatherCard;

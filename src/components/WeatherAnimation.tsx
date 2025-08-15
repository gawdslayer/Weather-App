import React from 'react';
import styles from '../Modules/WeatherAnimation.module.css';

interface WeatherAnimationProps {
  condition: string;
  isNight?: boolean;
}

const WeatherAnimation: React.FC<WeatherAnimationProps> = ({ condition, isNight = false }) => {
  // Function to determine weather type based on condition text
  const getWeatherType = (conditionText: string): string => {
    const text = conditionText.toLowerCase();
    
    if (text.includes('sunny') || text.includes('clear')) return 'sunny';
    if (text.includes('cloudy') || text.includes('overcast')) return 'cloudy';
    if (text.includes('rain') || text.includes('drizzle')) return 'rainy';
    if (text.includes('snow') || text.includes('sleet')) return 'snowy';
    if (text.includes('storm') || text.includes('thunder')) return 'stormy';
    if (text.includes('rainbow')) return 'rainbow';
    if (text.includes('clear') && isNight) return 'starry';
    
    // Default to sunny for unknown conditions
    return 'sunny';
  };

  const weatherType = getWeatherType(condition);

  return (
    <div className={styles.animationContainer}>
      <div className={`${styles.weatherAnimation} ${styles[weatherType]}`} />
      <div className={styles.animationLabel}>{condition}</div>
    </div>
  );
};

export default WeatherAnimation;

import React from 'react';
import styles from '../Modules/ForecastCard.module.css';

interface ForecastDay {
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
}

interface ForecastCardProps {
  forecast: ForecastDay[];
  temperatureUnit: 'celsius' | 'fahrenheit';
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast, temperatureUnit }) => {
  const getDayName = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getTemperature = (day: ForecastDay['day'], type: 'max' | 'min'): number => {
    const tempKey = type === 'max' ? `maxtemp_${temperatureUnit === 'celsius' ? 'c' : 'f'}` : `mintemp_${temperatureUnit === 'celsius' ? 'c' : 'f'}`;
    const temp = day[tempKey as keyof typeof day] as number;
    return isNaN(temp) ? 0 : Math.round(temp);
  };

  const getWeatherIcon = (conditionText: string): string => {
    const text = conditionText.toLowerCase();
    if (text.includes('sunny') || text.includes('clear')) return '☀️';
    if (text.includes('cloudy') || text.includes('overcast')) return '☁️';
    if (text.includes('rain') || text.includes('drizzle')) return '🌧️';
    if (text.includes('snow') || text.includes('sleet')) return '❄️';
    if (text.includes('storm') || text.includes('thunder')) return '⛈️';
    if (text.includes('rainbow')) return '🌈';
    return '🌤️';
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>5-Day Forecast</h3>
      <div className={styles.forecastGrid}>
        {forecast.map((day, _index) => (
          <div key={day.date} className={styles.forecastDay}>
            <div className={styles.dayName}>{getDayName(day.date)}</div>
            <div className={styles.weatherIcon}>
              {getWeatherIcon(day.day.condition.text)}
            </div>
                                      <div className={styles.temperatures}>
               <span className={styles.maxTemp}>
                 {getTemperature(day.day, 'max')}°
               </span>
               <span className={styles.minTemp}>
                 {getTemperature(day.day, 'min')}°
               </span>
             </div>
            <div className={styles.condition}>
              {day.day.condition.text}
            </div>
          </div>
        ))}
                    </div>
       {forecast.length < 5 && (
         <p className={styles.apiNote}>
           Note: My API plan may limit forecast days. I'm using a free plan. Upgrade for full 5-day forecast.
         </p>
       )}
     </div>
   );
 };

export default ForecastCard;

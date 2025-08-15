# 🌤️ Nimbus Weather App

A modern, responsive weather application built with React, TypeScript, and CSS Modules. Get real-time weather data and forecasts for any location worldwide with beautiful custom animations.

![Nimbus Weather App](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple?logo=vite)
![Weather API](https://img.shields.io/badge/WeatherAPI.com-API-orange)

## ✨ Features

- 🌍 **Global Weather Search** - Search for weather in any city worldwide
- 🌡️ **Temperature Unit Toggle** - Switch between Celsius and Fahrenheit
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Custom Weather Animations** - Beautiful CSS animations for different weather conditions
- 📊 **3-Day Forecast** - Detailed weather forecasts with high/low temperatures
- ⚡ **Real-time Data** - Live weather data from WeatherAPI.com
- 🎯 **Modern UI** - Glassmorphism design with gradients and transparency
- ♿ **Accessible** - Full keyboard navigation and screen reader support

## 🎨 Weather Animations

The app features custom CSS animations for 6 different weather conditions:

- ☀️ **Sunny** - Rotating sun with animated rays
- ☁️ **Cloudy** - Floating clouds with shadows
- 🌧️ **Rainy** - Animated raindrops falling
- ❄️ **Snowy** - Falling snowflakes
- ⛈️ **Stormy** - Thunder and lightning effects
- 🌈 **Rainbow** - Colorful arc animation

## 🚀 Live Demo

[View Live Demo](Will Add After deployment) *(Add your deployed link here)*

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 7.0.4
- **Styling**: CSS Modules with custom animations
- **Weather API**: WeatherAPI.com
- **Development Tools**: ESLint, TypeScript ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gawdslayer/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_weatherapi_key_here
   ```
   
   Get your free API key from [WeatherAPI.com](https://www.weatherapi.com/)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Weather.tsx     # Main weather container
│   ├── SearchBar.tsx   # Location search functionality
│   ├── WeatherCard.tsx # Current weather display
│   ├── ForecastCard.tsx # 3-day forecast
│   ├── WeatherAnimation.tsx # Weather condition animations
│   └── Footer.tsx      # App footer
├── Modules/            # CSS Module files
└── assets/            # Static assets
```

## 🎯 Key Features Explained

### Weather API Integration
- Dual API calls for current weather and forecast data
- Comprehensive error handling with user-friendly messages
- TypeScript interfaces for type safety
- Graceful degradation when API limits are reached

### Responsive Design
- Mobile-first approach with progressive enhancement
- Flexible grid layouts using CSS Flexbox
- Responsive typography and spacing
- Touch-friendly interactive elements

### Custom Animations
- Pure CSS animations without external dependencies
- Smooth 60fps performance
- Unique visual representations for each weather condition
- Lightweight implementation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌟 Development Process

This project was developed following modern React best practices:

- **Component-based architecture** with clear separation of concerns
- **TypeScript** for type safety and better developer experience
- **CSS Modules** for scoped styling and maintainability
- **Progressive enhancement** for accessibility and performance
- **Comprehensive error handling** for robust user experience

For detailed development process documentation, see [DEVELOPMENT_PROCESS.md](./DEVELOPMENT_PROCESS.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing the weather data API
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- CSS animation inspirations from the web development community

## 📞 Contact

[GitHub](https://github.com/gawdslayer)

Project Link: [https://github.com/gawdslayer/Weather-App](https://github.com/gawdslayer/Weather-App)

---

⭐ **Star this repository if you found it helpful!**

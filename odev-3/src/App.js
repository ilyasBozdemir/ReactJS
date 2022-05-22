import WeatherContainer from "./components/WeatherContainer";
import { WeatherProvider } from "./Context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <WeatherContainer />
    </WeatherProvider>
  );
}

export default App;

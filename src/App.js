import "./App.css";
import { Weather } from "./weather";
import { WeatherApp } from "./weatherapp";
function App() {
  return (
    <>
      <div className="weather__video">
        <video
          autoPlay
          muted
          loop
          src={`${process.env.PUBLIC_URL}/video/stock.mp4`}
        ></video>
      </div>
      <div className="overlay"></div>
      <div className="weather-wrap">
        {/* <Weather></Weather>8 */}
        <WeatherApp></WeatherApp>
      </div>
    </>
  );
}

export default App;

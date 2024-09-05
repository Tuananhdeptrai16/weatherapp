import "./App.css";
import StoreContext from "./context";
import { useState } from "react";
import { WeatherApp } from "./weatherapp";
function App() {
  const [video, setVideo] = useState(
    `${process.env.PUBLIC_URL}/video/stock.mp4`
  );
  console.log(video);

  return (
    <StoreContext.Provider value={{ setVideo }}>
      <div className="weather__video">
        <video autoPlay muted loop src={video}></video>
      </div>
      <div className="overlay"></div>
      <div className="weather-wrap">
        {/* <Weather></Weather>8 */}
        <WeatherApp></WeatherApp>
      </div>
    </StoreContext.Provider>
  );
}

export default App;

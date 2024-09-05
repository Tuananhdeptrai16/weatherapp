import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useContext } from "react";
import StoreContext from "./context";
export const WeatherApp = () => {
  const store = useContext(StoreContext);
  const [input, setInput] = useState("");
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const [weather, setWeather] = useState({
    loading: false,
    data: {
      weather: {
        0: {
          description: "Không có dữ liệu",
        },
      },
    },
    error: false,
  });
  const getDay = () => {
    const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    const currentDate = new Date();
    const currentDay = weekdays[currentDate.getDay()];
    return currentDay;
  };
  const getDate = () => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const formatDate = (number) =>
      number < 10 && number > 0 ? `0${number}` : `${number}`;
    return formatDate(date);
  };

  const search = async (e) => {
    if (e.key === `Enter`) {
      e.preventDefault();
      setInput("");
      setWeather({ ...weather, loading: true });
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const api_key = "f00c38e0279b7bc85480c3fe775d518c";
      await axios
        .get(url, {
          params: {
            q: input,
            units: "metric",
            appid: api_key,
            lang: "vi",
          },
        })
        .then((res) => {
          setWeather({ data: res.data, loading: false, error: true });
        })
        .catch((err) => {
          setWeather({
            ...weather,
            data: {
              weather: {
                0: {
                  description: "Không có dữ liệu",
                },
              },
            },
            error: true,
          });
          setInput("");
          console.log(err);
        });
    }
  };
  const [icon, setIcon] = useState(
    `${process.env.PUBLIC_URL}/images/storm.png`
  );
  const [video, setVideo] = useState(
    `${process.env.PUBLIC_URL}/video/stock.mp4`
  );
  useEffect(() => {
    const stringWeather = weather.data.weather[0].description;
    if (
      weather.data &&
      weather.data.weather &&
      weather.data.weather[0].description
    ) {
      if (stringWeather === "mưa vừa") {
        setIcon(`${process.env.PUBLIC_URL}/images/raining.png`);
        setVideo(`${process.env.PUBLIC_URL}/video/muanhe.mp4`);
        store.setVideo(`${process.env.PUBLIC_URL}/video/muanhe.mp4`);
      } else if (stringWeather === "mưa nhẹ") {
        setIcon(`${process.env.PUBLIC_URL}/images/raining.png`);
      } else if (stringWeather === "mây cụm") {
        setIcon(`${process.env.PUBLIC_URL}/images/cloudy.png`);
        setVideo(`${process.env.PUBLIC_URL}/video/muanhe.mp4`);
        store.setVideo(`${process.env.PUBLIC_URL}/video/muanhe.mp4`);
      } else if (stringWeather === "mây đen u ám") {
        setIcon(`${process.env.PUBLIC_URL}/images/cloudy.png`);
        setVideo(`${process.env.PUBLIC_URL}/video/nhieumay.mp4`);
        store.setVideo(`${process.env.PUBLIC_URL}/video/nhieumay.mp4`);
      } else if (stringWeather === "mây thưa") {
        setIcon(`${process.env.PUBLIC_URL}/images/cloudy.png`);
        setVideo(`${process.env.PUBLIC_URL}/video/nhieumay.mp4`);
        store.setVideo(`${process.env.PUBLIC_URL}/video/nhieumay.mp4`);
      }
    }
  }, [weather.data, store]); // Theo dõi sự thay đổi của weather.data

  console.log(weather.data);

  return (
    <div className="weather">
      <div className="weather__video">
        <video autoPlay muted loop src={video}></video>
      </div>
      <div className="weather__content">
        <div className="weather__top">
          <div className="weather__left">
            <h1 className="weather__heading">Weather</h1>
            <p className="weather__desc">
              {weather && weather.data && weather.data.main
                ? weather.data.name.toUpperCase()
                : `loading....`}
            </p>
          </div>
          <div className="form__group field">
            <input
              onChange={onChangeInput}
              type="input"
              className="form__field"
              required=""
              value={input}
              onKeyPress={search}
            />
            <label htmlFor="name" className="form__label">
              Please enter a city
            </label>
          </div>
          <div className="weather__right">
            <span className="weather__day">{getDate()}</span>
            <p className="weather__month">{getDay()}</p>
          </div>
        </div>
        <div className="weather__icon-wrap">
          {weather.loading ? (
            <>
              <br />
              <br />
              <Oval type="Oval" color="black" height={100} width={100} />
            </>
          ) : (
            <div className="wrap">
              <img src={icon} alt="" className="weather__icon" />
              <p className="weather__title">
                {" "}
                {weather && weather.data && weather.data.main
                  ? weather.data.weather[0].description.toUpperCase()
                  : `Không có dữ liệu`}
              </p>
            </div>
          )}
        </div>
        <div className="weather__bottom">
          <div className="weather__bottom--left">
            <h2 className="weather__temperature--text">Temperature</h2>
            <span className="weather__temp">
              {weather && weather.data && weather.data.main
                ? weather.data.main.temp
                : `00`}
            </span>
            <p className="weather__temp--desc">celcius</p>
          </div>
          <div className="weather__bottom__right">
            <div className="weather__humidity">
              Humidity :{" "}
              <span className="weather__humidity--number">
                {weather && weather.data && weather.data.main
                  ? weather.data.main.humidity
                  : `00`}
              </span>
              %
            </div>
            <div className="weather__wind">
              Wind :{" "}
              <span className="weather__wind--number">
                {weather && weather.data && weather.data.main
                  ? `${weather.data.wind.speed} `
                  : `00`}
              </span>
              km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

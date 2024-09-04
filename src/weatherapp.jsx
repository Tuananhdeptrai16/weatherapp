import React from "react";

export const WeatherApp = () => {
  return (
    <div className="weather">
      <div className="weather__video">
        <video
          autoPlay
          muted
          loop
          src={`${process.env.PUBLIC_URL}/video/stock.mp4`}
        ></video>
      </div>
      <div className="weather__content">
        <div className="weather__top">
          <div className="weather__left">
            <h1 className="weather__heading">Weather</h1>
            <p className="weather__desc">Forecast</p>
          </div>
          <div className="form__group field">
            <input type="input" className="form__field" required="" />
            <label htmlFor="name" className="form__label">
              Please enter a city
            </label>
          </div>
          <div className="weather__right">
            <span className="weather__day">09</span>
            <p className="weather__month">Feb</p>
          </div>
        </div>
        <div className="weather__icon-wrap">
          <img
            src={`${process.env.PUBLIC_URL}/images/storm.png`}
            alt=""
            className="weather__icon"
          />
          <p className="weather__title">Bão rồi</p>
        </div>
        <div className="weather__bottom">
          <div className="weather__bottom--left">
            <h2 className="weather__temperature--text">Temperature</h2>
            <span className="weather__temp">08</span>
            <p className="weather__temp--desc">celcius</p>
          </div>
          <div className="weather__bottom__right">
            <div className="weather__humidity">
              Humidity : <span className="weather__humidity--number">1</span>%
            </div>
            <div className="weather__wind">
              Wind : <span className="weather__wind--number">13</span>
              km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

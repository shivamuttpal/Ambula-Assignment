
import React, { useState, useEffect } from 'react';
import './css/style.css'; // Make sure the correct path to your CSS file is provided

const Weatherapi = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Mumbai');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="box">
                <div className="inputData">
                    <input type="search"  className="inputField" id="" onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                </div>
                {
                    !city ? (
                        <p className="errorMsg">No Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <div className="location">
                                    <i className="fas fa-street-view" ></i>{search}
                                </div>
                                <h1 className="temp">
                                    {city.temp}°Cel
                                </h1>
                                <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )
                }
            </div>
    </div>
  );
};

export default Weatherapi;

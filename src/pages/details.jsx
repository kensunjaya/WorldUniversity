import { useContext, useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import { DataContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components/loading";

const Details = () => {
  const { selectedCountry } = useContext(DataContext);
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedCountry)
    if (!selectedCountry) {
      navigate("/search");
      return;
    }
    setIsLoading(true);
    axios.get(`https://restcountries.com/v3.1/name/${selectedCountry}`).then((response) => {
      setCountryData(response.data[0]);
      console.log(response.data[0]);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen font-sans">
      {isLoading && <Loading />}
      <NavBar />
      {(!isLoading && countryData) && (
        <div className="flex flex-row">
          <div className="flex flex-col text-lg">
            <h1 className="text-4xl font-bold mb-5">{countryData.name.common}</h1>
            <div>{`Capital: ${countryData.capital[0]}`}</div>
            <div>{`Population: ${countryData.population.toLocaleString()}`}</div>
            <div>{`Area: ${countryData.area.toLocaleString()} km²`}</div>
            <div>{`Currency: ${Object.keys(countryData.currencies)}`}</div>
            <div>
              {`Languages: ${Object.values(countryData.languages).join(', ')}`}
            </div>
            <img src={countryData.flags.png} className="mt-5" alt={countryData.flags.alt} />
          </div>
          <div className="flex ml-10">
            <a href={countryData.maps.googleMaps} target="_blank" rel="noreferrer">
              <img 
                src={`https://static-maps.yandex.ru/1.x/?ll=${countryData.latlng[1]},${countryData.latlng[0]}&z=5&size=600,400&l=map&lang=en_US`}
                alt={countryData.maps.googleMaps}
                className="rounded-md h-full min-w-[30rem]"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details
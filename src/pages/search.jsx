import { useContext, useEffect, useState } from 'react';
import { NavBar } from '../components/navbar';
import axios from 'axios';
import { DataContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/loading';

const Search = () => {
  const { allCountries, setAllCountries, searchQuery, setSelectedCountry } = useContext(DataContext);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (allCountries.length > 0) {
      setCountries(filterCountries(allCountries, searchQuery));
      return;
    }
    setIsLoading(true);
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
      setCountries(filterCountries(response.data, searchQuery));
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [searchQuery]);


  const filterCountries = (countries, query) => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    navigate("/details");
  }

  return (
    <main className="flex flex-col min-h-screen w-screen bg-primary font-sans items-center">
      <NavBar />
      {isLoading && <Loading />}
      <div className="pt-[7rem] px-5">
        {countries.length === 0 && searchQuery !== "" && (
          <div className="text-lg font-semibold text-center">{`No results found for '${searchQuery}'`}</div>
        )}
        {countries.length > 0 && searchQuery !== "" && (
          <div className="text-lg font-semibold flex flex-col text-center">{`Showing ${countries.length} results of '${searchQuery}'`}</div>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {countries.map((country, index) => (
            <button key={index} className='mx-5 my-5' onClick={() => handleCountryClick(country.name.common)}>
              <img src={country.flags.png} className="w-60" alt={country.name.common} />
              <div className="text-center text-xl font-semibold mt-3">
                {country.name.common}
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Search;

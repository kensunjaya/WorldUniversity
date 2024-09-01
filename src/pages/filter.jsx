import { useContext, useEffect, useState } from 'react';
import { NavBar } from '../components/navbar';
import axios from 'axios';
import { DataContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/loading';

const Filter = () => {
  const { allCountries, setAllCountries, setSelectedCountry } = useContext(DataContext);
  const [countries, setCountries] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [selectedStatus, setSelectedStatus] = useState("Select Status");
  const [selectedRegion, setSelectedRegion] = useState("Select Region");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (allCountries.length > 0) {
      setCountries(allCountries);
      return;
    }
    setIsLoading(true);
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
      setCountries(allCountries);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);


  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    navigate("/details");
  }

  const handleSelectRegion = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedLanguage("Select Language");
    setSelectedStatus("Select Status");
    if (e.target.value === "Select Region") {
      setCountries(allCountries);
      return;
    }
    setIsLoading(true);
    axios.get(`https://restcountries.com/v3.1/region/${e.target.value}`).then((response) => {
      setCountries(response.data);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  const handleSelectLanguage = (e) => {
    setSelectedLanguage(e.target.value);
    setSelectedRegion("Select Region");
    setSelectedStatus("Select Status");
    if (e.target.value === "Select Language") {
      setCountries(allCountries);
      return;
    }
    setIsLoading(true);
    axios.get(`https://restcountries.com/v3.1/lang/${e.target.value}`).then((response) => {
      setCountries(response.data);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  const handleSelectStatus= (e) => {
    setSelectedStatus(e.target.value);
    setSelectedRegion("Select Region");
    setSelectedLanguage("Select Language");
    if (e.target.value === "Select Status") {
      setCountries(allCountries);
      return;
    }
    setIsLoading(true);
    axios.get(`https://restcountries.com/v3.1/independent?status=${e.target.value}`).then((response) => {
      setCountries(response.data);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <main className="flex flex-col min-h-screen w-screen bg-primary font-sans items-center">
      {isLoading && <Loading />}
      <NavBar />
      <div className="pt-[7rem] px-5">
        <div className="flex w-full justify-center">
          <select name="Region" value={selectedRegion} onChange={(e) => {handleSelectRegion(e)}} className="p-2 rounded-md hover:cursor-pointer border border-secondary bg-transparent">
            <option value="Select Region" disabled>Select Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select name="Language" value={selectedLanguage} onChange={(e) => {handleSelectLanguage(e)}} className="p-2 rounded-md hover:cursor-pointer border border-secondary bg-transparent ml-5">
            <option value="Select Language" disabled>Select Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Dutch">Dutch</option>
            <option value="German">German</option>
            <option value="Italian">Italian</option>
            <option value="Russian">Russian</option>
            <option value="Arabic">Arabic</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Hindi">Hindi</option>
            <option value="Indonesian">Indonesian</option>
          </select>
          <select name="Independent" value={selectedStatus} onChange={(e) => {handleSelectStatus(e)}} className="p-2 rounded-md hover:cursor-pointer border border-secondary bg-transparent ml-5">
            <option value="Select Status" disabled>Select Status</option>
            <option value="true">Independent</option>
            <option value="false">Dependent</option>
          </select>
        </div>
        <div className="text-lg font-semibold text-center mt-5">{`Found ${countries.length} entries`}</div>
        <div className="flex flex-wrap justify-center items-center mt-5">
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

export default Filter;

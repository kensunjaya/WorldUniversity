import { useContext, useEffect, useState } from 'react'
import { NavBar } from '../components/navbar'
import axios from "axios";
import { DataContext } from '../context/Context';
import { Loading } from '../components/loading';

const Home = () => {
  const {popularCountries, setPopularCountries} = useContext(DataContext);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (popularCountries.length > 0) {
      setCountries(popularCountries);
      return;
    }
    setIsLoading(true);
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const sortedCountries = response.data
        .sort((a, b) => b.population - a.population)
        .slice(0, 10);
      setCountries(sortedCountries);
      setPopularCountries(sortedCountries);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen w-screen bg-primary text-secondary font-sans items-center">
      {isLoading && <Loading />}
      <NavBar />
      <div className="pt-[7rem] flex flex-col h-full items-center">
        <div className="w-full text-center text-4xl font-semibold mb-10">Welcome to WorldUniversity!</div>
        <p className="text-center text-lg font-semibold w-[50%]">
          {"WorldUniversity is an innovative platform specifically designed to help students explore the world. Here, you can find comprehensive information about various countries around the globe, ranging from basic data to in-depth details that can help you better understand each country."}
        </p>
        <div className="mt-10 text-2xl font-bold">Top 10 countries with largest populations</div>
        <div className="flex flex-wrap justify-center items-center mt-10">
          {countries.map((country, index) => {
            return (
              <div key={index} className='mx-5 my-5'>
                <img src={country.flags.png} alt={country.name.common} />
                <div className="text-center text-xl font-semibold mt-3">{country.name.common}</div>
              </div>
            )
          })}
        </div>

      </div>
    </main>
  )
}

export default Home

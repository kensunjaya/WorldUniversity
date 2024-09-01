import { useState } from "react";
import { DataContext } from "../context/Context";

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [popularCountries, setPopularCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <DataContext.Provider value={{popularCountries, setPopularCountries, searchQuery, setSearchQuery, allCountries, setAllCountries, selectedCountry, setSelectedCountry}}>
      {children}
    </DataContext.Provider>
  );
};
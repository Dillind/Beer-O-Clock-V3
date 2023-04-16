import { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";
import CountrySelector from "../components/CountrySelector";
const FindBeer = () => {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch("http://localhost:4000/beers");
      const json = await response.json();

      if (response.ok) {
        setBeers(json);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div className="find-beer">
      <div className="beers">
        <CountrySelector beers={beers} />
      </div>
    </div>
  );
};

export default FindBeer;

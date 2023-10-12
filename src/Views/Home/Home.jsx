import { useEffect, useState } from "react";
import { Country } from "../../Api/country";
import Card from "../../Components/Card/Card";
import "./home.css";


const Home = () => {
  const [nameCountry, setNameCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesSearch, setCountriesSearch] = useState([]);

  async function getCountriesData() {
    const { data } = await Country.getCountries();
    setCountries(data);
  }

  function getSearchedCountry(countryName) {
    const lowerCaseCountry = countryName.toLowerCase();
    const filteredCountries = countries.filter((country) => {
      const commonName = country.translations.por.common.toLowerCase();
      return commonName.includes(lowerCaseCountry);
    })
    
    setCountriesSearch(filteredCountries);
  }

  function handleInputChange(e) {
    setNameCountry(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(nameCountry.trim().length > 0) {
      getSearchedCountry(nameCountry);
      setNameCountry("");
    } else {
      return;
    }
  }

  useEffect(() => {
    getCountriesData();
  }, [])

  return (
    <main className="home">
      <header>
        <h1 className="home_title">Pesquise um país!</h1>
      </header>
      <section>
        <form onSubmit={handleSubmit} className="home_form">
          <input 
            type="text" 
            className="home_input" 
            onChange={handleInputChange} 
            autoComplete="off" 
            translate="no" 
            spellCheck="false"
            value={nameCountry}
            placeholder="Digite o nome de um país que deseja buscar"
          />
          <button type="submit" className="home_btn_search">Buscar</button>
        </form>
      </section>
      <div className="cards_section">
            {
              countriesSearch.length > 0 ?
                  countriesSearch.map((country) => {
                    return <Card key={country.name} countryInfo={country}/>
                  })
              : null
            }
          </div>
    </main>
  );
};

export default Home;

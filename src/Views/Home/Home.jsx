import { useEffect, useState } from "react";
import { Search_Country } from "../../assets/Api/country";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [country, setCountry] = useState([]);
  const [nameCountry, setNameCountry] = useState("");
  // const [tld,setTld] = useState("");

  /**
   * muda o parametro para acessar uma busca especifica na API
   * @param {nameCountry} nameCountry
   */
  async function searchCountry(nameCountry) {
    const { data } = await Search_Country.getCountries(nameCountry);

    setCountry(data[0]);
    // setTld(data[0].tld[0])
  }

  useEffect(() => {
    searchCountry(nameCountry);
  }, [nameCountry]);

  //  useEffect(() => {
  //     console.log(country);
  //     console.log(country.tld);
  //     console.log(country.tld[0]);
  //  });

  /**
   * pega os dados do input e manda para NameCountry
   * @param {event} e
   */
  function handle(e) {
    e.preventDefault();

    const value = e.target[0].value;
    setNameCountry(value);
  }

  return (
    <main className="home">
      <header>
        <h1 className="home_title">Qual pais vc gostaria de conhecer?</h1>
      </header>
      <section>
        <form onSubmit={handle} className="home_form">
          <input type="text" className="home_input" />
          <Link to={`/details/${country.tld}`}>
            <button className="home_btn_search">Buscar</button>
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Home;

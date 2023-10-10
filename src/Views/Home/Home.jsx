import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./home.css";


const Home = () => {
  const [nameCountry, setNameCountry] = useState("");

  const navigate = useNavigate();

  function handleInputChange(e) {
    setNameCountry(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/details/${nameCountry}`)
  }

  return (
    <main className="home">
      <header>
        <h1 className="home_title">Which Country would you like to seek?</h1>
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
            placeholder="Type a Country's name here"
          />
          <button type="submit" className="home_btn_search">Search</button>
        </form>
      </section>
    </main>
  );
};

export default Home;

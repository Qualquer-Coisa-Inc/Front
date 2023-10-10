import { useEffect, useState } from "react";
import { Country } from "../../assets/Api/country";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import "./Details.css";
import { Loading } from "../../Components/Loading/Loading";


const Details = () => {
  let { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false);

  async function searchCountry() {
    const { data } = await Country.getCountries(countryName);
    setCountry(data[0]);
  }

  function goBack() {
    navigate('/')
  }

  useEffect(() => {
    searchCountry();
    setTimeout(() => {
      setLoading(true);
    }, 1500)
  }, [])

  return (

    <main className='detail'>
      {
        loading ? 
        <>
          <Card className='card' countryInfo={country}/>
          <button className="btn" onClick={goBack}>Voltar</button>
        </>
        : <Loading />
      }
    </main>
  );
};

export default Details;

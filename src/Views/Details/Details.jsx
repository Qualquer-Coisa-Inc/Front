import { useEffect, useState } from "react";
import { Country } from "../../assets/Api/country";
import Card from "../../Components/Card/Card";
import "./Details.css";



const Details = () => {


  return (

    <main className='detail'>
      {
        loading ? 
        <>
          <Card className='card' countryInfo={country}/>
        </>
        : <Loading />
      }
    </main>
  );
};

export default Details;

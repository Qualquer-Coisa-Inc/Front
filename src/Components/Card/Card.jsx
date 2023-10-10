/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import './card.css'

const Card = ({countryInfo}) => {
  console.log(countryInfo);    

  const listLanguages = (object) => {
    if (object) {
      const languages = object;
      const languagesArray = [];
  
      for (const chave in languages) {
          const valor = languages[chave];
          languagesArray.push(<span className='card_details_span' key={chave}>{valor}</span>);
      }
  
      return (
        <div className='languages-container'>
          {languagesArray}
        </div>
      );
    }
  
    return null;
  }

  const listCurrencies = (object) => {
    const currencies = object;
    const currencyNames = [];

    for (const currencyCode in currencies) {
      if (currencies.hasOwnProperty(currencyCode)) {
        const currency = currencies[currencyCode];
        const currencyName = currency.name;
        currencyNames.push(<span className='card_details_span' key={currencyCode}>{currencyName}</span>);
      }
    }

    return (
      <div className='languages-container'>
        {currencyNames}
      </div>
    );
  }

  return (
    <div className='card'>
      <div className="card_wrapper">
        <h1 className='card_title'>{countryInfo.altSpellings[1]}</h1>
          <img className='card_img' src={countryInfo.flags.svg} alt={countryInfo.flags.svg.alt}/>
        <div className='card_field'>
          <h2 className='card_title__capital'>Capital:</h2>
          <span className='card_details_span'>{countryInfo.capital[0]}</span>
        </div>
        <div className='card_field'>
          <h3 className='card_details'>Continent:</h3>
          <span className='card_details_span'>{countryInfo.continents[0]}</span>
        </div>
        <div className='card_field'>
          <h3 className='card_details'>Languages:</h3>
            {
              listLanguages(countryInfo.languages)
            }
        </div>
        <div className='card_field'>
          <h3 className='card_details'>Population:</h3>
          <span className='card_details_span'>{Number(countryInfo.population).toLocaleString('pt-BR')}</span>
        </div>
        <div className='card_field'>
          <h3 className='card_details'>Currency:</h3>
          {listCurrencies(countryInfo.currencies) }
        </div>
        <a href={countryInfo.maps.googleMaps} rel="noreferrer" className='card_details_a' target="_blank">
          <button className='card_details_btn'>Clique para ver o google map</button>
        </a>
      </div>
    </div>
  )
}

export default Card
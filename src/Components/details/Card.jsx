import './card.css'
import Flags from '../../img/transferir.png'

const Card = () => {
  return (
    <div className='card'>
     <h1 className='card_title'>Brasil</h1>
     <img className='card_img' src={Flags} alt="Flag"/>

     <h2 className='card_title__capital' >Capital: <span className='card_details_span'>oiiii</span></h2>

     <h3 className='card_details'>Continente: <span className='card_details_span'>oiiii</span></h3>

     <h3 className='card_details'>Idioma: <span className='card_details_span'>oiiii</span></h3>

     <h3 className='card_details'>População: <span className='card_details_span'>oiiii</span></h3>

     <h3 className='card_details'>Moeda: <span className='card_details_span'>oiiii</span></h3>

     <a href="" className='card_details_a' target="_blank"><button className='card_details_btn'>Clique para ver o google map</button></a>

    
    </div>
  )
}

export default Card
import './Welcome.css';

// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Welcome() {
  return (
    <div className='welcome-container' id='accueil'>
       <h2 className='welcome-title'>Développeuse Web Front-end</h2>
       <p className='welcome-typing'>Je suis actuellement à la recherche d'un poste de Développeuse Web en alternance ou d'un premier <span className='welcome-typing--animation'>emploi.</span></p>
       <p className='welcome-typing'>En m'embauchant en contrat de professionnalisation, vous pouvez prétendre à une aide de l’état de 8 000 euros. Attention, cette aide prend fin le 31/12/2022. </p>
       <div className='welcome-location-container'>
        <FontAwesomeIcon icon={faLocationDot} />
        <a href='https://www.google.fr/maps/place/Perpignan/@42.6990876,2.869492,13z/data=!3m1!4b1!4m5!3m4!1s0x12b06e4e80fd88fd:0x1c83306520f2dd4f!8m2!3d42.6886591!4d2.8948332' target="_blank" className='city-name' rel="noreferrer">Perpignan</a>
       </div> 
    </div>
  )
};

export default Welcome;
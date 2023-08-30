import styles from './Card.module.css'
import ButtonB from '../Elements/ButtonB'
import {useState} from 'react'

function Card({img, title, tech, description, repo, site}){
    
    const [info,setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOut(){
        setInfo(false)
    }
    
    return(
        <div onMouseLeave={InfoOut} className={styles.card}>
            <a onMouseEnter={InfoOn}  target="_blank" href={site}>
                <img src={img} alt='ERROR'></img>
            </a>
            {info === true && (
                <section>
                <h3>{title}</h3>
                    <p> <strong>Tecnologia:</strong>{tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse o reportório'link={repo}/>
                </section>
            )}   
        </div>
    )
}

export default Card
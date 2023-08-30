import styles from './Card.module.css'
import ButtonB from '../Elements/ButtonB'

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
            <a  target="_blank" href={site}>
                <img src={img} alt='ERROR'></img>
            </a>
            <section>
            <h3>{title}</h3>
                <p> <strong>Tecnologia:</strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o reportório'link={repo}/>
            </section>
        </div>
    )
}

export default Card
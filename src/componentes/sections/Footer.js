import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"
import styles from './footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/g.valenteb/' target="_blank"><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/gabriel-valente-b4897226b/' target="_blank"> <FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/gabrielvalentesjc' target="_blank"><FaGithub size={30}/></a></li>
            </ul>
            <p>gabrielvalentesjc@hotmail.com</p>
            <p> Gabriel Valente © 2023 </p>
        </div>
    )
}

export default Footer
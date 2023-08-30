import styles from './Navbar.module.css'
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className={styles.Navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skill'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Project'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/g.valenteb/' target="_blank"><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/gabriel-valente-b4897226b/' target="_blank"> <FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/gabrielvalentesjc' target="_blank"><FaGithub size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar
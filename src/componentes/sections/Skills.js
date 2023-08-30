import styles from './Skills.module.css'
import javascript from '../../Image/Skills/javascript.svg'
import html from '../../Image/Skills/html.svg'
import css from '../../Image/Skills/css.svg'
import react from '../../Image/Skills/react.svg'
import python from '../../Image/Skills/python.svg'

function Skills(){
    return (
        <div className={styles.skill} id="Skill">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={python}></img>
            </div>
        </div>
    )
}

export default Skills
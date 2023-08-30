import styles from './Projects.module.css'
import ButtonB from '../Elements/ButtonB'
import Card from '../Elements/Card'
import lp from '../../Image/Projects/lp.svg'
import desafio from '../../Image/Projects/desafio.svg'

function Projects(){
    return (
        <div className={styles.projects} id='Project'>
            <h1> Projetos </h1>
            <Card 
            img={lp} 
            title="LP - DNC" 
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo="https://github.com/gabrielvalentesjc/projeto-landing-page"
            site="https://inspiring-blancmange-7363ec.netlify.app/"
            />
            <Card 
            img={desafio} 
            title="LP - Tradição Arquitetura" 
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para o ciclo base na formação em tecnologia"
            repo="https://github.com/gabrielvalentesjc/Desafio1"
            site="https://tradicaoarquitetura.netlify.app/"
            />
            <section className={styles.botao} >
                <ButtonB text='Acesse meu repositório' link='https://github.com/gabrielvalentesjc'/>
            </section>
        </div>
    )
}

export default Projects
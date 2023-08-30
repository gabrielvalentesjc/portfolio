import styles from './Presentation.module.css'
import ButtonA from '../Elements/ButtonA'

function Presentation(){
    return (
        <div className={styles.presentation} id="Presentation">
            <h3><strong>Bem-vindo ao meu Portfólio</strong></h3>
            <h1> Olá, eu sou Gabriel Valente</h1>
            <p>
                Sou um entusiasta da tecnologia em constante evolução, empenhado em me tornar <br/>
                um desenvolvedor full stack habilidoso. Estou comprometido em criar soluções <br/>
                eficazes e elegantes que não apenas resolvam desafios técnicos, mas também <br/>
                proporcionem experiências técnicas aos usuários.  Minha jornada na programação <br/>
                é alimentada por uma paixão inabalável pela inovação e pelo mundo digital. <br/>
            </p>
            <ButtonA link='https://github.com/gabrielvalentesjc' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation
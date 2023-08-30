import styles from './Presentation.module.css'
import ButtonA from '../Elements/ButtonA'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Gabriel Valente', 'Desenvolvedor!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return() => {clearInterval(ticker)}

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    } 

    return (
        <div className={styles.presentation} id="Presentation">
            <h3><strong>Bem-vindo ao meu Portfólio</strong></h3>
            <h1> Olá, eu sou {text}</h1>
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
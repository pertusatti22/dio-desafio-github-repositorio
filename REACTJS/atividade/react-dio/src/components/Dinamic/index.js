import {useState} from 'react';
import Button from '../Button';

const Dinamic = () => {
    
    const [valor, setValor] = useState(0)

    function Adicionar (){
        setValor(valor+1)
    }
    
    function Remover (){
        setValor(valor-1)
    }

    function Zerar (){
        setValor(valor-valor)
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button
                className="btn btn-success"
                onClick={Adicionar}
                >
                    Adicionar
                </Button>   
                <Button
                className="btn btn-danger"
                onClick={Remover}
                >
                    Remover
                </Button>  
                <Button
                className="btn btn-warning"
                onClick={Zerar}
                >
                    Zerar contagem
                </Button>  
                <p className="card-text">{valor}</p>
            </div>
        </div>
        
    )
  }
  
export default Dinamic;


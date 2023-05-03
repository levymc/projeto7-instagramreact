import User from "./User"
import Suggestion from "./Suggestion";

export default function Contatos(){
    return (
        <div className="contatos">
            <User />
            <div className="conteudo-contatos">
                <div className='topoContatos'><h4>Segestões para você</h4> <h5>Ver tudo</h5></div>
                <Suggestion />
                
            </div>
        </div>
    )
}


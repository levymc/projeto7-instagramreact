import User from "./User"
import Suggestion from "./Suggestion";

export default function Contatos(){
    return (
        <div className="contatos">
            <User />
            <div className="conteudo-contatos">
                <div className='topoContatos'><h4>Segestões para você</h4> <h5>Ver tudo</h5></div>
                <Suggestion />
                <div className="sobre flex">
                    <text className="pointer"> Sobre </text> • <text className="pointer"> Ajuda </text> • <text className="pointer"> Imprensa </text> • <text className="pointer"> API </text> • <text className="pointer">Carreiras</text> • <text className="pointer">Privacidade</text> • 
                    <text className="pointer">Termos</text> • <text className="pointer">Localizações</text> • <text className="pointer">Contas mais relevantes</text> • <text className="pointer">Hashtags</text> • <br />
                    <text className="pointer">Idioma</text>
                </div>
                <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
            </div>
        </div>
    )
}


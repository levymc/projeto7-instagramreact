import Posts from "./Posts"
import Contatos from "./Contatos"

export default function Conteudo() {
    return (
        <div className="conteudo flex">
            <Posts />
            <Contatos />
        </div>
    )
}
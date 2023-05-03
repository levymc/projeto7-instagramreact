import miniLogo from "../img/miniLogo.svg"
import title from "../img/title.svg"
import person from "../img/person.svg"
import heart from "../img/heart.svg"
import bussola from "../img/bussola.svg"
import aviao from "../img/aviao.svg"

export default function Topo (){
    return (
        <div className="container-topo flex">
            <div className="divLogo flex">
                <div className="mini-logo"><img src={miniLogo} alt="mini-logo" /></div>
                <div className="titulo"><img src={title} alt="Instagram" /></div>
            </div>
            <div className="busca"><input type="text" placeholder="Pesquisar" /></div>
            <div className="iconesDireita flex">
                <img src={aviao} alt="Aviao" />
                <img src={bussola} alt="Bússola" />
                <img src={heart} alt="Coração" />
                <img src={person} alt="Pessoa" />
                </div>
        </div>
    )
};
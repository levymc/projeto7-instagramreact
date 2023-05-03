import miniLogo from "../img/miniLogo.svg"

export default function Topo (){
    return (
        <div className="container-topo flex">
            <div className="divLogo flex">
                <div className="mini-logo"><img src={miniLogo} alt="mini-logo" /></div>
                <div className="titulo">Instagram</div>
            </div>
            <div className="busca"><input type="text" placeholder="Pesquisar" /></div>
            <div className="iconesDireita">ICONES</div>
        </div>
    )
};
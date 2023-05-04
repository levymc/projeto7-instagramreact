import ruivo from "../img/ruivo.png"
import chatbubble from "../img/chatbubble.svg"
import heart from "../img/heart.svg"
import aviao from "../img/aviao.svg"
import marcador from "../img/marcador.svg"

export default function Post(){
    const dados = [
        {
            userImage: ruivo,
            userName: "levymc", 
            urlImage: ruivo,
            quemCurtiu: "frederico",
            imgQuemCurtiu: ruivo,
            qntsPessoas: 199823
        }
    ]
    return(
        <>
            {dados.map((dado) =>
                <div className="post">
                    <div className="userName flex">
                        <img src={dado.urlImage} className="miniImage" alt="" />
                        <h3>{dado.userName}</h3>
                    </div>
                    <img className="postImage" src={dado.userImage} alt={dado.userName} />
                    <div className="icones flex">
                        <img className="iconJump" src={heart} alt="Heart" />
                        <img className="iconJump" src={chatbubble} alt="Chatbubble" />
                        <img className="iconJump" src={aviao} alt="Airplane" />
                        <img className="iconJump marcador" src={marcador} alt="Marcador" />
                    </div>
                    <div className="legenda flex">
                        <img src={dado.imgQuemCurtiu} className="imageQuemCurtiu" alt="" /> <h3>Curtido por {dado.quemCurtiu} e outras {dado.qntsPessoas} pessoas</h3>
                    </div>
                    
                </div>
            )}
            
        </>
        
    )
}
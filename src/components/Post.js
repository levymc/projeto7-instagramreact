import ruivo from "../img/ruivo.png"
import chatbubble from "../img/chatbubble.svg"
import heart from "../img/heart.svg"
import aviao from "../img/aviao.svg"
import marcador from "../img/marcador.svg"
import pontinhos from "../img/pontinhos.svg"

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
                <div className="post" data-test="post">
                    <div className="userName flex">
                        <img src={dado.urlImage} className="miniImage" alt="" />
                        <h3>{dado.userName}</h3>
                        <img className="pontinhos pointer" src={pontinhos} alt="Pontinhos" />
                    </div>
                    <img className="postImage" data-test="post-image" src={dado.userImage} alt={dado.userName} />
                    <div className="icones flex">
                        <img className="iconJump" src={heart} data-test="like-post" alt="Heart" />
                        <img className="iconJump" src={chatbubble} alt="Chatbubble" />
                        <img className="iconJump" src={aviao} alt="Airplane" />
                        <img className="iconJump marcador" data-test="save-post" src={marcador} alt="Marcador" />
                    </div>
                    <div className="legenda flex">
                        <img src={dado.imgQuemCurtiu} className="imageQuemCurtiu" alt="" /> <h3 data-test="likes-number">Curtido por {dado.quemCurtiu} e outras {dado.qntsPessoas} pessoas</h3>
                    </div>
                    
                </div>
            )}
            
        </>
        
    )
}
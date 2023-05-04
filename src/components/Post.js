import ruivo from "../img/ruivo.png"

export default function Post(){
    const dados = [
        {
            userImage: ruivo,
            userName: "levymc", 
            urlImage: ruivo,
            quemCurtiu: "frederico",
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
                    <div className="legenda flex">
                        img <h3>Curtido por {dado.quemCurtiu} e outras {dado.qntsPessoas} pessoas</h3>
                    </div>
                    
                </div>
            )}
            
        </>
        
    )
}
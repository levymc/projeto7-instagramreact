import lapis from "../img/lapis.svg"
import ruivo from "../img/ruivo.png"
import kevin from "../img/kevin.PNG"


export default function Contatos(){

    function promptImage (){
        let image = document.getElementById("userImg");
        let newImage = prompt("Qual o link da outra imagem?")
        image.src = newImage
    }

    function promptName (){
        let usuario = document.getElementById("usuario");
        let newName = prompt("Digite o novo nome de usuário");
        usuario.innerHTML = '';
        usuario.innerHTML += newName
        document.querySelector("#lapis").removeEventListener("click", promptName);
    }

    const contatos = [
        {
            nome: "kevin",
            image: kevin
        },
        {
            nome: "kevin",
            image: kevin
        },
        {
            nome: "kevin",
            image: kevin
        },
    ];
    return (
        <div className="contatos">
            <div className="user flex"><img onClick={promptImage} id="userImg" src={ruivo} alt="Eu" /><h4 id="usuario">levymc</h4><img onClick={promptName} id="lapis" src={lapis} alt="Lapis" /></div>
            <div className="conteudo-contatos">
                <div className='topoContatos'><h4>Segestões para você</h4> <h5>Ver tudo</h5></div>
                {contatos.map((user) => 
                    <div className="contato">
                        <div className="pacotinho flex">
                            <img src={user.image} alt={user.name} />
                            <div className="escritos">
                                <h4>{user.name}</h4>
                                <h5>Segue Você</h5>
                            </div>
                        </div>
                        <div className="seguir">Seguir</div>
                    </div>
                )}
            </div>
        </div>
    )
}


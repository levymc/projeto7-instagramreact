import lapis from "../img/lapis.svg"
import ruivo from "../img/ruivo.png"

export default function User(){
    function promptImage() {
        let image = document.getElementById("userImg");
        let newImage = prompt("Qual o link da outra imagem?");
      
        if (newImage && newImage.trim() !== "" && (newImage.startsWith("http://") || newImage.startsWith("https://"))) {
          image.src = newImage;
        } else {
          alert("Digite uma URL válida!");
        }
      }

    function promptName (){
        let usuario = document.getElementById("usuario");
        let newName = prompt("Digite o novo nome de usuário");
        usuario.innerHTML = newName && newName.trim() ? newName : usuario.innerHTML;
        document.querySelector("#lapis").removeEventListener("click", promptName);
    }
    return (
        <div className="user flex"><img onClick={promptImage} id="userImg" src={ruivo} alt="Eu" /><h4 id="usuario">levymc</h4><img onClick={promptName} id="lapis" src={lapis} alt="Lapis" /></div>
    )
}
import thais from "../img/thais.png"

export default function Story(){
    const dados = [{
        nome: "thais",
        image: thais
    }]

    return (
        <>
        
            {dados.map((dado) => 
                <div className="container-story">
                    <div className="story flex">
                        <img src={dado.image} alt={dado.nome} />
                    </div>
                    <h3>{dado.nome}</h3>
                </div>
                
                
                )}
        
        </>
    )
}
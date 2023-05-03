import kevin from "../img/kevin.PNG"

export default function Suggestion(){
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
    return <>
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
    </>
}
import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"

export default function Conteudo() {
    return (
        <div className="conteudo flex">
            <div className="posts flex">
                <Stories />
                <Posts />
            </div>
            
            <SideBar />
        </div>
    )
}
import Stories from "./Stories"

export default function Posts() {
    return (
        <div className="posts flex">
            <Stories />
            <div className="conteudo-posts"></div>
        </div>
    )
}
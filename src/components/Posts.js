import Stories from "./Stories"

export default function Posts() {
    return (
        <div className="posts flex">
            <Stories />
            <div className="conteudo-posts flex">
                <div className="post"></div>
                <div className="post"></div>
                <div className="post"></div>
            </div>
        </div>
    )
}
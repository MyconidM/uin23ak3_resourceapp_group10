export default function innhold({title, cat, url}){
    return(
        <article className="recipe-card">
            <h2>{cat}</h2>
            <h3><a href={url}>{title}</a></h3>


        </article>
    )
}
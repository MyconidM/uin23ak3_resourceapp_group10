export default function innhold({title, cat, url}){
    return(
        <article className="innhold">
            <ul>{ressurser.map((item, index) => item.category === "html" ? <li>{item.title}</li> : null)}</ul>
        </article>
    )
}
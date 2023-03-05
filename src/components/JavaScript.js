import ressurser from "../resources/ressurser";

export default function JavaScript() {
    return (
        <div>
            <h2>JavaScript</h2>

            <ul>{ressurser.map((item, index) => item.category === "javascript" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>
        
    )
}
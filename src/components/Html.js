import ressurser from "../resources/ressurser";

export default function Html() {
    return (
        <ul>{ressurser.map((item, index) => item.category === "html" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
    )
}
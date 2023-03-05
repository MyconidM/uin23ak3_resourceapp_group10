import ressurser from "../resources/ressurser";

export default function CSS() {
    document.getElementById("nav3").classList.add("active")

    return (
        <div>
            <h2 id="text">CSS</h2>

            <ul>{ressurser.map((item, index) => item.category === "css" ? <li><a href={item.url}>{item.title}</a></li> : null)}</ul>
        </div>
    )
}
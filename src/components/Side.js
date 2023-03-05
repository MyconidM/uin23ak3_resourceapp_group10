import {Link}  from "react-router-dom";
import Innhold from "./Innhold";

export default function Side() {
    return (
        <>
        <header>
            <h1><a href="index.html">Ressursarkiv</a></h1>
        </header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Html">Html</Link>
                </li>
                <li>
                    <Link to="/CSS">CSS</Link>
                </li>
                <li>
                    <Link to="/JavaScript">JavaScript</Link>
                </li>
                <li>
                    <Link to="/React">React</Link>
                </li>
                <li>
                    <Link to="/HeadlessCMS">Headless cms</Link>
                </li>
            </ul>
        </nav>

      <Innhold/>
    </>
    )
}
import {Link}  from "react-router-dom";
import Innhold from "./Innhold";
import {HomeIcon} from '@heroicons/react/24/outline'

export default function Side() {
    const nav1 = () => {
        document.getElementById("nav1");
     };
     const nav2 = () => {
        document.getElementById("nav2");
     };
     const nav3 = () => {
        document.getElementById("nav3");
     };
     const nav4 = () => {
        document.getElementById("nav4");
     };
     const nav5 = () => {
        document.getElementById("nav5");
     };
     const nav6 = () => {
        document.getElementById("nav6");
     };


    const NAV1 = () => {
        nav1.classList.add("active")

        nav2.classList.remove("active")
        nav3.classList.remove("active")
        nav4.classList.remove("active")
        nav5.classList.remove("active")
        nav6.classList.remove("active")
    }
    const NAV2 = () => {
        nav2.classList.add("active")

        nav1.classList.remove("active")
        nav3.classList.remove("active")
        nav4.classList.remove("active")
        nav5.classList.remove("active")
        nav6.classList.remove("active")
    }
    const NAV3 = () => {
        nav3.classList.add("active")

        nav2.classList.remove("active")
        nav1.classList.remove("active")
        nav4.classList.remove("active")
        nav5.classList.remove("active")
        nav6.classList.remove("active")
    }
    const NAV4 = () => {
        nav4.classList.add("active")

        nav2.classList.remove("active")
        nav3.classList.remove("active")
        nav1.classList.remove("active")
        nav5.classList.remove("active")
        nav6.classList.remove("active")
    }
    const NAV5 = () => {
        nav5.classList.add("active")

        nav2.classList.remove("active")
        nav3.classList.remove("active")
        nav4.classList.remove("active")
        nav1.classList.remove("active")
        nav6.classList.remove("active")
    }
    const NAV6 = () => {
        nav6.classList.add("active")

        nav2.classList.remove("active")
        nav3.classList.remove("active")
        nav4.classList.remove("active")
        nav5.classList.remove("active")
        nav1.classList.remove("active")
    }

    return (
        <>
        <header>
            <h1><Link to="/">Ressursarkiv</Link></h1>
        </header>
        <nav id="nav">
            <ul id="links">
                <li id="nav1" onClick={NAV1}>
                    <Link to="/"><HomeIcon/></Link>
                </li>
                <li id="nav2" onClick={NAV2}>
                    <Link to="/Html">Html</Link>
                </li>
                <li id="nav3" onClick={NAV3}>
                    <Link to="/CSS">CSS</Link>
                </li>
                <li id="nav4" onClick={NAV4}>
                    <Link to="/JavaScript">JavaScript</Link>
                </li>
                <li id="nav5" onClick={NAV5}>
                    <Link to="/React">React</Link>
                </li>
                <li id="nav6" onClick={NAV6}>
                    <Link to="/HeadlessCMS">Headless cms</Link>
                </li>
            </ul>
        </nav>

      <Innhold/>
    </>
    )
}
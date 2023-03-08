import {Link}  from "react-router-dom";
import Innhold from "./Innhold";
import {HomeIcon} from '@heroicons/react/24/outline'

export default function Side() {
    const ActiveAdd = (nr) => {
        document.getElementById("nav"+nr).classList.add("active");
    };
    const ActiveRemove = (nr) => {
        document.getElementById("nav"+nr).classList.remove("active");
    };


    const NAV1 = () => {
        ActiveRemove(2);
        ActiveRemove(3);
        ActiveRemove(4);
        ActiveRemove(5);
        ActiveRemove(6);
        
        ActiveAdd(1);
    }
    const NAV2 = () => {
        ActiveAdd(2);

        ActiveRemove(1);
        ActiveRemove(3);
        ActiveRemove(4);
        ActiveRemove(5);
        ActiveRemove(6);
    }
    const NAV3 = () => {
        ActiveAdd(3);

        ActiveRemove(2);
        ActiveRemove(1);
        ActiveRemove(4);
        ActiveRemove(5);
        ActiveRemove(6);
    }
    const NAV4 = () => {
        ActiveAdd(4);

        ActiveRemove(2);
        ActiveRemove(3);
        ActiveRemove(1);
        ActiveRemove(5);
        ActiveRemove(6);
    }
    const NAV5 = () => {
        ActiveAdd(5);

        ActiveRemove(2);
        ActiveRemove(3);
        ActiveRemove(4);
        ActiveRemove(1);
        ActiveRemove(6);
    }
    const NAV6 = () => {
        ActiveAdd(6);

        ActiveRemove(2);
        ActiveRemove(3);
        ActiveRemove(4);
        ActiveRemove(5);
        ActiveRemove(1);
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
                    <Link to="/HeadlessCMS">Sanity</Link>
                </li>
            </ul>
        </nav>

      <Innhold/>
    </>
    )
}
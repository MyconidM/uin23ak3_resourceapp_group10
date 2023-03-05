import ressurser from '../resources/ressurser';
import { Outlet} from "react-router-dom";

export default function Innhold(){
    return(
        <article className="innhold">
            <Outlet />
        </article>
        
        
    )
}
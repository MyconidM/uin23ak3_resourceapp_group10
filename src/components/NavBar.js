import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Html from './Html';
import Innhold from './Innhold';
import ressurser from '../resources/ressurser';
import Side from "./Side";
import Home from "./Home";
import CSS from "./CSS";
import JavaScript from "./JavaScript";
import React from "./React";
import HeadlessCMS from "./HeadlessCMS";
let nav = [];
//https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
ressurser.map((item, index) => {
  //item.category === "html" ? <li>{item.title}</li> : null
  //{navE.category.forEach((navE.category) => {
   /* if (!nav.includes(<li>{navE.category}</li>)) {
      nav.push(<li>{navE.category}</li>)
    } 
  //})}
  if (nav != navE.category) {
    console.log("De er forsskjelige wow")
  }
  //nav.push(<li>{navE.category}</li>)
    console.log(nav)*/
  })

  //https://www.w3schools.com/react/react_router.asp
export default function NavBar() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Side />}>
          <Route index element={<Home />} />
            <Route path="Html" element={<Html/>}/>
            <Route path='Innhold' element={<Innhold/>}/>
            <Route path='CSS' element={<CSS/>}/>
            <Route path='JavaScript' element={<JavaScript/>}/>
            <Route path='React' element={<React/>}/>
            <Route path='HeadlessCMS' element={<HeadlessCMS/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      
        /*<nav className="nav">
          <ul>
            <li>{nav}</li>
            <li id='css'>css</li>
            <li id='javaS'>javascript</li>
            <li id='react'>react</li>
            <li id='cms'>headless-cms</li>
    </ul>*/
        
          /*<Routes>
              <Route path={}/>
          </Routes>*/
        
        /*</nav>*/
        
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavBar />);



/*
navE.category.forEach(element => {
      if (!nav.includes(element)) {
        nav.push(`<li>${element}</li>`);
      }
    }) 
    
    
    
    navE.category.forEach((navE.category) => {if (!nav.includes(navE.category)) {
    nav.push(`${navE.category} `)
  }  })
  */
import ressurser from '../resources/ressurser';
import Html from './Html'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Innhold from './Innhold';

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
export default function NavBar(nav) {
    return (
      
        {/*<nav className="nav">
          <ul>
            <li>{nav}</li>
            <li id='css'>css</li>
            <li id='javaS'>javascript</li>
            <li id='react'>react</li>
            <li id='cms'>headless-cms</li>
    </ul>*/}
        <BrowserRouter>
          <Routes>
              <Route></Route>
          </Routes>
        </BrowserRouter>
        {/*</nav>*/}
        
    );
}

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
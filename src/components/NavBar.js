import ressurser from '../resources/ressurser';
let nav = [];
//https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
ressurser.map((navE, index) => {
  navE.category.forEach((navE.category[index]) => {if (!nav.includes(navE.category[index])) {
    nav.push(`${navE.category} `)
  }  })
  //nav.push(`${navE.category} `)
    console.log(navE.category)
  })
export default function NavBar() {
    return (
      
        <nav className="nav">
          <ul>{nav}</ul>
        </nav>
        
    )
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
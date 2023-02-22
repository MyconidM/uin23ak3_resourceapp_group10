export default function nav() {
    let navBar = ''
    for (let i = 0; i< resources.length; i++){
        navBar += `<span id="nav${i}" onclick="innhold(${i})">${resources[i].category}</span>`
    }
    document.getElementById("nav").innerHTML = navBar
}
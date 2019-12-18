// const baseURL = "https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20"
const baseURL = "https://pokeapi.co/api/v2/pokemon/"

//const key =url:"https://pokeapi.co/api/v2/evolution-chain/1/" 
// let url.display = 'none';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
//RESULTS SECTION
const section = document.querySelector('section');
// 3 adding capture methods for future actions


searchForm.addEventListener('submit', fetchResults);
//nextBtn.addEventListener('click', nextPage); //3
//previousBtn.addEventListener('click', previousPage);

let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
let displayNav = false;

function fetchResults(e) {
    e.preventDefault();
    console.log('testing ground')
    url = `${baseURL}${searchTerm.value}/`;
    console.log("URL:", url);
    console.log(searchTerm.value);

    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        }).then(function (json) {
            displayResults(json);
        })
        .catch(error => console.log(error))
}

// if (search.length === 0) {
//     console.log("No results");
// }

let clearfix = document.createElement('div')
let nameHeader = document.createElement('h1');
let imgTwo = document.createElement('img');
imgTwo.setAttribute('id','imgTwo');
section.appendChild(nameHeader);
section.appendChild(imgTwo);
clearfix.setAttribute('name','imgTwo');

function displayResults(json) {
    
    let name = json.name;
    console.log(name)
    nameHeader.innerText = name;
    if(json.sprites.front_default.length > 0) {
        imgTwo.src = json.sprites.front_default;
        imgTwo.alt = "Pokemon picture"
        console.log(imgTwo);
    }
    // let img = json.sprites.front_default.length>0;
    

    
    

    // while (section.firstChild) {
    //     section.removeChild(section.firstChild);
    // }
    //if (find.length === 0) {
     //   console.log("No Results");
    //}
    //else {
    //    for (let i = 0; i < find.length; i++) {
     //       let find = document.createElement('div.find');
    //        let clearfix = document.createElement('div');
     //       let current = find[i];
     //       console.log("Current:", current);
            // current ties them together to show the list  API to headline   
            // link.href = current.web_url;
           
            // para.textContent = 'Keywords: '; //3  keywords are words in the boxes on search page

            //4
            // for (let j = 0; j < current.keywords.length; j++) {
            //     //5
            //     let span = document.createElement('span');
            //     //6
            //     span.textContent += current.keywords[j].value + ' ';
            //     //7
            //     para.appendChild(span);
            // }
        }

        // clearfix.setAttribute('class', 'clearfix');

        // search.appendChild(heading);
        // author.appendChild(link);
        // book.appendChild(img);
        // title.appendChild(para);
        // search.appendChild(clearfix);
        // section.appendChild(search);
    




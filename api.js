const baseURL = "https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20"

//const key =url:"https://pokeapi.co/api/v2/evolution-chain/1/" 
// let url.display = 'none';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('.submit');
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
console.log('PageNumber:', pageNumber);
let displayNav = false;

function fetchResults(e) {
    e.preventDefault();
     url = baseURL + searchTerm.value;
    //url = baseURL + searchTerm.value;
    console.log("URL:", url);

 fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        }).then(function (json) {
            displayResults(json);
        });
     }
      if (search.length === 0) {
     console.log("No results");
      }
    function displayResults(json) {
        let search = json.response.docs;
        while (section.firstChild) {
        section.removeChild(section.firstChild);
        }
        if (search.length === 0) {
       console.log("No Results");
       }
        else {
         for (let i = 0; i < search.length; i++) {
            let search = document.createElement('search');
            let clearfix = document.createElement('div');
            let current = search[i];
            console.log("Current:", current);
                                // current ties them together to show the list  API to headline   
                                link.href = current.web_url;
                                link.textContent = current.headline.main;
                                ado
                                para.textContent = 'Keywords: '; //3  keywords are words in the boxes on search page

                                //4
                                for (let j = 0; j < current.keywords.length; j++) {
                                    //5
                                    let span = document.createElement('span');
                                    //6
                                    span.textContent += current.keywords[j].value + ' ';
                                    //7
                                    para.appendChild(span);

                                }
                            }

                            clearfix.setAttribute('class', 'clearfix');

                            search.appendChild(heading);
                            author.appendChild(link);
                            book.appendChild(img);
                            title.appendChild(para);
                            search.appendChild(clearfix);
                            section.appendChild(search);
                        }
                    }
                
            
        
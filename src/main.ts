import './style.css'

let homePageContainer: HTMLElement = document.getElementById('homePageContainer')!;


function appendHomePageHtml() {
let homePage = document.createElement('div');
homePage.classList.add('homePageContainer');

let header = document.createElement('header');
let nav = document.createElement('nav');

let pageTitle = document.createElement('h1');
pageTitle.innerText = "Ala Hojat";

let artBtn = document.createElement('button');
artBtn.innerText = "mixed media";

let photoBtn = document.createElement('button');
photoBtn.innerText = "photography";

nav.append(pageTitle, artBtn, photoBtn);
header.append(nav);
homePage.append(header);
homePageContainer.append(homePage);
}


function printHomePage() {
    appendHomePageHtml();
    console.log("hej");

}

printHomePage();

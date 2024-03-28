import './style.css'

let homePageContainer: HTMLElement = document.getElementById('homePageContainer')!;
let artContainer: HTMLElement = document.getElementById('artContainer')!;
let photoContainer: HTMLElement = document.getElementById('photoContainer')!;



function appendHomePageHtml() {
let homePage = document.createElement('div');
homePage.classList.add('homePageContainer');

let header = document.createElement('header');
let nav = document.createElement('nav');

let pageTitle = document.createElement('h1');
pageTitle.innerText = "Ala Hojat";

let artBtn = document.createElement('button');
artBtn.innerText = "mixed media";
artBtn.addEventListener('click', printArtPage);


let photoBtn = document.createElement('button');
photoBtn.innerText = "photography";
photoBtn.addEventListener('click', printPhotoPage);

nav.append(pageTitle, artBtn, photoBtn);
header.append(nav);
homePage.append(header);
homePageContainer.append(homePage);

}

function goBackToHomePageBtn() {
    printHomePage();
    artContainer.innerHTML = "";
}

function printArtPage() {
    console.log("printing artpage");
    homePageContainer.innerHTML = "";

    let goBackBtn: HTMLElement = document.createElement('button');
    goBackBtn.innerText = "Home";
    goBackBtn.classList.add('goBackBtn');
    goBackBtn.addEventListener('click', goBackToHomePageBtn)

    let artPage = document.createElement('div');
    artPage.classList.add('artPage'); 
    
    let artPageTitle = document.createElement('h2');
    artPageTitle.innerText = "mixed media";

    // printImages
    artPage.append(goBackBtn, artPageTitle);
    artContainer.append(artPage);
}



function printPhotoPage() {
    console.log("printing photopage");
    homePageContainer.innerHTML = "";

    let goBackBtn: HTMLElement = document.createElement('button');
    goBackBtn.innerText = "Home";
    goBackBtn.classList.add('goBackBtn');
    goBackBtn.addEventListener('click', goBackToHomePageBtn);

    let photoPage = document.createElement('div');
    photoPage.classList.add('photoPage'); 
    
    let photoPageTitle = document.createElement('h2');
    photoPageTitle.innerText = "photography";

    // printImages
    photoPage.append(goBackBtn, photoPageTitle);
    photoContainer.append(photoPage);
    
}


function printHomePage() {
    artContainer.innerHTML = "";
    photoContainer.innerHTML = "";
    appendHomePageHtml();
    console.log("hej");

}

printHomePage();

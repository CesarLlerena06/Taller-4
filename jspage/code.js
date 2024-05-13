let body = document.body;

let divHalfBackground = document.createElement('div');
divHalfBackground.className = 'half-background';
body.appendChild(divHalfBackground);

let header = document.createElement('header');
header.style.textAlign = 'center';
divHalfBackground.appendChild(header);

let nav = document.createElement('nav');
nav.className = 'navbar';
nav.style.color = 'black';
header.appendChild(nav);

let ul = document.createElement('ul');
ul.className = 'nav-list';
nav.appendChild(ul);


let liImg = document.createElement('li');
liImg.className = 'nav-item';
ul.appendChild(liImg);

let aImg = document.createElement('a');
liImg.appendChild(aImg);

let imgNav = document.createElement('img');
imgNav.src = 'img/icon5.jpg';
imgNav.alt = '';
aImg.appendChild(imgNav);

let navItems = ['Inicio', 'Servicios', 'Acerca de', 'Contacto'];
navItems.forEach(item => {
    let li = document.createElement('li');
    li.className = 'nav-item';
    ul.appendChild(li);

    let a = document.createElement('a');
    a.href = '#' + item.toLowerCase();
    a.className = 'nav-link';
    a.textContent = item;
    li.appendChild(a);
});


let divSpecialDestination = document.createElement('div');
divSpecialDestination.className = 'destination';
divSpecialDestination.style.border = '1px solid #ccc';
divSpecialDestination.style.width = '300px';
divSpecialDestination.style.padding = '10px';
divHalfBackground.appendChild(divSpecialDestination);

let h3 = document.createElement('h3');
h3.style.backgroundColor = '#e54746';
h3.style.color = 'white';
h3.style.padding = '5%';
h3.textContent = '$8,450';
divSpecialDestination.appendChild(h3);

let pLocation = document.createElement('p');
pLocation.style.fontSize = 'larger';
pLocation.textContent = 'Venice, Italy';
divSpecialDestination.appendChild(pLocation);

let pDesc = document.createElement('p');
pDesc.style.color = '#ccc';
pDesc.style.fontSize = 'small';
pDesc.textContent = 'Travel is free responsive template by templatemo. All image used in this template are from Unsplash';
divSpecialDestination.appendChild(pDesc);

let button = document.createElement('button');
button.style.backgroundColor = '#9ed033';
button.style.color = 'white';
button.style.width = '100%';
button.style.border = 'none';
button.style.padding = '15px';
button.textContent = 'PRE-BOOKING';
divSpecialDestination.appendChild(button);



let divHalfWhite = document.createElement('div');
divHalfWhite.className = 'half-white';
body.appendChild(divHalfWhite);

let divMainContent = document.createElement('div');
divMainContent.className = 'main-content';
divHalfWhite.appendChild(divMainContent);

let divDestinations = document.createElement('div');
divDestinations.className = 'destinations';
divMainContent.appendChild(divDestinations);

let destinations = [
    { title: 'ITALY', img: 'img/italy.jpg', desc: 'Rome, Milan, Naples', offer: 'SILVER HOTEL, 4 NIGHTS, 5 STARS', price: '$1,800 BOOK NOW' },
    { title: 'FRANCE', img: 'img/france.jpg', desc: 'Paris, Marseille, Lyon', offer: 'NEW PALACE, 5 NIGHTS, 5 STARS', price: '$1,200 BOOK NOW' },
    { title: 'GERMANY', img: 'img/germany.jpg', desc: 'Berlin, Hamburg Munich', offer: 'LUX HOTEL, 5 NIGHTS, 6 STARS', price: '$1,300 BOOK NOW' },
    { title: 'SPAIN', img: 'img/spain.jpg', desc: 'Madrid, Barcelona, Valencia', offer: 'GOOD HOTEL, 4 NIGHTS, 6 STARS', price: 'GOOD HOTEL BOOK NOW' }
];

destinations.forEach(destination => {
    let divDestination = document.createElement('div');
    divDestination.className = 'destination';
    divDestination.style.border = '1px solid #ccc';
    divDestination.style.width = '300px';
    divDestination.style.padding = '10px';
    divDestinations.appendChild(divDestination);

    let h3 = document.createElement('h3');
    h3.style.backgroundColor = '#9ed033';
    h3.style.color = 'white';
    h3.style.padding = '10px';
    h3.textContent = destination.title;
    divDestination.appendChild(h3);

    let img = document.createElement('img');
    img.src = destination.img;
    img.alt = destination.title;
    img.style.width = '100%';
    img.style.height = 'auto';
    divDestination.appendChild(img);

    let pDesc = document.createElement('p');
    pDesc.textContent = destination.desc;
    divDestination.appendChild(pDesc);

    let pOffer = document.createElement('p');
    pOffer.style.color = '#e54746';
    pOffer.textContent = destination.offer;
    divDestination.appendChild(pOffer);

    let button = document.createElement('button');
    button.style.backgroundColor = '#9ed033';
    button.style.color = 'white';
    button.style.width = '100%';
    button.style.border = 'none';
    button.style.padding = '15px';
    button.textContent = destination.price;
    divDestination.appendChild(button);
});


let footer = document.createElement('footer');
divHalfWhite.appendChild(footer);

let divFooterIcons = document.createElement('div');
divFooterIcons.className = 'footer-icons';
footer.appendChild(divFooterIcons);

let icons = ['1', '2', '3', '1', '2'];
icons.forEach(icon => {
    let img = document.createElement('img');
    img.src = 'img/' + icon + '.jpg';
    img.alt = 'icon' + icon;
    divFooterIcons.appendChild(img);
});

let pCopyright = document.createElement('p');
pCopyright.style.textAlign = 'center';
pCopyright.textContent = '© 2024 Travel - The World Awaits';
divHalfWhite.appendChild(pCopyright);




let style = document.createElement('style');
style.textContent = `
body {
    font-family: Arial, sans-serif;
}

.half-background {
    background-image: url('img/viasdetren.jpg');
    background-size: cover;
    height: 70vh; 
}

.half-white {
    background-color: white;
    height: 30vh; 
}



.navbar {
    background-color: #F7F7F7; 
    overflow: hidden;
  }
  
  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    float: left;
  }
  
  .nav-link {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  .nav-link:hover {
    background-color: #9ed033;
    color: black;
  }
  

header {
    background-color: #F7F7F7;
    padding: 10px;
    text-align: center;
    color: white;
}

.main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
.offer {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    width: 80%;
    text-align: center;
}
.destinations {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}
.destination {
    text-align: center; 
    width: 23%;
    margin: 10px; 
    border: 1px solid #ccc; 
    padding: 10px; 
    border-radius: 5px; 
    background-color: #f0f0f0;
 }
 
 .footer-icons {
    display: flex;
    justify-content: center;
}

p{
    font-size: small;
}
`;
document.head.appendChild(style);

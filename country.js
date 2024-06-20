function createAndAppendElement(elementType, elementId) {
    const parent = document.createElement(elementType);
    parent.id = elementId;
    document.body.appendChild(parent);
}
createAndAppendElement('div', 'details');
createAndAppendElement('div', 'parent');



fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => display(data));

const display = countries => {
    const parent = document.getElementById('parent');
    countries.forEach(country => {
        const homeInterface = document.createElement('div');
        homeInterface.className = 'homeStyle';
        homeInterface.innerHTML = `<h1 class='name'>${country.name.common}</h1>
                <p>${country.ccn3}</p>
                <p>${country.continents[0]}</p>
                <img style="display: none;" src="${country.flags.png}" alt="">
                
                <button onclick="showInTheCurrentDiv(this)">view Flag</button>`;
        parent.appendChild(homeInterface);
    });
};


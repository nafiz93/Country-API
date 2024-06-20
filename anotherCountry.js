fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => all(data));


const all = countries => {
    const parent = document.getElementById('parent');
    countries.map(country => {
        const newDiv = document.createElement('div');
        newDiv.className = 'countriesDiv'
        newDiv.innerHTML = ` <h1>${country.name.common}</h1>
        <img class='img' src="${country.flags.png}" alt="">
        <button onclick="countryDetails('${country.name.common}')">details</button>`;
        parent.appendChild(newDiv);

    })
}

const countryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data[0]))
}

const displayDetails = country => {
    const detailParent = document.getElementById('detailOfCountry');
    const existingDaiv = document.getElementById('detailDiv');
    if (existingDaiv) {
        detailParent.removeChild(existingDaiv);
    }
    const { population, region, startOfWeek, flags, name } = country;

    const detailDiv = document.createElement('div');
    detailDiv.id = 'detailDiv';
    detailDiv.innerHTML = `<h1>name:${name.common}</h1>
    <li>${region}</li>
<li>${population}</li>
<li>${startOfWeek}</li>
    <img src="${flags.png}" alt="">`;
    detailParent.appendChild(detailDiv);
}
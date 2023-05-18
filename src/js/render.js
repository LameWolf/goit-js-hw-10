const renderCountryList = (countries, countryList) => {
  const countriesMarkup = countries
    .map(country => {
      const { name, flags } = country;
      const flagSrc = flags?.svg || '';
      const countryName = name?.official || '';
      return `<div class='countries'>
    <img
      class='country__images'
      src='${flagSrc}'
      alt='${countryName}'
      width='75'
      ,
      height='100'
    />
    <h2 class='country__name'>${countryName}</h2>
  </div>`;
    })
    .join('');

  countryList.innerHTML = countriesMarkup;
};

const renderCountryInfo = (country, countryInfo) => {
  const { name, capital, population, flags, languages } = country;

  const languagesList = Object.values(languages).join(', ');

  const flagSrc = flags?.svg || '';
  const countryName = name?.official || '';

  const countryMarkup = `
    <div class='country'>
  <img class='country__image' src='${flagSrc}' alt='${countryName}' height='240' />
  <h2 class='country__name'>${countryName}</h2>
    </div>
<div>
  <ul>
    <li class='country__description'><b>Capital:</b> ${capital}</li>
    <li class='country__description'><b>Population:</b> ${population}</li>
    <li class='country__description'><b>Languages:</b>${languagesList}</li>
  </ul>
</div>
  `;

  countryInfo.innerHTML = countryMarkup;
};

export { renderCountryList, renderCountryInfo };

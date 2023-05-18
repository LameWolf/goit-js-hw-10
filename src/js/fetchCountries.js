const BASE_URL = 'https://restcountries.com/v3.1/name';

const fetchCountries = name => {
  return fetch(
    `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const countries = Array.isArray(data) ? data : [data];
      return countries;
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        throw new Error('Country not found');
      } else {
        throw new Error(error);
      }
    });
};

export default fetchCountries;

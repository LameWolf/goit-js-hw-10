import './css/styles.css';
import debounce from 'lodash.debounce';
import {
  getAboutManyCountriesMessage,
  getFailureMessage,
  getCountryMessage,
} from './js/notification.js';
import { fetchCountries } from './js/fetchCountries.js';
import getRefs from './js/getRefs.js';
import { renderCountryList, renderCountryInfo } from './js/render.js';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

const onSearch = debounce(evt => {
  const searchCountry = evt.target.value.trim();
  clearResults();

  if (!searchCountry) {
    return;
  }

  fetchCountries(searchCountry)
    .then(countries => {
      if (countries.length > 10) {
        getAboutManyCountriesMessage();
        return;
      }

      if (countries.length >= 2 && countries.length <= 10) {
        renderCountryList(countries, refs.countryList);
        return;
      }

      if (countries.length === 1) {
        renderCountryInfo(countries[0], refs.countryInfo);
        getCountryMessage();
        return;
      }
    })
    .catch(error => {
      getFailureMessage();
      if (error.response && error.response.status === 404) {
        getFailureMessage();
      }
    });
}, DEBOUNCE_DELAY);

const clearResults = () => {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
};

refs.searchBox.addEventListener('input', onSearch);

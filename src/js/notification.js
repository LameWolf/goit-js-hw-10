import { Notify } from 'notiflix';

const getAboutManyCountriesMessage = () => {
  Notify.info('Too many matches found. Please enter a more specific name.');
};

const getFailureMessage = () => {
  Notify.failure('Oops, there is no country with that name!');
};

const getCountryMessage = () => {
  Notify.success('Congratulations. You finded a  needed country ;)');
};

export { getAboutManyCountriesMessage, getFailureMessage, getCountryMessage };

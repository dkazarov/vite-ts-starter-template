import { toggleSearch, clickToAnotherPlace, pushButton } from './components/search';

document.addEventListener('DOMContentLoaded', () => {
  //Search
  toggleSearch();
  clickToAnotherPlace();
  pushButton('Enter');
  pushButton('Escape');
});

// @ts-check
import { toggleSearch, clickToAnotherPlace, pushButton } from './components/search';
import { burger, clickOnOutside } from './components/burger';

document.addEventListener('DOMContentLoaded', () => {
  // Burger Menu
  burger();
  clickOnOutside();

  //Search
  toggleSearch();
  clickToAnotherPlace();
  pushButton('Enter');
  pushButton('Escape');
});

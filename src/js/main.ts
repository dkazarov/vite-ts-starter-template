// @ts-check

import { toggleSearch, clickToAnotherPlace, pushButton } from './components/search';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger') as HTMLButtonElement;
  const burgerCenterLine = document.querySelector('.burger__center-line') as HTMLSpanElement;

  burger?.addEventListener('click', () => {
    burger?.classList.toggle('burger-transform--top');
    burgerCenterLine?.classList.toggle('--hide');
  });

  //Search
  toggleSearch();
  clickToAnotherPlace();
  pushButton('Enter');
  pushButton('Escape');
});

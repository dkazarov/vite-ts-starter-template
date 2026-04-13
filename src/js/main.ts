// @ts-check

import { toggleSearch, clickToAnotherPlace, pushButton } from './components/search';

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger') as HTMLButtonElement;
  const burgerCenterLine = document.querySelector('.burger__center-line') as HTMLSpanElement;
  const neaderNav = document.querySelector('.header__nav ') as HTMLUListElement;

  const burger = () => {
    burgerBtn?.addEventListener('click', () => {
      burgerBtn?.classList.toggle('burger-transform--top');
      burgerCenterLine?.classList.toggle('--hide');

      neaderNav?.classList.toggle('header__nav--show');
    });
  };

  burger();

  //Search
  toggleSearch();
  clickToAnotherPlace();
  pushButton('Enter');
  pushButton('Escape');
});

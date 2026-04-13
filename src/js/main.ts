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

  const clickOnOutside = () => {
    neaderNav.addEventListener('click', (event: Event) => {
      if ((event.target as HTMLElement).closest('.header__nav')) {
        neaderNav?.classList.remove('header__nav--show');

        burgerBtn?.classList.remove('burger-transform--top');
        burgerCenterLine?.classList.remove('--hide');
      }
    });
  };

  burger();
  clickOnOutside();

  //Search
  toggleSearch();
  clickToAnotherPlace();
  pushButton('Enter');
  pushButton('Escape');
});

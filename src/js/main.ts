const searchInput = (document.querySelector('.search__input') as HTMLInputElement) || null;
const searcIcon = document.querySelector('.search__icon') as HTMLImageElement;
const clearInputBtn = document.querySelector('.clear__input--search') as HTMLButtonElement;

const toggleSearch = () => {
  searcIcon.addEventListener('click', () => {
    searchInput.classList.toggle('search__input--show');
    clearInputBtn.classList.toggle('clear__input--show');
  });
};

const clickToAnotherPlace = () => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (!target.closest('search')) {
      searchInput?.classList.remove('search__input--show');
      clearInputBtn?.classList.remove('clear__input--show');

      document.removeEventListener;
    }
  });
};

const pushButton = (key: string) => {
  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === key) {
      e.preventDefault();
      searchInput?.classList.remove('search__input--show');
      searchInput.value = '';
    }
  });
};

pushButton('Enter');
pushButton('Escape');

toggleSearch();
clickToAnotherPlace();

const searchInput =
  (document.querySelector(".search__input") as HTMLInputElement) || null;
const searcIcon = document.querySelector(".search__icon") as HTMLImageElement;

searcIcon.addEventListener("click", () => {
  searchInput.classList.toggle("toggle-show-search-icon");
});

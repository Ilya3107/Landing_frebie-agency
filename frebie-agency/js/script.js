const swiper = new Swiper(".review__swiper", {
  loop: true,
  navigation: {
    nextEl: ".review-slide__button-right",
    prevEl: ".review-slide__button-left",
  },
});

let phrases = [
  {
    title: "WHERE GREAT IDEAS COME TO LIFE",
    subtitle:
      "Passionate creative studio helping startups grow their business!",
  },
  {
    title: "WHERE GREAT IDEAS COME TO LIFE",
    subtitle:
      "Passionate creative studio helping startups grow their business!",
  },
  {
    title: "WHERE GREAT IDEAS COME TO LIFE",
    subtitle:
      "Passionate creative studio helping startups grow their business!",
  },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".first__screen-button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let subtitle = document.querySelector(".first__screen-title__description");

button.addEventListener("click", function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, "textContent", randomElement.title);
  smoothly(subtitle, "textContent", randomElement.subtitle);
});
for (let i = 0; i < 3; i = i + 1) {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, "textContent", phrases[i].title);
  smoothly(subtitle, "textContent", phrases[i].subtitle);
}

// Плавный переход к блокам
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

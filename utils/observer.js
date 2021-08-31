const intro = document.querySelector("#introArticle");
const header = document.querySelector("#header");
const username = document.querySelector("#username");

const usernameOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

const fadeIn = () => {
  intro.classList.remove("hidden");
  intro.classList.add("visible");
  header.classList.remove("visible");
  header.classList.add("hidden");
};

const fadeOut = () => {
  intro.classList.remove("visible");
  intro.classList.add("hidden");
  header.classList.remove("hidden");
  header.classList.add("visible");
};

const usernameObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      fadeOut();
    } else {
      fadeIn();
    }
  });
}, usernameOptions);

usernameObserver.observe(username);

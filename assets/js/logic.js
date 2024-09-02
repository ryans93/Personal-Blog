// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
let mode = localStorage.getItem("mode");

document.getElementById("toggle").addEventListener("click", function () {
  if (mode === "light" || !mode) {
    localStorage.setItem("mode", "dark");
    mode = "dark";
  }
  else {
    localStorage.setItem("mode", "light");
    mode = "light";
  }
  setMode(mode);
})

function setMode(mode) {
  let body = document.body;
  let toggle = document.getElementById("toggle");
  let aside = document.getElementsByTagName("aside")[0];

  if (mode === "dark") {
    toggle.textContent = "🌙";
    body.setAttribute("class", "dark");
    if (aside !== undefined)
      aside.style.background = "linear-gradient( var(--light-accent), var(--action-accent),var(--dark-accent))";
  }
  else {
    toggle.textContent = "☀️";
    body.setAttribute("class", "light");
    if (aside !== undefined)
      aside.style.background = "linear-gradient( var(--light-accent), var(--circle-color),var(--dark-accent))";
  }
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  let blogs = localStorage.getItem("blogs");
  return !blogs ? [] : JSON.parse(blogs);
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blog) {
  let blogs = readLocalStorage();
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

setMode(mode);
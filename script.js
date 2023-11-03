const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const regionSelect = document.getElementById("region");
const idInput = document.getElementById("id");
const messageTextarea = document.getElementById("message");
const uploadFile = document.getElementById("upload-pokedex");

// Alert submit form
function alertFunction() {
  if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "" || regionSelect.value === "" || idInput.value === "" || messageTextarea.value === "") {
    alert("Please fill all the fields");
    return false;
  } else alert("Form submitted successfully");
  return true;
}

// Alert upload image
uploadFile.addEventListener("change", function () {
  if (this.files.length < 2) {
    alert("Please upload at least 2 images");
    this.value = "";
  } else if (this.files.length > 2) {
    alert("Do not upload more than 2 images");
    this.value = "";
  }
});

//scroll change color transition
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    if (localStorage.getItem("mode") === "dark") {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Dark mode background
    } else {
      navbar.style.backgroundColor = "rgba(53, 53, 166, 0.8)"; // Light mode background
    }
    navbar.classList.add("dark-mode"); // Add the dark-mode class
  } else {
    navbar.style.backgroundColor = localStorage.getItem("mode") === "dark" ? "#000" : "#3535a6";
    navbar.classList.remove("dark-mode"); // Remove the dark-mode class if not in dark mode
  }
});

// Add padding to the h1 element when a link in the navbar is clicked
document.querySelectorAll("#navbar a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substring(1); // Get the target element's ID
    var targetElement = document.getElementById(targetId);
    var navbarHeight = document.getElementById("navbar").offsetHeight;

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });

      var h1Element = document.querySelector("h1");
      h1Element.style.paddingTop = "1rem";
    }
  });
});

//Hamburger button
const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menubar.classList.toggle("active");
});

document.querySelectorAll(".menulink").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menubar.classList.remove("active");
  });
});

//slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//dark mode
const modeToggle = document.getElementById("mode-toggle");
const modeLabel = document.querySelector(".mode-label");
const home = document.getElementById("home");
const badge = document.getElementById("badge");
const navbar = document.getElementById("navbar");
const fieldsets = document.querySelectorAll(".formfield");
const legends = document.querySelectorAll("legend");
const submit = document.querySelector('button[type="submit"]');
// Check local storage for the user's mode preference
const storedMode = localStorage.getItem("mode");

if (storedMode === "dark") {
  enableDarkMode();
  modeToggle.checked = true; // Set the toggle to the dark mode state
} else {
  enableLightMode();
  modeToggle.checked = false; // Set the toggle to the light mode state
}

// Toggle dark/light mode when the switch is clicked
modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  modeLabel.innerHTML = "&#9728;";
  home.classList.add("dark-mode");
  badge.classList.add("dark-mode");
  navbar.classList.add("dark-mode");
  menubar.classList.add("dark-mode");
  submit.classList.add("dark-mode");
  fieldsets.forEach((fieldset) => {
    fieldset.classList.add("dark-mode");
  });
  legends.forEach((legend) => {
    legend.classList.add("dark-mode");
  });

  navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  localStorage.setItem("mode", "dark");
}

function enableLightMode() {
  document.body.classList.remove("dark-mode");
  modeLabel.innerHTML = "&#128262;";
  home.classList.remove("dark-mode");
  badge.classList.remove("dark-mode");
  navbar.classList.remove("dark-mode");
  menubar.classList.remove("dark-mode");
  submit.classList.remove("dark-mode");
  fieldsets.forEach((fieldset) => {
    fieldset.classList.remove("dark-mode");
  });
  legends.forEach((legend) => {
    legend.classList.remove("dark-mode");
  });

  navbar.style.backgroundColor = "rgba(53, 53, 166, 0.8)";

  localStorage.setItem("mode", "light");
}

// Range level
const range = document.getElementById("level");
const rangeValue = document.querySelector(".range-level span");

range.addEventListener("input", function () {
  rangeValue.textContent = range.value;
  const percent = ((range.value - range.min) / (range.max - range.min)) * 50;
  rangeValue.textContent = `Level ${percent.toFixed(0)}`;
});

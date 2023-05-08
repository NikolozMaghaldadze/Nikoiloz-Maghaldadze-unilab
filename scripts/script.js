const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let hamburger = document.querySelector(".hamburger-wrapper");
let navigation = document.querySelector(".random-sidebar");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  navigation.classList.toggle("active");
});

let formRegistration = document.getElementById("formClass");
let validEmail = document.getElementById("email");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = [];
  let emailValue = document.getElementById("email").value;
  let errorEmail = document.getElementById("error_email");
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(regex)) {
    console.log(emailValue);
    console.log("form submitted !");
    errorEmail.textContent = "Your email submitted!";
    errorEmail.style.color = "greenyellow";
  } else {
    errors.push("your email is invalid!");
    errorEmail.textContent = "Your email is invalid!";
    errorEmail.setAttribute("style", "display:block;");
    errorEmail.style.color = "red";
    validEmail.classList.add("invalid");
    console.log(errors[0]);
    return;
  }
});

let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

let mailForm = document.querySelector(".form-mail");
let Email = document.querySelector(".email-input");

mailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = [];
  let insideText = document.querySelector(".email-input").value;
  let errorEmail = document.getElementById("error_mail");
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (insideText.match(regex)) {
    console.log(insideText);
    console.log("form submitted !");
    errorEmail.textContent = "Your email submitted!";
    errorEmail.style.color = "greenyellow";
  } else {
    errors.push("your email is invalid!");
    errorEmail.textContent = "Your email is invalid!";
    errorEmail.style.color = "white";
    Email.classList.add("invalid");
    console.log(errors[0]);
    return;
  }
});

// Local storage for email addresses in footer

window.onload = function () {
  if (localStorage) {
    document.getElementById("formClass").addEventListener("submit", function () {
        let name = document.getElementById("email").value;
        localStorage.setItem("Email adress", name);
      });
  }
};

"use strict";
let hamburger = document.querySelector(".hamburger-wrapper");
let navigation = document.querySelector(".navigation-sidebar")
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  navigation.classList.toggle("active")
});




let currentPages = 1;
let totalPages;

function getUsersPages(currentPages) {
  fetch("https://reqres.in/api/users?page=" + currentPages, {
    method: "GET",
  })
    .then(function (responseText) {
      if (responseText.status !== 200) {
        throw responseText.status;
      }

      return responseText.json();
    })

    .then(function (responseJS) {
        let divBlock = document.createElement("div");
        divBlock.classList.add("div-list");
        divBlock.setAttribute("id", "div-list");

      const fragment = new DocumentFragment();

      responseJS.data.forEach((x) => {
        let wrapper = document.createElement("div");
        let list = document.createElement("p");
        list.classList.add("names-wrap");
        let image = document.createElement("img");
        image.src = x.avatar;
        wrapper.appendChild(image);

        list.textContent = `${x.first_name} ${x.last_name}`;
        wrapper.appendChild(list);
        divBlock.appendChild(wrapper)
      });
      divBlock.appendChild(fragment);
      document.getElementById("userinfo-2").innerHTML = "";
      document.getElementById("userinfo-2").appendChild(fragment);
      document.getElementById("userinfo-2").appendChild(divBlock);
      totalPages = responseJS.total_pages;
    })
    .catch(function (error) {
      if (error == 404) {
        let paragraph = document.createElement("p");
        paragraph.textContent = "Page not Found!";

        document.getElementById("userinfo-1").appendChild(paragraph);
      }
      if (error == 505) {
        let paragraph = document.createElement("p");
        paragraph.textContent = "Page not Found!";

        document.getElementById("userinfo-1").appendChild(paragraph);
      }
    });
}

document.getElementById("next").addEventListener("click", function () {
  if (currentPages == totalPages) {
    return;
  }
  currentPages += 1;
  getUsersPages(currentPages);
});

document.getElementById("previous").addEventListener("click", function () {
  if (currentPages == 1) {
    return;
  }
  currentPages -= 1;
  getUsersPages(currentPages);
});

getUsersPages(currentPages);



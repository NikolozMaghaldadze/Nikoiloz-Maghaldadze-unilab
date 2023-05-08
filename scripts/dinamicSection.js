let dataArray = [
  {
    imageUrl: "images/grid-images/grid-1.png",
    attribute: "image",
    class: "image-wrapper",
    headerText: "FLIGHT BOOKING",
    information:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    imageUrl: "images/grid-images/grid-2.png",
    attribute: "image",
    class: "image-wrapper",
    headerText: "HOTEL & RESORT BOOKING",
    information:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    imageUrl: "images/grid-images/grid-3.png",
    attribute: "image",
    class: "image-wrapper",
    headerText: "FAMILY TRIP PLANNER",
    information:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    imageUrl: "images/grid-images/grid-4.png",
    attribute: "image",
    class: "image-wrapper",
    headerText: "CRUISE TOUR",
    information:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    imageUrl: "images/grid-images/grid-5.png",
    attribute: "image",
    class: "image-wrapper",
    headerText: "FIRE CAMP",
    information:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    imageUrl: "images/grid-images/grid-6.png",
    attribute: "image",
    class: "image-wrapper",
    headerText: "CORPORATE HOLIDAYS",
    information:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
];

wrapper = document.getElementById("arrayBlock");

dataArray.forEach((currentElement) => {
  contentWrapper = document.createElement("div");
  contentWrapper.setAttribute("class", "content-wrapper");
  image = document.createElement("img");
  image.src = currentElement.imageUrl;
  image.setAttribute("alt", currentElement.attribute);
  image.setAttribute("class", currentElement.class);

  header3 = document.createElement("h3");
  header3.setAttribute("class", "header3");
  header3.innerText = currentElement.headerText;

  paragraph = document.createElement("p");
  paragraph.setAttribute("class", "tour-info");
  paragraph.innerText = currentElement.information;
  contentWrapper.appendChild(image);
  contentWrapper.appendChild(header3);
  contentWrapper.appendChild(paragraph);
  wrapper.appendChild(contentWrapper);
});


let wrapperSections = document.querySelectorAll(".content-wrapper");

wrapperSections.forEach((i) => {
  let body = document.querySelector("body");

  i.addEventListener("click", () => {
    i.classList.toggle("content-wrapper");
    i.classList.toggle("active");
    body.classList.toggle("overlayed");
  });
});

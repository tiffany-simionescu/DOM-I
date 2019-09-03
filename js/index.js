const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Images

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const circleImage = document.getElementById("cta-img");
circleImage.setAttribute("src", siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Anchors - Navigation

let anchors = document.querySelectorAll("nav a");

anchors[0].textContent = siteContent["nav"]["nav-item-1"];
anchors[1].textContent = siteContent["nav"]["nav-item-2"];
anchors[2].textContent = siteContent["nav"]["nav-item-3"];
anchors[3].textContent = siteContent["nav"]["nav-item-4"];
anchors[4].textContent = siteContent["nav"]["nav-item-5"];
anchors[5].textContent = siteContent["nav"]["nav-item-6"];

// H1 - Class cta

let mainHeader = document.querySelector("h1");
// mainHeader.textContent = siteContent["cta"]["h1"];

const lineBreak = document.createElement("br");
const lineBreak2 = document.createElement("br");
const dom = document.createTextNode("DOM");
const is = document.createTextNode("Is");
const awesome = document.createTextNode("Awesome");

mainHeader.appendChild(dom);
// Need to add breaks
mainHeader.appendChild(lineBreak);
mainHeader.appendChild(is);
mainHeader.appendChild(lineBreak2);
mainHeader.appendChild(awesome);

// Button - Class cta

const buttonCta = document.querySelector("button");

buttonCta.textContent = siteContent["cta"]["button"];

// Main Content - h4

const mainContentHeader4 = document.querySelectorAll(".main-content h4");

mainContentHeader4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeader4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeader4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeader4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeader4[4].textContent = siteContent["main-content"]["vision-h4"];

// Main Content - p

const mainContentP = document.querySelectorAll(".main-content p");

mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];

// Contact

const contactHeader4 = document.querySelector(".contact h4");
const contactP = document.querySelectorAll(".contact p");

contactHeader4.textContent = siteContent["contact"]["contact-h4"];
// Need to add a break in address

// const lineBreak3 = createElement("br");
// const contactAddress1 = createTextNode("123 Way 456 Street");
// const contactAddress2 = createTextNode("Somewhere, USA");

contactP[0].textContent = siteContent["contact"]["address"];

// contactP[0].appendChild(contactAddress1);
// contactP[0].appendChild(lineBreak3);
// contactP[0].appendChild(contactAddress2);
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// Footer

const footerP = document.querySelector("footer p");

footerP.textContent = siteContent["footer"]["copyright"];

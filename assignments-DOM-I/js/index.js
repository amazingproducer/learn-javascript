const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// Amend Page Title
let titleStr = document.title;
document.title = titleStr.slice(0,11);
// Populate nav link content
let navItems = Array.from(document.querySelectorAll('body div.container header nav a'));
let navStrings = Object.values(siteContent["nav"]);
navItems.forEach(item => item.textContent = navStrings[navItems.indexOf(item)]);
// Add inner html for h1
let ctaText = document.querySelectorAll("div.cta-text h1")[0];
ctaTextStr = siteContent["cta"]["h1"].split(" ").join("<br> ");
ctaText.innerHTML = ctaTextStr;
// add text to cta button
document.querySelector("div.cta-text button").textContent = siteContent["cta"]["button"];
// Add image to cta
document.querySelector("section.cta img#cta-img").src = siteContent["cta"]["img-src"];
// MAIN CONTENT
// populate main-content
let mainSection = document.querySelector("section.main-content");
// select h4 elements from main-content and create ordered list
let contentHeaders = mainSection.querySelectorAll("div.text-content h4");
// do the same for p elements
let contentParagraphs = mainSection.querySelectorAll("div.text-content p");
let srcContentHeaderKeys = Object.keys(siteContent["main-content"]).filter(i => i.includes("h4"))
let srcContentParagraphKeys = Object.keys(siteContent["main-content"]).filter(i => i.includes("-content"))
// mix in and populate gathered elements
for(let i = 0; i < srcContentHeaderKeys.length; i++) {
  contentHeaders[i].textContent = siteContent["main-content"][srcContentHeaderKeys[i]];
  contentParagraphs[i].textContent = siteContent["main-content"][srcContentParagraphKeys[i]];
}
// handle middle content src
document.querySelector("img.middle-img").src = siteContent["main-content"]["middle-img-src"];
// CONTACT SECTION
// populate sections
let contactHeaders = document.querySelectorAll("section.contact h4");
let contactParagraphs = document.querySelectorAll("section.contact p")
let srcContactHeaderKeys = Object.keys(siteContent["contact"]).filter(i => i.includes("h4"));
let srcContactParagraphKeys = Object.keys(siteContent["contact"]).filter(i => !i.includes("h4"));
for(let i = 0; i < contactHeaders.length; i++) {
  contactHeaders[i].textContent = siteContent["contact"][srcContactHeaderKeys[i]];
}
for(let i = 0; i < contactParagraphs.length; i++) {
  contactParagraphs[i].textContent = siteContent["contact"][srcContactParagraphKeys[i]];
}
// fix newline for address
let contactAddress = document.querySelectorAll("section.contact p")[0];
let revisedContactArray = contactAddress.innerHTML.split(" ");
revisedContactArray.splice(4, 0, "<br>");
let finalContactAddress = revisedContactArray.join(" ");
contactAddress.innerHTML = finalContactAddress;
// FOOTER SECTION
let copyrightRawString = siteContent["footer"]["copyright"];
let footerText = document.querySelector("footer p");
footerText.textContent = copyrightRawString;

// Add new nav sections
let navDemo = document.createElement("a");
navDemo.innerHTML = "Demo";
navDemo.href = "#";
document.querySelector("div.container nav").prepend(navDemo);
let navFaceBook = document.createElement("a");
navFaceBook.innerHTML = "FaceBook";
navFaceBook.href = "#";
document.querySelector("div.container nav").appendChild(navFaceBook);

// Make Nav Green **AFTER** declaring new items
document.querySelectorAll("body div.container header nav a").forEach(i => i.style.color = "green")


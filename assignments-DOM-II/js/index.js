// Your code goes here
// 1: Create event listeners of at least 10 types to make the site more *interactive* 
/* Let's start by trying:
- mouseover and double-click events for each div in the content-pick section
- load event for the body?
- ~~select event for the text-content divs~~ this only works on input text and textarea fields
*/

// Select some elements first, I guess
const sectionText = document.querySelectorAll("div.text-content")
const destinationPicks = document.querySelectorAll("section.content-pick div.destination")

/*
function mouseoverHandler(event) {
    console.log(`"${event.target.innerHTML}" was moused over`)
}
// react to mousing over header
sectionText.forEach(element => element.querySelector("h2").addEventListener("mouseover", mouseoverHandler))
*/

// make a generic handler
function genericHandler(event) {
    if (event.type == "keydown") {
        return console.log(`keydown event detected; ${event.key} captured.`)
    }
    if (event.type == "resize") {
        return console.log(`Resize event detected; size is now ${event.target.innerHeight}x${event.target.innerWidth}`)
    }
    console.log(`${event.type} event triggered for ${event.target}.`)
//    console.log(event)
}
// react to double-clicking paragraph elements in the destination picks
destinationPicks.forEach(element => element.querySelectorAll("p").forEach(paragraph => paragraph.addEventListener("dblclick", genericHandler)))
// react to mousing over destination divs
destinationPicks.forEach(element => element.addEventListener("mouseover", genericHandler))
// react to network disconnection event
window.addEventListener("offline", genericHandler)
// react to network establishment event
window.addEventListener("online", genericHandler)
// react to page load event
window.addEventListener("load", event => console.log("Page has loaded."))
// react to basic keydown event
window.addEventListener("keydown", genericHandler)
// react to window resize event
window.addEventListener("resize", genericHandler)
// react to clipboard copy event
window.addEventListener("copy", event => {
    const copiedText = document.getSelection()
    // since we can't actually see the clipboard using this, let's just modify it
    event.clipboardData.setData("text/plain", copiedText.toString().toLowerCase())
    console.log("copy event triggered: check clipboard contents.")
})
// react to click event
sectionText.forEach(element => element.addEventListener("click", event => console.log("SectionText Clicked.")))
// react to right click (context menu) event
window.addEventListener("contextmenu", event => {
    console.log("Right-click detected; suppressing context menu.") // should disable context menu in page
    event.preventDefault()
})
// *** Stop propagation for nested events
sectionText.forEach(element => element.querySelectorAll("h2").forEach(header => header.addEventListener("click", event => {
    console.log("SectionText Header Clicked.")
    event.stopPropagation()
})))

// *** Prevent navigation elements from refreshing the page
document.querySelectorAll("a.nav-link").forEach(element => element.addEventListener("click", event => event.preventDefault()))

function animatedHandler(event) {
    // *** Stretch: try using green sock library to animate elements
    if (event.type == "mouseenter") {
        return gsap.to(event.target, {duration: 0.5, scale: 1.25})
    }
    if (event.type == "mouseleave") {
        return gsap.to(event.target, {duration: 0.75, scale: 1})
    }
}

function animatedFlipHandler(event) {
    gsap.to(event.target, {duration: 0.5, scale: .5, rotationX: 360})
    setTimeout(() => {
        gsap.to(event.target, {duration: 1.5, scale: 1, rotationX: -360})        
    }, 500);
}
document.querySelector("header.intro img").addEventListener("mouseenter", animatedFlipHandler)
document.querySelectorAll("div.img-content img").forEach(element => element.addEventListener("mouseenter", animatedHandler))
document.querySelectorAll("div.img-content img").forEach(element => element.addEventListener("mouseleave", animatedHandler))

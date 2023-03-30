// console.dir(document);

// document.body.children[1].children[0].href = "https://www.google.com";

// let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://www.google.com";

// anchorElement = document.querySelector("#external-id");
// anchorElement.href = "https://academind.com";

//ADD AN ELEMENT
// 1. Create new element
let newAnchor = document.createElement("a");
newAnchor.href = "https://google.com";
newAnchor.textContent = "\n This is a link to Google!";
// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");
// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchor);

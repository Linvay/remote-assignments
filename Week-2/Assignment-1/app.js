/* 
    Request 1: Click to Change Text
    When the user clicks on the "Welcome Message" block, change the text to "Have a Good Time!".
*/
const bannerText = document.querySelector(".banner-text");
bannerText.addEventListener("click", () => {
    bannerText.textContent = "Have a Good Time!"
})

/*
    Request 2: Click to Show More Content Boxes.
    There are some more content boxes waiting to show. When the user clicks the Call-to-Action
    button, show those hidden content boxes.
 */
const action = document.querySelector(".action");
action.addEventListener("click", () => {
    const sectionBox2 = document.querySelector(".section-box-2").style.display = "block";;
})
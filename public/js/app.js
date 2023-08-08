/* I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students. */

const { reviewData } = window;

// console.log({ reviewData });

document.addEventListener("DOMContentLoaded", function() {
    carousel();
    insertReviews();
})

function insertReviews(){
    let mainBody = document.getElementById("main");
    let reviewContainer = document.createElement("div");
    reviewContainer.className = "cardContainer";
    
    for(let i = 0; i < reviewData.length; i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("div");
        let content = document.createElement("div");
        let rating = document.createElement("div");
        let date = document.createElement("div");
        
        div.className = "card";
        name.className = "review-name";
        date.className = "review-time";

        img.src = reviewData[i].pp;
        img.style.width = '300px';
        img.style.height = '300px';
        name.innerHTML = reviewData[i].name;
        content.innerHTML = reviewData[i].content;

        if(reviewData[i].ct){
            name.style.color = "#0000FF";
        }else{
            name.style.color = "#FFA500";
        }

        if(reviewData[i].rating == 5){
            rating.innerHTML = "★★★★★";
        }else if(reviewData[i].rating == 4){
            rating.innerHTML = "★★★★☆";
        }else if(reviewData[i].rating == 3){
            rating.innerHTML = "★★★☆☆";
        }else if(reviewData[i].rating == 2){
            rating.innerHTML = "★★☆☆☆";
        }else{
            rating.innerHTML = "★☆☆☆☆";
        }

        date.innerHTML = reviewData[i].time;

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(content);
        div.appendChild(rating);
        div.appendChild(date);

        reviewContainer.appendChild(div);

        mainBody.appendChild(reviewContainer);
    }
}

function carousel(){
    let buttons = document.querySelectorAll("[data-carousel-button]")
    buttons.forEach(button =>{
        button.addEventListener("click", () =>{
            let offset = button.dataset.carouselButton === "next" ? 1 : -1;
            let slides = button.closest("[data-carousel]").querySelector("[data-slides]")
            
            let activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if(newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0;
            
            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active
        })
    })
}
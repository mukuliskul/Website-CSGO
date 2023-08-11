/* I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students. */


document.addEventListener("DOMContentLoaded", function() {
    addReview();
})

function addReview(){
    document.getElementById("review-form").addEventListener("submit", function(e){
        e.preventDefault();
        
        let inputName = document.getElementById("name").value;
        let inputContent = document.getElementById("content").value;
        let inputRating = document.getElementById("rating").value;
        let date = "today";
        
        let newReview = {name : inputName, time: date, content : inputContent, rating : inputRating, pp : `/src/pages/reviews/images/pp${num = getRandomInt(9) + 1}.webp`, ct: teamDecider(num)}
        
        window.reviewData.unshift(newReview);
        
        let remove;
        if(remove = document.querySelectorAll(".cardContainer")){
            remove.forEach((element) => {
                element.parentNode.removeChild(element);
            });
        }
        insertReviews();
        document.getElementById("review-form").reset();
    })
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function teamDecider(number){
    return number % 2 === 0;
}

let num;
window.reviewData = [
    {
        name : "Mukul Sharma",
        time : "2 days ago",
        content : "Professor please grade me",
        rating : "5",
        pp : `/src/pages/reviews/images/pp${ num = getRandomInt(9) + 1}.webp`,
        ct : teamDecider(num)
    },
    {
        name : "Elon Musk",
        time : "6 months ago",
        content : "Blaze your Glory - X",
        rating : "3",
        pp : `/src/pages/reviews/images/pp${ num = getRandomInt(9) + 1}.webp`,
        ct : teamDecider(num)
    },
    {
        name : "Mark Zuckerberg",
        time : "6 months ago",
        content : "I am gonna knife Elon at A site.",
        rating : "1",
        pp : `/src/pages/reviews/images/pp${ num = getRandomInt(9) + 1}.webp`,
        ct : teamDecider(num)
    },
    {
        name : "Kanye west",
        time : "8 months ago",
        content : "I love kanye",
        rating : "5",
        pp : `/src/pages/reviews/images/pp${ num = getRandomInt(9) + 1}.webp`,
        ct : teamDecider(num)
    },
    {
        name : "Robert J Oppenheimer",
        time : "20 years ago",
        content : "I love grenades",
        rating : "4",
        pp : `/src/pages/reviews/images/pp${ num = getRandomInt(9) + 1}.webp`,
        ct : teamDecider(num) 
    },
];

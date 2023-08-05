/* I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students. */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.reviewData = [
    {
        name : "Robin Kawasaki",
        id: 1,
        time : "6 months ago",
        content : "My best childhood memory",
        rating : "3",
        pp : `/src/pages/reviews/images/pp${getRandomInt(5) + 1}.jpg`
    },
    {
        name : "Kanye west",
        id: 2,
        time : "8 months ago",
        content : "I love kanye",
        rating : "5",
        pp : `/src/pages/reviews/images/pp${getRandomInt(5) + 1}.jpg` 
    }
];

// ================= HERO SLIDESHOW =================
const slides = [
    "./Images/home.jpg",
    "./Images/home2.jpg",
    "./Images/home3.jpg",
    "./Images/home4.jpg"
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");
const slideImg = document.querySelector(".hero .home-img");

// Create dots container
const dotsContainer = document.createElement("div");
dotsContainer.className = "dots-container";
heroSection.appendChild(dotsContainer);

// Create left/right arrows
const leftArrow = document.createElement("div");
leftArrow.className = "arrow left-arrow";
leftArrow.innerHTML = "&#10094;"; // left arrow symbol
heroSection.appendChild(leftArrow);

const rightArrow = document.createElement("div");
rightArrow.className = "arrow right-arrow";
rightArrow.innerHTML = "&#10095;"; // right arrow symbol
heroSection.appendChild(rightArrow);

// Create dots dynamically
const dots = [];
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", () => {
        showSlide(i);
        resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
});

// Show slide with fade motion
function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slideImg.classList.remove("active");
    setTimeout(() => {
        slideImg.src = slides[currentIndex];
        slideImg.classList.add("active");
    }, 200); // slight delay for fade effect

    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}

// Left/right arrows click
leftArrow.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    resetAutoSlide();
});
rightArrow.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    resetAutoSlide();
});

// Auto slide every 5 seconds
let autoSlideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
}

// Initial slide
slideImg.classList.add("active");
showSlide(currentIndex);

// ================= EVENTS DATA =================
const categories = [
    {
        title: "Entertainment Events 🎭",
        events: [
            {name:"Graduation & Convocation", desc:"Celebrate academic achievements with formal graduation ceremonies, speeches, and memorable moments.", 
            img:"./images/grad.jpg"},

            {name:"Eid Celebration", desc:"Celebrate the joy of Eid with community gatherings, music, and festive activities.", 
            img:"./images/eid.jpg"},

            {name:"Pre-Wedding", desc:"Colorful and traditional ceremonies like Mehendi and Haldi to celebrate upcoming weddings.", 
            img:"./images/pre_wedding.jpg"},

            {name:"Birthday Party", desc:"Fun-filled birthday celebrations with cake cutting, games, and entertainment.", 
            img:"./images/birthday.jpg"},

            {name:"Haldi-Ceremony", desc:"Traditional pre-wedding Haldi rituals adding color, happiness, and fun to weddings.", 
            img:"./images/haldi.jpg"}
        ]
    },
    {
        title: "Educational & Professional Events 📚",
        events: [
            {name:"Seminar / Workshop", desc:"Interactive sessions for learning new skills.", 
            img:"./images/office_seminar.jpg"},

            {name:"Conference / Symposium", desc:"Industry gatherings for knowledge sharing and networking.", 
            img:"./images/mela.jpg"},

            {name:"Webinar / Online Course", desc:"Virtual learning experiences on various topics.", 
            img:"./images/coffee.jpg"},

            {name:"Hackathon / Coding Competition", desc:"Collaborative coding challenges and innovation contests.", 
            img:"./images/housewarming.jpg"}
        ]
    }
];

// ================= EVENTS SHOW 3 + SHOW MORE =================
const eventListContainer = document.getElementById('event-list');
const showMoreBtn = document.getElementById('showMoreBtn');
let showAllEvents = false;

const allEvents = categories.flatMap(cat => cat.events);

function renderEvents(){
    eventListContainer.innerHTML = "";
    const eventsToShow = showAllEvents ? allEvents : allEvents.slice(0,3);
    
    eventsToShow.forEach((ev,index)=>{
        const card = document.createElement('div');
        card.className = 'card';
        card.style.height = "320px";
        card.innerHTML = `
            <img src="${ev.img}" alt="${ev.name}" style="height:150px; object-fit:cover; width:100%;">
            <h4 style="margin:10px 0 5px 0;">${ev.name}</h4>
            <p style="font-size:14px; padding:0 10px;">${ev.desc}</p>
            <button onclick="bookEvent(${index})" style="margin:10px 0;">Book Event</button>
        `;
        eventListContainer.appendChild(card);
    });

    // Show More button style & text
    showMoreBtn.innerText = showAllEvents ? "View Less Events" : "View All Events";
}

if(showMoreBtn){
    showMoreBtn.addEventListener('click', () => {
        showAllEvents = !showAllEvents;
        renderEvents();
    });
}

// Initial render
renderEvents();

// ================= BOOK EVENT =================
function bookEvent(index){
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    if(!loggedUser){
        alert("You must login first!");
        window.location.href = "login.html";
        return;
    }
    const ev = allEvents[index];
    if(!loggedUser.booked.find(e => e.name === ev.name)){
        loggedUser.booked.push(ev);
        sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        alert(`${ev.name} booked successfully!`);
    } else {
        alert("You already booked this event.");
    }
}

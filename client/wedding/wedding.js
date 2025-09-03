const weddingEvents = [
  { name: "Pre-Wedding Ceremony", desc: "Mehendi, Haldi, and other pre-wedding rituals.", img: "../Images/pre_wedding.jpg" },
  { name: "Wedding Day", desc: "Grand celebration with family and friends.", img: "../Images/wedding_day.jpg" },
  { name: "Engagement Ceremony", desc: "Formal engagement celebrations.", img: "../Images/engagement.jpg" }
];

const eventListContainerWed = document.getElementById('wedding-event-list');

weddingEvents.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${ev.img}" alt="${ev.name}" style="height:150px; object-fit:cover; width:100%;">
        <h4 style="margin:10px 0 5px 0;">${ev.name}</h4>
        <p style="font-size:14px; padding:0 10px;">${ev.desc}</p>
    `;
    eventListContainerWed.appendChild(card);
});

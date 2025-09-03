const corporateEvents = [
  {
    name: "Conference / Symposium",
    desc: "Industry gatherings for knowledge sharing and networking.",
    img: "Images/mela.jpg"
  },
  {
    name: "Seminar / Workshop",
    desc: "Interactive sessions for learning new skills.",
    img: "Images/office_seminar.jpg"
  },
  {
    name: "Networking Event",
    desc: "Meet professionals, exchange ideas and opportunities.",
    img: "Images/networking.jpg"
  }
];

const eventListContainer = document.getElementById('corporate-event-list');

corporateEvents.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${ev.img}" alt="${ev.name}" style="height:150px; object-fit:cover; width:100%;">
        <h4 style="margin:10px 0 5px 0;">${ev.name}</h4>
        <p style="font-size:14px; padding:0 10px;">${ev.desc}</p>
    `;
    eventListContainer.appendChild(card);
});

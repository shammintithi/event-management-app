const momentousEvents = [
  { name: "Birthday Party", desc: "Fun-filled birthday celebrations with games and cake.", img: "../Images/birthday.jpg" },
  { name: "Anniversary Celebration", desc: "Celebrate milestones with loved ones.", img: "../Images/anniversary.jpg" },
  { name: "Other Special Occasions", desc: "Customize events for unique moments.", img: "../Images/special_event.jpg" }
];

const eventListContainerMom = document.getElementById('momentous-event-list');

momentousEvents.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${ev.img}" alt="${ev.name}" style="height:150px; object-fit:cover; width:100%;">
        <h4 style="margin:10px 0 5px 0;">${ev.name}</h4>
        <p style="font-size:14px; padding:0 10px;">${ev.desc}</p>
    `;
    eventListContainerMom.appendChild(card);
});

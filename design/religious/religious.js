const eventListContainerRel = document.getElementById('religious-event-list');

fetch('/api/events/religious')
    .then(res => res.json())
    .then(events => {
        events.forEach(ev => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="../Images/${ev.image}" alt="${ev.name}" style="height:150px; object-fit:cover; width:100%;">
                <h4 style="margin:10px 0 5px 0;">${ev.name}</h4>
                <p style="font-size:14px; padding:0 10px;">${ev.description}</p>
            `;
            eventListContainerRel.appendChild(card);
        });
    })
    .catch(err => console.log(err));

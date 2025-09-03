const culinaryEvents = [
  { name: "Food Festival", desc: "Taste delicious cuisines from around the world.", img: "../Images/food_festival.jpg" },
  { name: "Cooking Workshop", desc: "Learn to cook new recipes with expert chefs.", img: "../Images/cooking_workshop.jpg" },
  { name: "Beverage Tasting", desc: "Explore exotic drinks and beverages.", img: "../Images/beverage_tasting.jpg" }
];

const eventListContainerCul = document.getElementById('culinary-event-list');

culinaryEvents.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${ev.img}" alt="${ev.name}" style="height:150px; object-fit:cover; width:100%;">
        <h4 style="margin:10px 0 5px 0;">${ev.name}</h4>
        <p style="font-size:14px; padding:0 10px;">${ev.desc}</p>
    `;
    eventListContainerCul.appendChild(card);
});

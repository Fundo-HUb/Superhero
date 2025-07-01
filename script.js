const heroes = [
  {
    name: "Iron Man",
    image: "images/avengers_01.jpg",
    realName: "Tony Stark",
    powers: ["Genius intellect", "Powered armor suit", "Energy blasts"],
    funFact: "Tony built the first Iron Man suit in a cave with scraps."
  },
  {
    name: "Captain America",
    image: "images/avengers_02.jpg",
    realName: "Steve Rogers",
    powers: ["Super strength", "Vibranium shield", "Leadership"],
    funFact: "Steve was frozen in ice for nearly 70 years."
  },
  {
    name: "Thor",
    image: "images/avengers_03.jpg",
    realName: "Thor Odinson",
    powers: ["God of Thunder", "Mjolnir", "Immortality"],
    funFact: "Thor’s hammer can only be lifted by those who are worthy."
  },
  {
    name: "Hulk",
    image: "images/avengers_04.jpg",
    realName: "Bruce Banner",
    powers: ["Super strength", "Regeneration", "Anger-triggered transformation"],
    funFact: "The madder Hulk gets, the stronger he becomes!"
  },
  {
    name: "Black Widow",
    image: "images/avengers_05.jpg",
    realName: "Natasha Romanoff",
    powers: ["Martial arts", "Espionage", "Expert marksman"],
    funFact: "Natasha was trained in the Red Room, a secret spy academy."
  },
  {
    name: "Hawkeye",
    image: "images/avengers_06.jpg",
    realName: "Clint Barton",
    powers: ["Master archer", "Hand-to-hand combat", "Tactical skills"],
    funFact: "He never misses — unless he's trying to."
  }
];

const heroGrid = document.getElementById("heroGrid");
const searchInput = document.getElementById("searchInput");
const funFactBox = document.getElementById("randomFact");

function displayHeroes(heroList) {
  heroGrid.innerHTML = "";

  heroList.forEach(hero => {
    const card = document.createElement("div");
    card.className = "superhero-card";

    const img = document.createElement("img");
    img.src = hero.image;
    img.alt = hero.name;

    const name = document.createElement("div");
    name.className = "superhero-name";
    name.textContent = hero.name;

    const details = document.createElement("div");
    details.className = "superhero-details";
    details.innerHTML = `<strong>Real Name:</strong> ${hero.realName}<br><strong>Powers:</strong> ${hero.powers.join(", ")}`;

    // Show fun fact on click
    card.addEventListener("click", () => {
      funFactBox.textContent = hero.funFact;
    });

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(details);
    heroGrid.appendChild(card);
  });
}

// Load heroes on start
displayHeroes(heroes);

// Filter on input
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = heroes.filter(hero =>
    hero.name.toLowerCase().includes(keyword) ||
    hero.realName.toLowerCase().includes(keyword)
  );
  displayHeroes(filtered);
});

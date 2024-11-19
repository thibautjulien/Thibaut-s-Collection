const Collection = [
  {
    title: "Venom: The Last Dance",
    release: "2024",
    director: "Kelly Marcela",
    cast: ["Tom Hardy", "Chiwetel Ejiofor", "Juno Temple"],
    genre: ["Action", "Science-Fiction", "Adventure"],
    description:
      "Eddie and Venom are on the run. Each one is hunted by his fellow men and as the vice tightens, the duo must make a devastating decision that announces the conclusion of the adventures of Eddie and Venom.",
    picture: "./images/venom.jpg",
  },
  {
    title: "The Wild Robot",
    release: "2024",
    director: "Chris Sanders",
    cast: ["Lupita Nyong'o", "Pedro Pascal", "Kit Connor", "Bill Nighy"],
    genre: ["Animation", "Science-Fiction"],
    description:
      "A robot named Roz, stranded on a deserted island, learns to survive by forming bonds with the local animals. As she adapts, she adopts an orphaned gosling and discovers the value of empathy and community",
    picture: "./images/thewildrobot.jpg",
  },
  {
    title: "Deadpool & Wolverine",
    release: "2024",
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Morena Baccarin"],
    genre: ["Action", "Science-Fiction", "Comedy"],
    description:
      "Wade Wilson, aka Deadpool, tries to live a quiet life away from his mercenary past. However, faced with a new threat, he must return to action and convince Wolverine to join him on this mission.",
    picture: "./images/deadpool&wolverine.jpg",
  },
  {
    title: "The Crow",
    release: "2024",
    director: "Rupert Sanders",
    cast: ["Bill Skarsgard", "FKA Twigs", "Danny Huston", "Laura Birn"],
    genre: ["Action", "Fantastic", "Horror", "Thriller"],
    description:
      "Eric Draven and his fiancée are attacked and killed by a gang after the couple’s car breaks down. Eric is resurrected by a raven and takes revenge on those who took his life and that of his sweetheart.",
    picture: "./images/thecrow.jpg",
  },
  {
    title: "Without a Noise: Day 1",
    release: "2024",
    director: "Michael Sarnoski",
    cast: ["Lupita Nyong'o", "Joseph Quinn", "Alex Wolff", "Djimon Hounsou"],
    genre: ["Horror", "Science-Fiction", "Thriller"],
    description:
      "In New York, aliens attack, killing at the slightest sound. Samira and her cat Frodon meet Eric, a law student. Together, they try to survive in this world that has become silent.",
    picture: "./images/withoutanoise.jpg",
  },
  {
    title: "Planet of the Apes: The New Kingdom",
    release: "2024",
    director: "Wes Ball",
    cast: ["Owen Teague", "Freya Allan", "Kevin Durand", "Peter Macon"],
    genre: ["Science-Fiction", "Adventure", "Action"],
    description:
      "Generations after Caesar’s reign, apes have risen to power while humans are relegated to a primitive state. Under the rule of a tyrannical leader, a young ape embarks on a perilous journey that challenges his beliefs and will decide the fate of both apes and humans",
    picture: "./images/planetoftheapes.jpg",
  },
  {
    title: "Godzilla x Kong: The New Empire",
    release: "2024",
    director: "Adam Wingard",
    cast: ["Rebecca Hall", "Kaylee Hottle", "Brian Tyree Henry", "Dan Stevens"],
    genre: ["Action", "Science-Fiction", "Adventure", "Fantastic"],
    description:
      "After their epic confrontation, Godzilla and Kong unite in the face of a colossal threat that could wipe out their existence and that of humanity. This fight reveals the origins of the Titans, the mysteries of Skull Island and the deep ties that bind them to our world.",
    picture: "./images/godzillaxkong.jpg",
  },
  {
    title: "The Beekeeper",
    release: "2024",
    director: "David Ayer",
    cast: [
      "Jason Statham",
      "Emmy Raver-Lampman",
      "Bobby Naderi",
      "Josh Hutcherson",
    ],
    genre: ["Action", "Thriller", "Drame"],
    description:
      "The brutal quest for revenge of a man takes on an enormous scale as his past as a secret agent of a powerful underground organization known as the Beekeepers is revealed.",
    picture: "./images/beekeeper.jpeg",
  },
  {
    title: "The Lady and the Dragon",
    release: "2024",
    director: "Juan Carlos Fresnadillo",
    cast: [
      "Millie Bobby Brown",
      "Ray Winstone",
      "Angela Bassett",
      "Brooke Carter",
    ],
    genre: ["Fantastic", "Adventure", "Action"],
    description:
      "A young princess is forced to marry the ruler of the rival kingdom. She discovers that during the harvest season, the kingdom performs a strange ritual. He sacrifices his princesses to a hungry dragon. This year, the prey is her.",
    picture: "./images/ladyanddragon.jpg",
  },
  {
    title: "Sisu: Gold and Blood",
    release: "2023",
    director: "Jalmari Helander",
    cast: ["Jorma Tommila", "Aksel Hennie", "Jack Doolan", "Mimosa Willamo"],
    genre: ["Action", "War"],
    description:
      "1944, in Finnish Lapland, a former soldier converted to gold prospecting finds a large amount of gold. Trying to bring his loot back into town, he will have to fight against the Nazi forces present in Finland.",
    picture: "./images/sisu.jpg",
  },
];

const container = document.querySelector("section");

Collection.forEach((movie) => {
  // créer le conteneur pour chaque film
  const movieContainer = document.createElement("div");
  movieContainer.classList.add("card");
  container.appendChild(movieContainer);

  // ajouter l'image du film
  const movieHeader = document.createElement("div");
  movieHeader.classList.add("card__header");
  movieHeader.style.backgroundImage = `url(${movie.picture})`;
  movieContainer.appendChild(movieHeader);

  // ajouter div card__infos
  const movieHeaderInfos = document.createElement("div");
  movieHeaderInfos.classList.add("card__infos__header");
  movieHeader.appendChild(movieHeaderInfos);

  // ajouter le titre
  const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.title;
  movieTitle.classList.add("card__header__title");
  movieHeaderInfos.appendChild(movieTitle);

  // ajouter le directeur
  const movieDirector = document.createElement("p");
  movieDirector.textContent = movie.director;
  movieDirector.classList.add("card__header__director");
  movieHeaderInfos.appendChild(movieDirector);

  // ajouter div card__body
  const movieBody = document.createElement("div");
  movieBody.classList.add("card__body");
  movieContainer.appendChild(movieBody);

  // ajouter la description du film
  const movieDescription = document.createElement("p");
  movieDescription.classList.add("card__body__desc");
  movieDescription.textContent = movie.description;
  movieBody.appendChild(movieDescription);

  // ajouter les acteurs
  const movieActors = document.createElement("p");
  movieActors.classList.add("card__body__actors");
  movieActors.textContent = movie.cast.join(", ");
  movieBody.appendChild(movieActors);

  // Créer des boutons pour les genres
  const genresContainer = document.createElement("div");
  genresContainer.classList.add("card__genres");
  movie.genre.forEach((genre) => {
    const genreP = document.createElement("p");
    genreP.textContent = genre;
    genreP.classList.add(genre.toLowerCase());

    switch (genre) {
      case "Action":
        genreP.classList.add("action");
        break;
      case "Adventure":
        genreP.classList.add("adventure");
        break;
      case "Science-Fiction":
        genreP.classList.add("science-fiction");
        break;
      case "Fantastic":
        genreP.classList.add("fantastic");
        break;
      case "Horror":
        genreP.classList.add("horror");
        break;
      case "Comedy":
        genreP.classList.add("comedy");
        break;
      case "Animation":
        genreP.classList.add("animation");
        break;
      case "Drame":
        genreP.classList.add("drame");
        break;
      case "Thriller":
        genreP.classList.add("thriller");
        break;
      case "War":
        genreP.classList.add("war");
        break;
    }
    genresContainer.appendChild(genreP);
  });
  movieBody.appendChild(genresContainer);
});

// Initial Books Data with 10 more stories added
const books = {
  island: {
    title: "The Forgotten Island",
    category: "Adventure",
    pages: [
      "Page 1: Once upon a time on a forgotten island...",
      "Page 2: The waves whispered secrets...",
      "Page 3: A map led the way into the unknown.",
      "Page 4: And thus began the adventure.",
      "The End."
    ]
  },
  library: {
    title: "Whispers in the Library",
    category: "Mystery",
    pages: [
      "Page 1: The library creaked in silence...",
      "Page 2: A dusty book opened by itself...",
      "Page 3: Ghostly whispers told forgotten tales.",
      "Page 4: The truth was never meant to be found.",
      "The End."
    ]
  },
  clockmaker: {
    title: "The Clockmaker’s Secret",
    category: "Fantasy",
    pages: [
      "Page 1: In a quiet shop, time stood still...",
      "Page 2: A mysterious clock ticked backwards...",
      "Page 3: The boy found the secret gear.",
      "Page 4: He rewound destiny itself.",
      "The End."
    ]
  },

  // 10 New Longer Stories
  dragonQuest: {
    title: "Dragon's Quest",
    category: "Fantasy",
    pages: [
      "Page 1: In the kingdom of Eldoria, dragons once soared the skies.",
      "Page 2: A young knight, Arlen, dreamed of befriending one.",
      "Page 3: He journeyed through enchanted forests and dark caves.",
      "Page 4: Along the way, he faced trials of courage and heart.",
      "Page 5: Deep within a mountain, Arlen met the last dragon, Zyra.",
      "Page 6: Trust was earned through a fierce battle and shared wisdom.",
      "Page 7: Together, they returned peace to the troubled land.",
      "Page 8: Arlen’s quest became legend, sung through generations.",
      "The End."
    ]
  },
  shadowValley: {
    title: "Shadow of the Valley",
    category: "Mystery",
    pages: [
      "Page 1: The valley was silent, save for the rustle of leaves.",
      "Page 2: Detective Marla stepped carefully, sensing unseen eyes.",
      "Page 3: A missing person case turned into a puzzle of shadows.",
      "Page 4: Strange symbols carved into trees pointed to secrets.",
      "Page 5: Nightfall brought whispers and flickers of ghostly light.",
      "Page 6: Marla uncovered a hidden society living beneath the earth.",
      "Page 7: A confrontation revealed truths better left buried.",
      "Page 8: The mystery unraveled, but some questions remained.",
      "The End."
    ]
  },
  oceanTales: {
    title: "Ocean Tales: The Lost Pearl",
    category: "Adventure",
    pages: [
      "Page 1: The sea was a vast playground and a dangerous foe.",
      "Page 2: Captain Lana sought the legendary Lost Pearl for her crew.",
      "Page 3: Storms tested their resolve and friendships.",
      "Page 4: Beneath the waves, ancient ruins told stories in coral.",
      "Page 5: A rival pirate sought the same treasure with greed in his eyes.",
      "Page 6: Lana’s wit and bravery saved her ship from doom.",
      "Page 7: The pearl was more than a gem—it was a key to harmony.",
      "Page 8: The ocean sang a new song of peace and adventure.",
      "The End."
    ]
  },
  hauntedMansion: {
    title: "The Haunted Mansion",
    category: "Horror",
    pages: [
      "Page 1: The mansion loomed on the hill, draped in shadows.",
      "Page 2: Four friends dared to enter on a moonless night.",
      "Page 3: Doors slammed shut and eerie laughter echoed.",
      "Page 4: Ghostly apparitions revealed a tragic past.",
      "Page 5: Secrets of betrayal and lost love stirred unrest.",
      "Page 6: The friends faced their fears to break the curse.",
      "Page 7: Dawn brought silence and a mansion finally at peace.",
      "Page 8: Their bond was forever changed by the night’s horrors.",
      "The End."
    ]
  },
  starVoyage: {
    title: "Star Voyage",
    category: "Science Fiction",
    pages: [
      "Page 1: Captain Rey prepared for the longest voyage humanity had ever attempted.",
      "Page 2: The crew faced technical failures and interstellar storms.",
      "Page 3: Mysterious signals led them to an uncharted planet.",
      "Page 4: The alien landscape was beautiful but deadly.",
      "Page 5: Communication with the natives brought hope for peace.",
      "Page 6: An internal conflict threatened to tear the crew apart.",
      "Page 7: Unity saved the mission and changed the course of history.",
      "Page 8: The stars witnessed the dawn of a new alliance.",
      "The End."
    ]
  },
  enchantedForest: {
    title: "The Enchanted Forest",
    category: "Fantasy",
    pages: [
      "Page 1: Elara wandered into the forest where magic bloomed.",
      "Page 2: Talking animals and glowing flowers surrounded her.",
      "Page 3: A curse plagued the ancient trees, draining their life.",
      "Page 4: She sought the guardian spirit hidden in the heart of the woods.",
      "Page 5: Trials of wisdom and kindness unlocked ancient powers.",
      "Page 6: Elara lifted the curse, restoring the forest's vitality.",
      "Page 7: The forest whispered its gratitude in the wind.",
      "Page 8: Elara returned home, forever changed by the magic.",
      "The End."
    ]
  },
  cyberCity: {
    title: "Cyber City Chronicles",
    category: "Science Fiction",
    pages: [
      "Page 1: Neon lights flickered as hackers ruled the streets.",
      "Page 2: Jax was a rogue with a secret mission to expose corruption.",
      "Page 3: Virtual reality blended with real danger at every turn.",
      "Page 4: A mysterious AI held the key to the city’s salvation.",
      "Page 5: Allies were few, enemies hidden behind digital masks.",
      "Page 6: The final hack changed everything for better or worse.",
      "Page 7: Cyber City was reborn in the glow of new hope.",
      "Page 8: Jax vanished, a ghost in the machine.",
      "The End."
    ]
  },
  secretGarden: {
    title: "The Secret Garden",
    category: "Romantic",
    pages: [
      "Page 1: Lily discovered a hidden garden behind her grandmother’s estate.",
      "Page 2: The garden bloomed with flowers from stories of old.",
      "Page 3: She met James, a mysterious gardener with a gentle smile.",
      "Page 4: Together they uncovered letters from a lost love.",
      "Page 5: The garden healed wounds deeper than the soil.",
      "Page 6: Love blossomed as spring warmed the earth.",
      "Page 7: Secrets were shared beneath the starlit sky.",
      "Page 8: The garden became a haven for two hearts.",
      "The End."
    ]
  },
  timeTraveler: {
    title: "The Time Traveler’s Diary",
    category: "Science Fiction",
    pages: [
      "Page 1: Mina’s invention bent the rules of time and space.",
      "Page 2: She visited eras long gone and futures yet to come.",
      "Page 3: Each jump left a ripple in the fabric of reality.",
      "Page 4: A paradox threatened to erase her own existence.",
      "Page 5: She raced against time to fix what was broken.",
      "Page 6: Lessons of love, loss, and hope echoed through time.",
      "Page 7: Mina’s diary held the secrets to countless worlds.",
      "Page 8: Her journey was endless, but her heart remained true.",
      "The End."
    ]
  },
  pirateLegacy: {
    title: "Pirate Legacy",
    category: "Adventure",
    pages: [
      "Page 1: Captain Renegade’s flag flew high on the open seas.",
      "Page 2: His crew searched for a treasure hidden by ancestors.",
      "Page 3: Betrayal brewed among trusted mates.",
      "Page 4: Storms and sea monsters tested their resolve.",
      "Page 5: The treasure was more than gold; it was a legacy.",
      "Page 6: Renegade chose honor over riches in the end.",
      "Page 7: Songs of his legend spread across the oceans.",
      "Page 8: The pirate’s spirit sailed free forever.",
      "The End."
    ]
  },
  epicJourney: {
    title: "Epic Journey: The Quest for the Crystal Heart",
    category: "Adventure",
    pages: [
      // Page 1
      `In the ancient kingdom of Valoria, legends spoke of the Crystal Heart, a mystical gem said to hold the power of life itself. Hidden away for centuries, its magic was coveted by kings, sorcerers, and thieves alike. Our story begins with Kael, a young farmer’s son, who found himself thrust into a world of peril when his village was ravaged by a dark plague. The elders whispered that only the Crystal Heart could save them, but no one knew where it lay.

      Determined and fueled by hope, Kael vowed to find the Crystal Heart. Armed with nothing but a worn map and his father’s old sword, he set out at dawn. The path ahead twisted through dense forests, over icy mountains, and across barren deserts. With each step, the weight of the quest grew heavier, but so did Kael’s resolve. Along the way, he met allies and enemies, each shaping his destiny in ways he could never have imagined.

      As the sun rose higher, casting golden light over the land, Kael knew this journey would change his life forever.`,

      // Page 2
      `The first leg of Kael’s quest took him through the Whispering Woods, a place where trees seemed alive and secrets hung thick in the air. The villagers had long warned travelers of spirits and beasts lurking among the shadows, but Kael pressed on. The path was narrow and twisted, with strange sounds echoing between the branches.

      Suddenly, a figure stepped from behind a tree — an old woman cloaked in moss and leaves. Her eyes gleamed with ancient knowledge. She warned Kael of a guardian beast that protected the heart’s resting place and told him he would need more than courage to succeed.

      Kael thanked her but felt a shiver of doubt creep down his spine. Still, he knew turning back was not an option. Every step into the forest tested his nerves and his strength, but the thought of saving his village kept him moving forward.`,

      // Page 3
      `Deep in the heart of the Whispering Woods, Kael encountered the first challenge of his journey. The guardian beast, a massive wolf with fur as dark as night and eyes like burning embers, appeared before him. It growled, a sound that shook the very earth beneath Kael’s feet.

      The battle was fierce. Kael used his father’s sword with skill born of desperation, dodging razor-sharp claws and snapping jaws. But the wolf was more than a beast; it seemed to possess a mind and will of its own. Just as Kael prepared to deliver a final blow, he hesitated, sensing something more.

      Remembering the old woman’s words, Kael lowered his sword and spoke softly, offering peace instead of violence. The wolf’s snarls softened, and it stepped aside, allowing Kael to pass. This act of mercy was the first test of his true courage.`,

      // Page 4
      `Beyond the woods lay the Forgotten Mountains, jagged peaks wrapped in mist and legend. Many had tried to cross but never returned. Kael climbed higher, battling bitter winds and slippery ledges. At night, he camped under a blanket of stars, listening to the silence broken only by the howl of distant creatures.

      On the third day, Kael stumbled upon an ancient ruin carved into the rock. Inside, faded murals told of a forgotten civilization that once guarded the Crystal Heart. Kael marveled at the artistry and found inscriptions hinting at a secret path through the mountains.

      With renewed hope, Kael followed the clues, navigating narrow tunnels and cavernous halls. Danger lurked everywhere — hidden traps and collapsing stone — but Kael’s determination drove him onward.`,

      // Page 5
      `At the mountain’s summit, Kael faced a final guardian: a stone golem awakened by his presence. Towering and unyielding, the golem’s eyes glowed with ancient power. Kael realized brute strength alone would not win this fight.

      Recalling the murals and inscriptions, he looked for a way to communicate or bypass the golem. Noticing runes etched into its base, Kael traced the symbols with trembling fingers and spoke a phrase he had memorized from the ruins.

      The golem paused, its rigid movements softening. Slowly, it stepped aside, revealing a hidden passage leading downward — the entrance to the Crystal Heart’s chamber. Kael’s heart pounded with a mix of fear and excitement.`,

      // Page 6
      `Inside the chamber, a soft glow illuminated the Crystal Heart resting atop a pedestal carved from pure marble. The gem pulsed with an inner light, filling the room with warmth. Kael approached carefully, aware that any misstep could trigger traps or curses.

      As he reached out, shadows shifted, and a figure cloaked in darkness emerged — the sorcerer Malakar, who sought the Crystal Heart for his own dark ambitions. A fierce duel erupted, magic and steel clashing in the glowing chamber.

      Kael fought with every ounce of strength, fueled by the hope of saving his village. When Malakar struck a fatal blow, Kael summoned a hidden reserve of power and shattered the sorcerer’s staff, breaking his spell.`,

      // Page 7
      `With Malakar defeated, Kael claimed the Crystal Heart. The gem’s light enveloped him, healing wounds and filling him with knowledge. He felt the heartbeat of the world itself — a rhythm of life and renewal.

      Kael knew his journey was not over. The power of the Crystal Heart came with responsibility, and he had to ensure it was used wisely. Carrying the gem safely, he began the trek back home, aware that dark forces might still pursue him.

      Along the way, Kael reflected on the lessons learned: courage, mercy, and the strength found in unexpected friendships.`,

      // Page 8
      `Returning to his village, Kael was greeted with hope and relief. The Crystal Heart’s magic spread quickly, curing the plague and restoring life to the withered fields. Elders blessed Kael, and stories of his quest spread far beyond Valoria’s borders.

      Though his life had changed forever, Kael remained humble, knowing that the true power of the Crystal Heart was in the love and unity it inspired among his people.

      Peace returned to the kingdom, but the legend of Kael and the Crystal Heart lived on, inspiring future generations to believe in the impossible.`,

      // Page 9
      `Years later, Kael became a guardian of Valoria, teaching others about courage, compassion, and the delicate balance of power. The Crystal Heart was protected by a new order sworn to defend the land from darkness.

      Travelers came from distant lands, eager to hear the tale of the young farmer who became a hero. Kael welcomed them with open arms, always reminding them that the greatest adventures begin with a single step and a hopeful heart.

      His story was one of many in the tapestry of Valoria, woven into the fabric of time and memory.`,

      // Page 10
      `As the sun set over Valoria, casting a warm glow on the castle towers, Kael stood watchful and proud. The journey that began with uncertainty had transformed not only him but the fate of his people.

      The Crystal Heart glimmered in its chamber, a beacon of hope for all who dared to dream. And somewhere beyond the horizon, new adventures awaited, ready to be written by those brave enough to seek them.

      The End.`
    ]
  }
};

let currentBook = null;
let currentPage = 0;
let isAdmin = false;

// Cached DOM elements
const bookList = document.getElementById("book-list");
const pageDisplay = document.getElementById("pageDisplay");
const fullscreenBtn = document.getElementById("fullscreenToggle");
const addBookBtn = document.getElementById("addBookBtn");

// Render all books to homepage
function renderBooks() {
  bookList.innerHTML = "";

  for (const key in books) {
    addBookToHomepage(key, books[key]);
  }

  addBookBtn.style.display = isAdmin ? "inline-block" : "none";
}

// Add a book to homepage with optional delete button
function addBookToHomepage(key, book) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  bookDiv.id = "book-" + key;
  bookDiv.dataset.category = book.category;

  const title = document.createElement("h2");
  title.innerText = book.title;

  const category = document.createElement("p");
  category.innerText = book.category;

  bookDiv.appendChild(title);
  bookDiv.appendChild(category);

  if (isAdmin) {
    const delBtn = document.createElement("button");
    delBtn.innerText = "🗑 Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteBook(key);
    };
    bookDiv.appendChild(delBtn);
  }

  bookDiv.onclick = () => openBook(key);

  bookList.appendChild(bookDiv);
}

// Open a book for reading
function openBook(key) {
  if (!books[key]) return;
  currentBook = key;
  currentPage = parseInt(localStorage.getItem("bookmark-" + key)) || 0;

  document.getElementById("bookTitle").innerText = books[key].title;
  document.getElementById("homepage").style.display = "none";
  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("reader").style.display = "block";

  showPage();
}

// Show current page with sliding animation
function showPage() {
  if (!currentBook) return;
  const book = books[currentBook];
  if (!book) return;

  // Start fade out + slide left
  pageDisplay.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  pageDisplay.style.opacity = "0";
  pageDisplay.style.transform = "translateX(-30%)";

  setTimeout(() => {
    // Update text after fade out
    pageDisplay.textContent = book.pages[currentPage];
    document.getElementById("pageIndicator").innerText = `Page ${currentPage + 1} / ${book.pages.length}`;

    // Prepare to fade in + slide back to center
    pageDisplay.style.transition = "none";
    pageDisplay.style.opacity = "0";
    pageDisplay.style.transform = "translateX(30%)";

    // Force reflow to reset the animation
    void pageDisplay.offsetWidth;

    // Animate fade in + slide center
    pageDisplay.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    pageDisplay.style.opacity = "1";
    pageDisplay.style.transform = "translateX(0)";
  }, 400);
}

// Navigate pages with buttons
document.getElementById("prevPage").onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }
};

document.getElementById("nextPage").onclick = () => {
  if (currentBook && currentPage < books[currentBook].pages.length - 1) {
    currentPage++;
    showPage();
  }
};

// Fullscreen toggle
fullscreenBtn.onclick = () => {
  if (!document.fullscreenElement) {
    pageDisplay.requestFullscreen().catch(err => alert(`Fullscreen error: ${err.message}`));
  } else {
    document.exitFullscreen();
  }
};

document.addEventListener('fullscreenchange', () => {
  fullscreenBtn.innerText = document.fullscreenElement ? "❎ Exit Fullscreen" : "🔲 Fullscreen";
});

// Bookmark page
function bookmarkPage() {
  if (!currentBook) return;
  localStorage.setItem("bookmark-" + currentBook, currentPage);
  alert(`Bookmarked page ${currentPage + 1} of "${books[currentBook].title}"`);
}

// Back to homepage
function goBack() {
  document.getElementById("reader").style.display = "none";
  document.getElementById("homepage").style.display = "block";
  currentBook = null;
  currentPage = 0;
}

// Dark mode toggle
const darkToggleHome = document.getElementById("darkModeToggle");
const darkToggleReader = document.getElementById("darkModeToggleReader");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

darkToggleHome.onclick = toggleDarkMode;
darkToggleReader.onclick = toggleDarkMode;

// Filter by category
document.getElementById("categories").addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;

  const selectedCat = e.target.dataset.category;
  const booksDivs = document.querySelectorAll("#book-list .book");

  booksDivs.forEach(bookDiv => {
    bookDiv.style.display = (selectedCat === "all" || bookDiv.dataset.category === selectedCat) ? "" : "none";
  });

  [...e.target.parentNode.children].forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
});

// Search bar
document.getElementById("search").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const booksDivs = document.querySelectorAll("#book-list .book");

  booksDivs.forEach(bookDiv => {
    const title = bookDiv.querySelector("h2").textContent.toLowerCase();
    bookDiv.style.display = title.includes(query) ? "" : "none";
  });
});

// Admin Functions

function showAdminPanel() {
  isAdmin = true;
  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("homepage").style.display = "block";
  document.getElementById("reader").style.display = "none";

  renderBooks();
}

function closeAdmin() {
  isAdmin = false;
  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("uploadForm").reset();
  document.getElementById("adminMsg").innerText = "";
  document.getElementById("homepage").style.display = "block";
  renderBooks();
}

function deleteBook(key) {
  if (!isAdmin) {
    alert("You do not have permission to delete books.");
    return;
  }

  const confirmDelete = confirm(`Are you sure you want to delete "${books[key].title}"?`);
  if (!confirmDelete) return;

  localStorage.removeItem("book_" + key);
  delete books[key];

  renderBooks();
  alert("Book deleted successfully.");
}

// Admin shortcut Ctrl+Alt+A to login
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && e.code === "KeyA") {
    showAdminPanel();
  }
});

// Function to go to next page safely
function goNextPage() {
  if (currentPage < books[currentBook].pages.length - 1) {
    currentPage++;
    showPage();
  }
}

// Keyboard navigation with arrow keys, space, enter
document.addEventListener("keydown", (e) => {
  if (!currentBook) return;

  if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowRight") {
    e.preventDefault();
    goNextPage();
  } else if (e.code === "ArrowLeft") {
    e.preventDefault();
    if (currentPage > 0) {
      currentPage--;
      showPage();
    }
  }
});

// Touch support for next page
pageDisplay.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    goNextPage();
  }
});

// Handle new book upload
document.getElementById("uploadForm").addEventListener("submit", e => {
  e.preventDefault();

  const title = document.getElementById("adminTitle").value.trim();
  const category = document.getElementById("adminCategory").value;
  const pagesText = document.getElementById("adminPages").value.trim();

  if (!title || !pagesText) {
    document.getElementById("adminMsg").innerText = "Please fill all fields.";
    return;
  }

  const pages = pagesText.split('\n').filter(line => line.trim() !== "");
  const key = title.toLowerCase().replace(/[^a-z0-9]+/g, "_");

  const newBook = { title, category, pages };
  localStorage.setItem("book_" + key, JSON.stringify(newBook));
  books[key] = newBook;

  document.getElementById("adminMsg").innerText = "Book added successfully!";
  document.getElementById("uploadForm").reset();
  renderBooks();
});

// Load saved books from localStorage
window.addEventListener("load", () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("book_")) {
      const bookKey = key.slice(5);
      const bookData = JSON.parse(localStorage.getItem(key));
      books[bookKey] = bookData;
    }
  }
  renderBooks();
});

// Show Add Book panel on Add Book button click (admin only)
addBookBtn.onclick = () => {
  if (!isAdmin) return;
  document.getElementById("homepage").style.display = "none";
  document.getElementById("adminPanel").style.display = "block";
  document.getElementById("reader").style.display = "none";
};

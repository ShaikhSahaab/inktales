// Initial Books Data
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

// Show Add Book panel on Add Book button click
addBookBtn.onclick = () => {
  document.getElementById("adminPanel").style.display = "block";
  document.getElementById("homepage").style.display = "none";
  document.getElementById("reader").style.display = "none";
  document.getElementById("adminMsg").innerText = "";
  document.getElementById("uploadForm").reset();
};

// Close admin panel button handler
document.getElementById("closeAdminBtn").onclick = () => {
  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("homepage").style.display = "block";
  renderBooks();
};

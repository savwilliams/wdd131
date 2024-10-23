const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
    }
];


const articleBox = document.querySelector('#article-box');

function createArticleHTML(article) {  
  const articleElement = document.createElement('article');
  articleElement.classList.add('article-box');

  const articleContent = `
    <aside class="book-details-aside">
      <ul class="paragraph-font">
        <li class="paragraph-font" id="font-size">${article.date}</li>
        <li class="paragraph-font">${article.ages}</li>
        <li class="paragraph-font">${article.genre}</li>
        <li class="paragraph-font">${article.stars}</li>
      </ul>
    </aside>
    <div>
      <h2 class="book-title">${article.title}</h2>
      <div class="book-cover-img-box">
        <img class="book-cover-img" src="${article.imgSrc}" alt="${article.imgAlt}">
      </div>
      <h3>Description:</h3>
      <p class="paragraph-font">${article.description}</p>
    </div>
  `;
  
  articleElement.innerHTML = articleContent;  
  articleBox.appendChild(articleElement);
}

function displayArticles(articles) {
  articles.forEach(article => {
    createArticleHTML(article);
  });
}

displayArticles(articles);

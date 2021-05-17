import { headerAppender } from "./header";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorNameSpan = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imageContainer.classList.add('img-container');
  
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageContainer);
  imageContainer.appendChild(image);
  authorDiv.appendChild(authorNameSpan);

  headlineDiv.textContent = article.headline;
  image.src = article.authorPhoto;
  authorNameSpan.textContent = `By: ${article.authorName}`;

  return cardDiv;

  cardDiv.addEventListener('click', (e) => {
    console.log(article.headling);
  })
}

import axios from "axios"

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then(result => {
    const articlesObj = result.data.articles;
    const chosenSelector = document.querySelector(selector);
    for (const topic in articlesObj) {
      articlesObj[topic].forEach(topic => {
        chosenSelector.appendChild((Card(topic)));

        // console.log(articlesObj[topic]);
      })
    }


  })



}

export { Card, cardAppender }

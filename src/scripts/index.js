import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "../styles/skip-link.css";
import "./script.js";

import DATA from "../public/data/DATA.json";

const getDataRestaurant = (data) => {
  data.restaurants.forEach((restaurant) => {
    const restaurantDataItem = document.querySelector(".posts");
    restaurantDataItem.innerHTML += `
        <article class="post-item">
          <div class="post-item_image">
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
            <div class="post-item_loc">${restaurant.city}</div>
            <p class="post-item_rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18px" height="14px"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              ${restaurant.rating}
            </p>
          </div>
          <div class="post-item_content">
            <h1 class="post-item_title">${restaurant.name}</h1>
            <p class="post-item_desc">${restaurant.description}</p>
          </div>
        </article>
        `;
  });
};
getDataRestaurant(DATA);

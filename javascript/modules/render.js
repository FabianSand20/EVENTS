// !Muestra todos los eventos solicitados

import { formatDate, formatPrice } from './events.js';

export function renderEvents(events) {
  const eventsGrid = document.getElementById('events-grid');
  eventsGrid.innerHTML = '';

  events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');

    const imageElement = document.createElement('img');
    imageElement.src = event.image;
    eventElement.appendChild(imageElement);

    const titleElement = document.createElement('h2');
    titleElement.textContent = event.title;
    eventElement.appendChild(titleElement);

    const dateElement = document.createElement('p');
    dateElement.textContent = formatDate(event.date);
    eventElement.appendChild(dateElement);

    const locationElement = document.createElement('p');
    locationElement.textContent = `${event.location} • ${event.city}, ${event.state}`;
    eventElement.appendChild(locationElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = formatPrice(event.price);
    eventElement.appendChild(priceElement);

    const favoriteButton = document.createElement('button');
    favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
    favoriteButton.classList.add('favorite-button');
    eventElement.appendChild(favoriteButton);

    const interestedButton = document.createElement('button');
    interestedButton.textContent = 'Interested';
    interestedButton.classList.add('interested-button');
    eventElement.appendChild(interestedButton);

    const goingButton = document.createElement('button');
    goingButton.textContent = 'Going!';
    goingButton.classList.add('going-button');
    eventElement.appendChild(goingButton);

    eventsGrid.appendChild(eventElement);
  });
}

// !Muestra todos los eventos solicitados

// render.js

// !Muestra todos los eventos solicitados

import { formatDate, formatPrice } from './events.js';
import buttonStateManager from './buttonStateManager.js';

export function renderEvents(events) {
  const eventsGrid = document.getElementById('events-grid');
  eventsGrid.innerHTML = '';

  if (Array.isArray(events)) {
    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.dataset.id = event.id;

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
      favoriteButton.dataset.id = event.id + '-favorite';
      const isFavorite = buttonStateManager.getState(favoriteButton.dataset.id);
      favoriteButton.classList.toggle('filled', isFavorite);
      eventElement.appendChild(favoriteButton);

      const interestedButton = document.createElement('button');
      interestedButton.textContent = 'Interested';
      interestedButton.classList.add('interested-button');
      interestedButton.dataset.id = event.id + '-interested';
      const isInterested = buttonStateManager.getState(interestedButton.dataset.id);
      if (isInterested) {
        interestedButton.remove();
        const removeMessage = document.createElement('p');
        removeMessage.textContent = 'Remove from Interested';
        removeMessage.classList.add('remove-message');
        removeMessage.addEventListener('click', removeFromInterested);
        eventElement.appendChild(removeMessage);
      } else {
        eventElement.appendChild(interestedButton);
      }

      const goingButton = document.createElement('button');
      goingButton.textContent = 'Going!';
      goingButton.classList.add('going-button');
      goingButton.dataset.id = event.id + '-going';
      const isGoing = buttonStateManager.getState(goingButton.dataset.id);
      if (isGoing) {
        goingButton.remove();
        const removeMessage = document.createElement('p');
        removeMessage.textContent = 'Remove from Going';
        removeMessage.classList.add('remove-message');
        removeMessage.addEventListener('click', removeFromGoing);
        eventElement.appendChild(removeMessage);
      } else {
        eventElement.appendChild(goingButton);
      }

      eventsGrid.appendChild(eventElement);
    });
  }
  else {
    console.error('Invalid events data:', events);
  }
}
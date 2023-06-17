import { renderEvents } from './modules/render.js';
import cache from './modules/cache.js';
import { formatDate, formatPrice } from './modules/events.js';
import { getEvents } from './modules/api.js';

export function createTabButton(category) {
  const button = document.createElement('button');
  button.classList.add('tab');
  button.id = `${category}-tab`;
  button.textContent = category;
  return button;
}

export function handleTabClick(event) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  event.target.classList.add('active');
  const category = event.target.id.split('-')[0];

  if (cache[category]) {
    renderEvents(cache[category]);
  } else {
    getEvents(category).then(events => {
      cache[category] = events;
      renderEvents(events);
    });
  }
}

export function addToFavorites(event) {
  const favoriteButton = event.target;
  favoriteButton.classList.toggle('filled');
}

export function addToInterested(event) {
  const interestedButton = event.target;
  const eventElement = interestedButton.closest('.event');

  interestedButton.remove();
  const removeMessage = document.createElement('p');
  removeMessage.textContent = 'Remove from Interested';
  removeMessage.classList.add('remove-message');

  removeMessage.addEventListener('click', removeFromInterested);
  eventElement.appendChild(removeMessage);
}

export function addToGoing(event) {
  const goingButton = event.target;
  const eventElement = goingButton.closest('.event');

  goingButton.remove();
  const removeMessage = document.createElement('p');
  removeMessage.textContent = 'Remove from Going';
  removeMessage.classList.add('remove-message');

  removeMessage.addEventListener('click', removeFromGoing);
  eventElement.appendChild(removeMessage);
}

export function removeFromInterested(event) {
  const removeMessage = event.target;
  const eventElement = removeMessage.closest('.event');

  eventElement.querySelector('.remove-message').remove();
  const interestedButton = document.createElement('button');
  interestedButton.textContent = 'Interested';
  interestedButton.classList.add('interested-button');

  interestedButton.addEventListener('click', addToInterested);
  eventElement.appendChild(interestedButton);
}

export function removeFromGoing(event) {
  const removeMessage = event.target;
  const eventElement = removeMessage.closest('.event');

  eventElement.querySelector('.remove-message').remove();
  const goingButton = document.createElement('button');
  goingButton.textContent = 'Going!';
  goingButton.classList.add('going-button');

  goingButton.addEventListener('click', addToGoing);
  eventElement.appendChild(goingButton);
}

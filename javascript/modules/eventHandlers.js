import { removeFromGoing, removeFromInterested } from './actions.js';

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

export { removeFromGoing, removeFromInterested };
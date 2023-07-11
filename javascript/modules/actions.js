// actions.js

import { addToInterested, addToGoing } from './eventHandlers.js';

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
import { createTabButton, handleTabClick, addToFavorites, addToInterested, addToGoing, removeFromInterested, removeFromGoing } from './eventHandlers.js';

// !Obtiene los tabs y agregar los botones
const tabContainer = document.getElementById('tabs');
const categories = ['music', 'sports', 'business', 'food', 'art'];
categories.forEach(category => {
  const button = createTabButton(category);
  button.addEventListener('click', handleTabClick);
  tabContainer.appendChild(button);
});


// !Agregar eventos a los botones de interacción
document.addEventListener('click', event => {
  if (event.target.classList.contains('favorite-button')) {
    addToFavorites(event);
  }

  if (event.target.classList.contains('interested-button')) {
    addToInterested(event);
  }

  if (event.target.classList.contains('going-button')) {
    addToGoing(event);
  }

  if (event.target.classList.contains('remove-message')) {
    const removeMessage = event.target;
    const eventElement = removeMessage.closest('.event');

    if (eventElement.classList.contains('favorite')) {
      eventElement.classList.remove('favorite');
    }

    eventElement.querySelector('.remove-message').remove();
    const interestedButton = document.createElement('button');
    interestedButton.textContent = 'Interested';
    interestedButton.classList.add('interested-button');

    interestedButton.addEventListener('click', addToInterested);
    eventElement.appendChild(interestedButton);
  }
});
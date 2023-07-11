// tabs.js

import { renderEvents } from './render.js';
import cache from './cache.js';
import { getEvents } from './api.js';

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
    cache[category].then(events => {
      renderEvents(events);
    }).catch(error => {
      console.error('Error fetching events:', error);
    });
  } else {
    getEvents(category).then(events => {
      cache[category] = Promise.resolve(events);
      renderEvents(events);
    }).catch(error => {
      console.error('Error fetching events:', error);
    });
  }
}
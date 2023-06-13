import { getEvents } from './modules/api.js';
import cache from './modules/cache.js';
import { renderEvents } from './modules/render.js';

// Controla los eventos del click en los botones del menu 

function handleTabClick(event) {
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

// Realiza el llamaado a los Botones del menu

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', handleTabClick));

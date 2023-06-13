//Se tiene la informacion del evento

export function formatDate(timestamp) {
  const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', options);
}

export function formatPrice(price) {
  if (price === 0) {
    return 'Free';
  }
  return '$' + price.toFixed(2);
}

// !Devuelve los eventos de una categoriaa

export async function getEvents(category) {
  const response = await fetch(`https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`);
  const data = await response.json();
  return data;
}
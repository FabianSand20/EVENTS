// !Almacena temporalmente los eventos

const cache = new Proxy({}, {
  get(target, property) {
    if (!(property in target)) {
      target[property] = fetchEvents(property);
    }
    return target[property];
  },
});

async function fetchEvents(category) {
  const response = await fetch(`https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`);
  const data = await response.json();
  return data;
}

export default cache;
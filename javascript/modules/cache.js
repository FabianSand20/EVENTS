//Almacena temporalmente los eventos

const cache = new Proxy({}, {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {
    target[property] = value;
    return true;
  },
});

export default cache;

const setState = (data = {}, instance) => {
  const handler = {
    get(target, key) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key], handler);
      } else {
        return target[key];
      }
    },
    set(target, name, value) {
      target[name] = value;
      instance.render();
      return true;
    },
  };

  return new Proxy(data, handler);
};

export default setState;

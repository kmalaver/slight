const setEventHandlers = (element, component) => {
  const attributes = element.attributes;
  for (const attribute of attributes) {
    // verify if the attribute starts with 's-'
    if (attribute.name.substring(0, 2) === 's-') {
      const eventName = attribute.name.substring(2, attribute.name.length);
      element.addEventListener(eventName, (event) => {
        component.functions[attribute.value](event);
      });
    }
  }
};

export default setEventHandlers;

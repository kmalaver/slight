const setEventHandlers = (element, component) => {
  const attributes = element.attributes;
  for (const attribute of attributes) {
    // verify if the attribute starts with ':'
    if (attribute.name[0] === ':') {
      const eventName = attribute.name.substring(1, attribute.name.length);
      element.addEventListener(eventName, (event) => {
        component.functions[attribute.value](event);
      });
    }
  }
};

export default setEventHandlers;

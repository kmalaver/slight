const setEventHandlers = (element, name, event) => {
  const eventName = name.substring(2, name.length);
  element.addEventListener(eventName, event);
};

export default setEventHandlers;

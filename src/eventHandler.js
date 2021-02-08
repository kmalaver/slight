const setEventHandlers = (element, eventName, event) => {
  try {
    element.addEventListener(eventName, event);
  } catch (error) {
    console.error(error);
  }
};

export default setEventHandlers;

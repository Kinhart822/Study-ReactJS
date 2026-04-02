function logger1(reducer) {
  return (prevState, action) => {
    console.group(action.type);

    console.log("Previous state:", prevState);
    console.log("Action:", action);

    const newState = reducer(prevState, action);

    console.log("Current state:", newState);

    console.groupEnd();

    return newState;
  };
}

export default logger1;

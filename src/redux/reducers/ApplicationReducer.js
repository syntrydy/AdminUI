const appState = {
  pageSizeOptions: [5, 10, 15, 20, 25, 30]
};

const ApplicationReducer = (state = appState, action) => {
  console.log(state);
  switch (action.type) {
    case "CHANGE_SETTINGS":
      return state;
    default:
      return state;
  }
};

export default ApplicationReducer;

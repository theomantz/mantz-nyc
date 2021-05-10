
const uiReducer = ( state, action ) => {

  switch(action.type) {
    case  'ContactModal':
      return {
        ...state,
        ui: action.type
      };
    default:
      return state;
  }
}

export default uiReducer
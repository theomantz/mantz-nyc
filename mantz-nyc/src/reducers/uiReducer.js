
export const DIMS = 'DIMS';
export const EXPANDED = 'EXPANDED';
export const CONDENSED = 'CONDENSED';
export const ACTIVE_ICON = 'ACTIVE_ICON'

const uiReducer = ( state, action ) => {

  switch(action.type) {
    case  EXPANDED:
      return {
        ...state,
        ui: action.payload
      };
    case ACTIVE_ICON:
      return {
        ...state,
        icon: action.payload
      };
    case DIMS:
      return {
        ...state,
        dims: action.payload
      };
    default:
      return state;
  }
}

export default uiReducer

export const EXPANDED = 'EXPANDED';
export const CONDENSED = 'CONDENSED';
export const ACTIVE_ICON = 'ACTIVE_ICON'

const uiReducer = ( state, action ) => {

  switch(action.type) {
    case  EXPANDED:
      return {
        ...state,
        ui: action.type
      };
    case CONDENSED:
      return {
        ...state,
        ui: action.type
      };
    case ACTIVE_ICON:
      return {
        ...state,
        icon: action.icon
      }
    default:
      return state;
  }
}

export default uiReducer
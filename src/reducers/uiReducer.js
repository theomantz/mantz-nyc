
export const DIMS = 'DIMS';
export const SPOTLIGHT_REMS = 'SPOTLIGHT_REMS';
export const PROJECT_REMS = 'PROJECT_REMS';
export const EXPANDED = 'EXPANDED';
export const CONDENSED = 'CONDENSED';
export const ACTIVE_ICON = 'ACTIVE_ICON'
export const ACTIVE_CARD = 'ACTIVE_CARD'

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
    case SPOTLIGHT_REMS:
      return {
        ...state,
        spotlightRems: action.payload
      };
    case PROJECT_REMS:
      return {
        ...state,
        projectRems: action.payload
      };
    case ACTIVE_CARD:
      return {
        ...state,
        card: action.payload
      }
    default:
      return state;
  }
}

export default uiReducer
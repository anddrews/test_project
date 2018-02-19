import { RootNavigation } from '../../settings/navigation/';


const navigationReducer = (state, action) => {
  const newState = RootNavigation.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;

import Commons from "../../lib/commons.js";

const initialStateConfig = {
  id: -1,
  username: "",
  displayName: "",
  authenticated: false
};

let newState = Commons.buildNewStateFx(initialStateConfig);

const initialState = newState(null);

export default (state = initialState, action) => {
  let retVal = state;
  return retVal;
}

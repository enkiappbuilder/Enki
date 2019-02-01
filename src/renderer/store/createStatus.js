const ENABLE_CREATE = "ENABLE_CREATE";
const DISABLE_CREATE = "DISABLE_CREATE"

export const enableCreate = () => {
  return {
    type: ENABLE_CREATE,
    createEnabled: true
  };
};

export const disableCreate = () => {
  return {
    type: DISABLE_CREATE,
    createEnabled: false
  };
};

export default function(state = false, action) {
  switch (action.type) {
    case ENABLE_CREATE:
      return action.createEnabled;
    case DISABLE_CREATE:
      return action.disableCreate
    default:
      return state;
  }
}

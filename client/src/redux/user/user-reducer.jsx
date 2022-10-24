import usersActionType from "./user-types";
const INTIAL_STATE = {
  currentUser: null,
  errorMsg: null,
};
const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case usersActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case usersActionType.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case usersActionType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMsg: null,
      };
    case usersActionType.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case usersActionType.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case usersActionType.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

import class_types from "./class_types";

const initialState = {
  classNames: undefined,
  subjects: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case class_types.GET_CLASS:
      return { ...state, classNames: payload };
    case class_types.GET_SUBJECTS:
      return { ...state, subjects: payload };
    default:
      return state;
  }
};

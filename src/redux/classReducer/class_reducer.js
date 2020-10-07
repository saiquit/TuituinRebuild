import class_types from "./class_types";

const initialState = {
  classNames: undefined,
  subjects: [],
  groups: [],
  instituteName: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case class_types.GET_CLASS:
      return { ...state, classNames: payload };
    case class_types.GET_SUBJECTS:
      return { ...state, subjects: payload };
    case class_types.GET_GROUPS:
      return { ...state, groups: payload };
    case class_types.GET_INSTITUTE_NAME:
      return { ...state, instituteName: payload };

    default:
      return state;
  }
};

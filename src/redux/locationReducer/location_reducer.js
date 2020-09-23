import locationTypes from "./location_types";
const initialState = {
  districts: [],
  currentThana: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case locationTypes.GET_DISTRICTS:
      return { ...state, districts: payload };
    case locationTypes.GET_THANAS:
      return { ...state, currentThana: payload };
    default:
      return state;
  }
};

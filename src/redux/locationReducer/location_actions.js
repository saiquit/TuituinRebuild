import locationTypes from "./location_types";
import axios from "axios";

export const getDistricts = (payload) => ({
  type: locationTypes.GET_DISTRICTS,
  payload,
});
export const setThana = (payload) => ({
  type: locationTypes.GET_THANAS,
  payload,
});

export const getDistricsAsyc = () => {
  return async (dispatch) => {
    const district = await axios.get("/statics/district");
    const data = district.data;
    if (district.status === 200) {
      dispatch(getDistricts(data));
    }
  };
};

export const getThanaAsync = (value) => {
  return async (dispatch) => {
    const tRef = await axios.get(`/statics/area/${value}`);
    const data = tRef.data;
    dispatch(setThana(data));
  };
};

import class_types from "./class_types";
import axios from "axios";

export const getClass = (payload) => ({
  type: class_types.GET_CLASS,
  payload,
});
export const getSubjects = (payload) => ({
  type: class_types.GET_SUBJECTS,
  payload,
});

export const getClassAsync = (medium) => {
  return async (dispatch) => {
    const classData = await axios(`/statics/category/${medium}`);
    const data = classData.data;
    dispatch(getClass(data));
  };
};
export const getSubjectsAsync = (className) => {
  return async (dispatch) => {
    const subjectData = await axios(`/statics/course/${className}`);
    const subjects = subjectData.data;
    const singleSub = subjects.subs[0].split(",");
    dispatch(getSubjects(singleSub));
  };
};

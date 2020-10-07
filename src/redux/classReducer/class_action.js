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
export const getGroup = (payload) => ({
  type: class_types.GET_GROUPS,
  payload,
});

export const getInstituteName = (payload) => ({
  type: class_types.GET_INSTITUTE_NAME,
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

export const getGroupsAsync = () => {
  return async (dispatch) => {
    try {
      const groups = await (await axios("/statics/group")).data;
      dispatch(getGroup(groups));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInstituteNameAsync = () => {
  return async (dispatch) => {
    try {
      const institute = await (await axios("/statics/institute")).data;
      dispatch(getInstituteName(institute));
    } catch (error) {
      console.log(error);
    }
  };
};

import { combineReducers } from "redux";

import userReducer from "./userReducer/user_reducer";
// import jobsReducer from "./jobReducer/job_reducer";
import locationReducer from "./locationReducer/location_reducer";
import classReducer from "./classReducer/class_reducer";
const root_reducer = combineReducers({
  user: userReducer,
  // jobs: jobsReducer,
  location: locationReducer,
  classArr: classReducer,
});

export default root_reducer;

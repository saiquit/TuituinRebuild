import React from "react";
import NotFound from "./components/NotFound";

//Tutor Import
const TutorDashHome = React.lazy(() =>
  import("./DashBoards/TutorPages/TutorHome"),
);
const TutorJobs = React.lazy(() => import("./DashBoards/TutorPages/TutorJobs"));

const TutorProfile = React.lazy(() =>
  import("./DashBoards/TutorPages/TutorProfile"),
);
const TutorProfileEdit = React.lazy(() =>
  import("./DashBoards/TutorPages/TutorEdit"),
);
const JobDetails = React.lazy(() => import("./pages/JobDetails"));

// Gurdian Import
const GuardianHome = React.lazy(() =>
  import("./DashBoards/GuardianPages/GuardianHome"),
);
const TutorRequest = React.lazy(() =>
  import("./DashBoards/GuardianPages/GuardianTutorRequest"),
);
const PostedJobs = React.lazy(() =>
  import("./DashBoards/GuardianPages/GuardianPostedJobs"),
);

// page
const LoginPage = React.lazy(() => import("./pages/Login"));
const HomePage = React.lazy(() => import("./pages/Home"));
const Registration = React.lazy(() => import("./pages/Register"));
const JobPage = React.lazy(() => import("./pages/Jobs"));

export const tutorRoutes = [
  { path: "/", name: "Home", exact: true },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: TutorDashHome,
    exact: true,
  },
  {
    path: "/dashboard/jobs",
    name: "JobPage",
    component: TutorJobs,
    // exact: true,
  },
  {
    path: "/dashboard/profile",
    name: "ProfilePage",
    component: TutorProfile,
    // exact: true,
  },
  {
    path: "/dashboard/edit",
    name: "EditProfile",
    component: TutorProfileEdit,
  },
  {
    path: "/dashboard/details",
    name: "JobDetails",
    component: JobDetails,
  },
];
export const guardianRoutes = [
  { path: "/", name: "Home", exact: true },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: GuardianHome,
    exact: true,
  },
  {
    path: "/dashboard/request",
    name: "RequestTutor",
    component: TutorRequest,
    exact: true,
  },
  {
    path: "/dashboard/posted",
    name: "PostedJobs",
    component: PostedJobs,
    exact: true,
  },
];

export const normalRoute = [
  { path: "/", name: "Home", component: HomePage, exact: true },
  {
    path: "/login",
    name: "Log_In",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/register",
    name: "Register_page",
    component: Registration,
    exact: true,
  },
  {
    path: "/jobs",
    name: "JobsPage",
    component: JobPage,
    exact: true,
  },
  {
    path: "/details",
    name: "JobDetails",
    component: JobDetails,
  },
  {
    name: "404",
    component: NotFound,
  },
];

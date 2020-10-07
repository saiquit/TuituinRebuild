import React, { Suspense, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { fetchUserAsync } from "./redux/userReducer/user_actions";
import { connect } from "react-redux";
import Spinner from "./components/Spinner/Spinner";

const MainLayout = React.lazy(() =>
  import("./container/userContainers/MainLayout"),
);
const NormalLayout = React.lazy(() =>
  import("./container/normalContainers/SecondLayout"),
);

function App(props) {
  const { fetchUserAsync, user } = props;
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    fetchUserAsync(token);
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) =>
              user ? (
                <MainLayout {...props} user={user} />
              ) : (
                <NormalLayout {...props} />
              )
            }
          />
        </Switch>
        {!token && <Redirect from={"/dashboard"} to={"/"} />}
      </Suspense>
    </>
  );
}

const mapStateToProps = ({ user: { user } }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserAsync: (token) => dispatch(fetchUserAsync(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

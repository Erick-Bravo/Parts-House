import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage"
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import EmptyDisplayPage from "./components/UserMainPage"
import Splash from "./components/Splash"
import LeftNavBar from "./components/UserMainPage/LeftNavBar"
import ApplianceList from "./components/RecordLists/ApplianceList"
import { fetchUserPartsHouses } from "./store/partshouse"


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  // const userId = sessionUser.id

  const userPartsHouses = useSelector(state => state.partsHouses);
  
  if(!sessionUser) return <Redirect to={"/"} />;

  // let userPartsHouses

  // if (sessionUser) {
  //   useEffect(() => {
  //     dispatch(fetchUserPartsHouses(userId));
  //   }, [dispatch]);

  //   userPartsHouses = useSelector(state => state.partsHouses);
  // }

  return (
    <>
      {sessionUser && <LeftNavBar userPartsHouses={userPartsHouses} />}
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/users/:userId">
            <EmptyDisplayPage />
          </Route>
          <Route exact path="/users/:userId/parts-house/:partsHouseId/appliances">
            <ApplianceList userPartsHouses={userPartsHouses} />
         
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

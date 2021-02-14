import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage"
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import EmptyDisplayPage from "./components/UserMainPage"
import Splash from "./components/Splash"
import LeftNavBar from "./components/UserMainPage/LeftNavBar"
import ApplianceList from "./components/RecordLists/ApplianceList"
import ElectronicList from "./components/RecordLists/ElectronicList"
import OtherList from "./components/RecordLists/OtherList"
import RecordPage from "./components/RecordPage"
import AddRecordPage from "./components/AddPages/AddRecordPage"

import "./index.css"



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="website">
        {sessionUser && <LeftNavBar />}
        {!sessionUser && <Redirect to="/" />}
      <div>
        {isLoaded &&
          (
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
              <Route exact path="/parts-house/:partsHouseId/appliances">
                <ApplianceList />
              </Route>
              <Route exact path="/parts-house/:partsHouseId/electronics">
                <ElectronicList />
              </Route>
              <Route exact path="/parts-house/:partsHouseId/other">
                <OtherList />
              </Route>
              <Route exact path="/records/:recordId(\\d+)">
                <RecordPage />
              </Route>
              <Route exact path="/parts-house/:partsHouseId/records/add-record-page">
                <AddRecordPage />
              </Route>
            </Switch>
          )}
      </div>
   </div>
  );
}

export default App;

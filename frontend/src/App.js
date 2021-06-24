import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import EmptyDisplayPage from "./components/UserMainPage"
import Splash from "./components/Splash"
import LeftNavBar from "./components/UserMainPage/LeftNavBar"
import ApplianceList from "./components/RecordLists/ApplianceList"
import ElectronicList from "./components/RecordLists/ElectronicList"
import OtherList from "./components/RecordLists/OtherList"
import RecordPage from "./components/RecordPage"
import AddRecordPage from "./components/AddPages/AddRecordPage"
import AddPartPage from "./components/AddPages/AddPartPage"
import UpdateRecordPage from "./components/UpdatePages/UpdateRecord"
import PartPage from "./components/PartPage"
import About from "./components/About"

import "./index.css"
import UpdatePartsHouse from "./components/UpdatePages/UpdatePartsHouse";



function App() {

  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div id="root">
      <div className="website">
        {sessionUser && <LeftNavBar />}
        {!sessionUser && <Redirect to="/" />}
        <div>
          {isLoaded &&
            (
              <Switch>
                <Route path="/signup">
                  <SignupFormPage />
                </Route>
                <Route path="/about">
                  <About />
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
                <Route exact path="/parts-house/:partsHouseId/records/add-record-page">
                  <AddRecordPage />
                </Route>
                <Route exact path="/parts-house/:partsHouseId/update-page">
                  <UpdatePartsHouse />
                </Route>
                <Route exact path="/records/:recordId">
                  <RecordPage />
                </Route>
                <Route exact path="/parts/:partId">
                  <PartPage />
                </Route>
                <Route exact path="/records/:recordId/update-record-page">
                  <UpdateRecordPage />
                </Route>
                <Route exact path="/records/:recordId/parts/add-part-page">
                  <AddPartPage />
                </Route>
                <Route path="*">
                    <h2>404 NOT FOUND</h2>
                </Route>
              </Switch>
            )}
        </div>
      </div>

    </div>
  );
}

export default App;

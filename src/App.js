import React from "react";

import Header from "./components/header/Header";
import ActivityManager from "./activities/activityManager/ActivityManager";
import HomeActivity from "./activities/homeActivity/HomeActivity";
import StudyActivity from "./activities/studyActivity/StudyActivity";
import HistoryActivity from "./activities/historyActivity/HistoryActivity";
import Sidenav from "./components/sidenav/Sidenav";
import PreferencesActivity from "./activities/preferencesActivity/PreferencesActivity";
import QuizActivity from "./activities/quizActivity/QuizActivity";
import ExamActivity from "./activities/examActivity/ExamActivity";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import HomeCard from "./components/homeCard/HomeCard";
import LoginActivity from "./activities/loginActivity/LoginActivity";
import Signin from "./activities/signinActivity/Signin";
import AccountActivity from "./activities/accountActivity/AccountActivity";
import { UserProvider } from "./context/userContext";
import SidenavActivity from "./activities/sidenavActivity/SidenavActivity";
import CreatorActivity from "./activities/creatorActivity/CreatorActivity";



export default function App() {

  function openSidenav() {
    window.history.back();
  }
  return (
    <div className="App">
      <Router>
        <Header
          title="MedStudio"
          handleClickMenu={openSidenav}
        />
        <SidenavActivity />
        <Switch>
          <Route exact path="/" component={HomeActivity} />

          <Route path="/estudia" component={StudyActivity} />

          <Route path="/examen" component={ExamActivity} />

          <Route path="/juega" component={QuizActivity} />

          <Route path="/historial" component={HistoryActivity} />

          <Route path="/preferencias" component={PreferencesActivity} />

          <UserProvider>
            <Route path="/creador" component={CreatorActivity} />

            <Route path="/account" component={AccountActivity} />

            <Route path="/login" component={LoginActivity} />

            <Route path="/signin" component={Signin} />
          </UserProvider>
        </Switch>
      </Router>
<div className="container">
<footer>
  <div className="container">
    <p>Diseño  <a href="mailto:medstudioparato2@gmail.com">Medstudio</a> & Co <span>2020 - 2021</span></p>
  </div>
</footer>
</div>
    </div>
  );
}



import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import BrandStory from "./BrandStory";
import Notice from "./Notice";
import FreeBoard from "./FreeBoard";
import TipBoard from "./TipBoard";
import Login from "./Login";
import Signup from "./Signup";
import FAQ from "./FAQ";
import QWrite from "./QWrite";
import QList from "./QList";
import Inquiry from "./Inquiry";
import FindId from "./Findid";
import FindPw from "./Findpw";
import FindingAWay from "./FindingAway";
import QRead from "./QRead";
import ChargeUsage from "./ChargeUsage";
import BoardWrite from "./BoardWrite";
import BoardChange from "./BoardChange";
import InfoChange from "./InfoChange";
import Activity from "./Activity";

function App() {
  const [a1, setA1] = useState();
  const [a2, setA2] = useState();
  useEffect(() => {
    if (navigator.geolocation) {
      // GPS를 지원하면

      navigator.geolocation.getCurrentPosition(
        function (position) {
          setA1(position.coords.latitude);
          setA2(position.coords.longitude);
          // alert(position.coords.latitude + " " + position.coords.longitude);
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    }
  });
  return (
    <div>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
        </div>
        {/* INTRODUCTION */}
        <Route exact path="/introduction">
          <BrandStory />
        </Route>
        {/* LOGIN/JOIN */}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        {/* MAP */}
        <Route exact path="/map">
          <Inquiry />
        </Route>
        <Route exact path="/navigate">
          <FindingAWay a1={a1} a2={a2} />
        </Route>
        {/* COMMUNITY */}
        <Route exact path="/notice">
          <Notice />
        </Route>
        <Route exact path="/tipboard">
          <TipBoard />
        </Route>
        <Route exact path="/freeboard">
          <FreeBoard />
        </Route>
        {/* CONTACT */}
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/questions">
          <QWrite />
        </Route>
        <Route exact path="/qlist">
          <QList />
        </Route>
        {/* FIND ID / PW */}
        <Route exact path="/findid">
          <FindId />
        </Route>
        <Route exact path="/findpw">
          <FindPw />
        </Route>
        {/* My Page */}

        <Route exact path="/activity">
          <Activity />
        </Route>

        <Route exact path="/chargeusage">
          <ChargeUsage />
        </Route>

        <Route exact path="/infochange">
          <InfoChange />
        </Route>

        {/* FOOTER */}

        <Footer />
      </div>
    </div>
  );
}

export default App;

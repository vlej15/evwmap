import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Link,
  Route,
  Switc,
  withRouter,
  useBeforeunload,
} from "react-router-dom";
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
import axios from "axios";
import News from "./News";
import CardRegistration from "./CardRegistration";
import Post from "./Post";
import Main from "./Main";
import AdminUser from "./AdminUser";
import Qpost from "./Qpost";
import AdminBollard from "./AdminBollard";
import AdminAgency from "./AdminAgency";
import Policy from "./Policy";

function App() {
  const [a1, setA1] = useState();
  const [a2, setA2] = useState();
  const [marker, setMarker] = useState([]);
  const [pagevalue, setPagevalue] = useState(0);
  const [category, setCategory] = useState(0);
  const [getCount, setCount] = useState(0);
  const [boardid, setBoardid] = useState(0);
  const [bno, setBno] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    // 마커찍을 충전소 데이터 받아오기
    var config = {
      method: "get",
      url: "http://3.36.197.174:8081/api/map/marker",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setMarker(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

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
  }, []);

  return (
    <div>
      <div className="page-container">
        <div className="content-wrap1">
          <Header getCount={getCount} setCount={setCount} />
        </div>
        <Route exact path="/">
          <Main getCount={getCount} setCount={setCount} />
        </Route>
        <Route exact path="/adminuser">
          <AdminUser />
        </Route>
        <Route exact path="/adminagency">
          <AdminAgency />
        </Route>
        <Route exact path="/adminBollard">
          <AdminBollard
            a1={a1}
            a2={a2}
            marker={marker}
            getCount={getCount}
            setCount={setCount}
          />
        </Route>
        {/* INTRODUCTION */}
        <Route exact path="/introduction">
          <BrandStory />
        </Route>
        {/* LOGIN/JOIN */}
        <Route exact path="/login">
          <Login getCount={getCount} setCount={setCount} />
        </Route>
        <Route exact path="/signup">
          <Signup getCount={getCount} setCount={setCount} />
        </Route>

        {/* MAP */}
        <Route exact path="/map">
          <Inquiry
            a1={a1}
            a2={a2}
            marker={marker}
            getCount={getCount}
            setCount={setCount}
          />
        </Route>
        <Route exact path="/navigate">
          <FindingAWay a1={a1} a2={a2} marker={marker} />
        </Route>

        {/* CONTACT */}

        <Route exact path="/faq">
          <FAQ getCount={getCount} setCount={setCount} />
        </Route>

        <Route exact path="/questions">
          <QWrite getCount={getCount} setCount={setCount} />
        </Route>

        <Route exact path="/qlist">
          <QList getCount={getCount} setCount={setCount} />
        </Route>

        <Route exact path="/qlist/:id">
          <Qpost />
        </Route>

        <Route exact path="/boardwrite">
          <BoardWrite bno={bno} setBno={setBno} />
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
          <Activity getCount={getCount} setCount={setCount} />
        </Route>

        <Route exact path="/chargeusage">
          <ChargeUsage getCount={getCount} setCount={setCount} />
        </Route>

        <Route exact path="/infochange">
          <InfoChange getCount={getCount} setCount={setCount} />
        </Route>

        <Route exact path="/news">
          <News getCount={getCount} setCount={setCount} />
        </Route>

        {/* CARD */}

        <Route exact path="/card">
          <CardRegistration getCount={getCount} setCount={setCount} />
        </Route>

        <Route exact path="/policy">
          <Policy getCount={getCount} setCount={setCount} />
        </Route>

        {/* COMMUNITY */}

        <Route exact path="/notice">
          <Notice
            setPagevalue={setPagevalue}
            setCategory={setCategory}
            getCount={getCount}
            setCount={setCount}
          />
        </Route>
        {console.log("카테고리" + category)}

        <Route exact path="/tipboard">
          <TipBoard
            setPagevalue={setPagevalue}
            setCategory={setCategory}
            getCount={getCount}
            setCount={setCount}
            setBno={setBno}
          />
        </Route>

        <Route exact path="/freeboard">
          <FreeBoard
            setPagevalue={setPagevalue}
            setCategory={setCategory}
            getCount={getCount}
            setCount={setCount}
            setBno={setBno}
          />
        </Route>

        <Route exact path="/notice/:id">
          <Post
            category={category}
            pagevalue={pagevalue}
            setBoardid={setBoardid}
          />
        </Route>

        <Route exact path="/boardchange">
          <BoardChange boardid={boardid} />
        </Route>
        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

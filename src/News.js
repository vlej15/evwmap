import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/News.scss";
import "./css/NewsBoard.scss";
import APagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import BannerNews from "./BannerNews";

function News() {
  return (
    <>
      {/* <div className="end"></div> */}
      <div data-aos="fade-down" data-aos-duration="1000">
        <BannerNews />
      </div>
      <div className="NlocationData">
        <div className="inner">
          <div className="btnHome">
            <i class="fas fa-home"></i>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <div className="navMenu">
                  COMMUNITY
                  <div className="navInnerMenu">
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
                <ul className="navList">
                  <Link to="/introduction">
                    <li>
                      <a>INTRODUCTION</a>
                    </li>
                  </Link>
                  <Link to="/map">
                    <li>
                      <a>MAP</a>
                    </li>
                  </Link>
                  <Link to="/notice">
                    <li>
                      <a>COMMUNITY</a>
                    </li>
                  </Link>
                  <Link to="/faq">
                    <li>
                      <a>CONTACT</a>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navTitle">
            <ul className="ulTitle">
              <li className="liTitleOpen">
                <a>
                  <div className="navMenu">
                    NEWS
                    <div className="navInnersMenu">
                      <i class="fas fa-caret-down"></i>
                    </div>
                  </div>
                </a>
                <ul className="navList">
                  <Link to="/notice">
                    <li>
                      <a>NOTICE</a>
                    </li>
                  </Link>
                  <Link to="/freeboard">
                    <li>
                      <a>FREE BOARD</a>
                    </li>
                  </Link>
                  <Link to="/tipboard">
                    <li>
                      <a>TIP BOARD</a>
                    </li>
                  </Link>
                  <Link to="/news">
                    <li>
                      <a>NEWS BOARD</a>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="contentsNews">
        <div className="start"></div>
        <div className="banner">
          <p className="banner-title">N E W S</p>
          <br></br>
          <p className="subtitle">
            전기차와 관련된 다양한 뉴스를 확인 하실 수 있습니다.
          </p>
        </div>
        <ul className="news-area">
          <li> {/* li start */}
            <a href="https://www.seoul.co.kr/news/newsView.php?id=20210416500021">
              <dl>
                <dt>"전기차 가격 낮출 값싸고 우수한 배터리 기술 나왔다"《서울신문》</dt>
                <dd>
                  <p className="date">2021-04-18</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://img.seoul.co.kr/img/upload/2021/04/16/SSI_20210416092722_O2.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://www.fnnews.com/news/202104180904392018">
              <dl>
                <dt>"아우디 순수 전기차가 온다"《파이낸셜뉴스》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021.04.18</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://image.fnnews.com/resource/media/image/2021/04/16/202104160942441500_l.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://www.ekn.kr/web/view.php?key=20210418010003526">
              <dl>
                <dt>"벤츠, 소형 SUV 전기차 ‘더 뉴 EQB‘ 공개"《에너지경제》</dt>
                <dd>
                  <p></p>
                  <p className="date"> 2021.04.18</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://www.ekn.kr/mnt/file/202104/2021041801000826200035261.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://moneys.mt.co.kr/news/mwView.php?no=2021041906208034691">
              <dl>
                <dt>"현대차ᆞ기아, 전기차 충전기로 ‘2021 iF디자인 어워드’ 수상"《머니S》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021.04.18</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://menu.mt.co.kr/moneyweek/thumb/2021/04/19/06/2021041906208034691_1.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202104160204">
              <dl>
                <dt>"폭스바겐 배터리 `폭탄선언`…K-배터리社, 전기차 직접 만들까?"《한국경제TV》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-17</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://img.wowtv.co.kr/wowtv_news/dnrs/20210416/B20210416164821263.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://newsis.com/view/?id=NISX20210416_0001409213&cid=13001">
              <dl>
                <dt>"르노삼성, 전기차 조에 등 시승·체험 기회 확대"《뉴시스통신사》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-16</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://image.newsis.com/2021/04/16/NISI20210416_0000728073_web.jpg?rnd=20210416105238"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://kbench.com/?q=node/220411" >
              <dl>
                <dt>"현대차 첫 전용 전기차 '아이오닉5' 본계약 시작…21일부터 보조금 접수"《케이벤치》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-19</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://images.kbench.com/kbench/article/2021_04/k220411p1n1.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://biz.chosun.com/site/data/html_dir/2021/04/16/2021041601903.html">
              <dl>
                <dt>"1회 충전에 1000㎞… 꿈의 주행거리 도전하는 전기차"《조선비즈》</dt>
                <dd>
                  <p></p>
                  <p className="date">2020-04-16</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://image.chosun.com/sitedata/image/202104/16/2021041601900_0.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://www.yna.co.kr/view/AKR20210416134500003">
              <dl>
                <dt>"현대차·기아 1분기 유럽 판매 22만대…전기차 68% 늘어"《연합뉴스》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-16</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://img6.yna.co.kr/photo/yna/YH/2020/09/15/PYH2020091503110001300_P4.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://zdnet.co.kr/view/?no=20210416144951">
              <dl>
                <dt>"한전, 제주에 2025년까지 7200kW급 전기차 충전인프라 구축"《ZDNET》</dt>
                <dd>
                  <p></p>
                  <p className="date">2020-04-16</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://image.zdnet.co.kr/2021/04/16/18a2d178c2b5992a69d6d1e42b01a103.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="http://news.kmib.co.kr/article/view.asp?arcid=0924187685">
              <dl>
                <dt>"SK, 전기차 초급속 충전기 선두주자 ‘시그넷EV’ 인수"《국민일보》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-16</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="http://image.kmib.co.kr/online_image/2021/0416/202104160405_11150924187685_1.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://moneys.mt.co.kr/news/mwView.php?no=2021041509238069320">
              <dl>
                <dt>"포스코, 광양서 연간 전기차 100만대분 리튬공장 설립한다"《머니S》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-15</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://menu.mt.co.kr/moneyweek/thumb/2021/04/15/06/2021041509238069320_1.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://www.mk.co.kr/news/business/view/2021/04/363276/">
              <dl>
                <dt>"KT&G, 업무용차 1200여대 전기차로 바꾼다"《매일경제》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-15</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_363276_16184652774611817.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="http://news.heraldcorp.com/view.php?ud=20210416000935">
              <dl>
                <dt>"전기차는 보험도 달라야…자체 보험 프로그램 내놓은 리비안"《헤럴드경제》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-18</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="http://res.heraldm.com/content/image/2021/04/16/20210416000792_0.jpg"></img>
              </div>
            </a>
          </li> {/* li end */}

          <li> {/* li start */}
            <a href="https://www.ajunews.com/view/20210418133900437">
              <dl>
                <dt>"'10분 충전에 197km 주행'...화웨이 첫 자율주행 전기차 베일 벗었다" 《아주경제》</dt>
                <dd>
                  <p></p>
                  <p className="date">2021-04-18</p>
                </dd>
              </dl>
              <div className="img-area">
                <img src="https://image.ajunews.com/content/image/2021/04/18/20210418150721118491.png"></img>
              </div>
            </a>
          </li> {/* li end */}
        </ul>
        {/* <div className="btn-area">
          {localStorage.getItem("id") != null ? (
            <button className="write-btn">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="pencil"
              ></FontAwesomeIcon>
            </button>
          ) : null}
        </div> */}
      </div>
    </>
  );
}

export default News;

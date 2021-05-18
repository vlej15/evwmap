import './css/AdminAgency.scss';
import React, { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";


function AdminAgency(props) {

    const [fileUrl, setFileUrl] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
    }

    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
    }

    return (
        <>
            <div className="contentsAgency">
                <div className="banner">
                    <p className="banner-title">기관 관리</p>
                </div>
                <div className="content-box">
                    <div className="left-box">
                        <div className="agency-list">
                            {/* 밑 div에 필요한 태그 추가해서 차량정보, 기관정보 배치하면 될 듯 */}
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                            <div className="vehicle">등록된 기관 목록</div>
                        </div>
                        <div className="list-search">
                            <form class="search-form">
                                <button type="submit" className="search-button">
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="search_btn"
                                    />
                                </button>
                                <input
                                    type="search"
                                    value=""
                                    placeholder="Search"
                                    class="search-input"
                                />
                            </form>
                        </div>
                    </div> {/* left-box end */}
                    <div className="right-box">
                        <div className="agency-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="agencyId">
                                    <p className="form-label">기관ID</p>
                                    <input ref={register({ required: true })} name="agencyId" type="text" className="form-input" size="30" required />
                                    <button className="agencyId-btn">중복검사</button>
                                </div>
                                <div className="agencyName">
                                    <p className="form-label">운영기관명</p>
                                    <input ref={register({ required: true })} name="agencyName" type="text" className="form-input" size="30" required />
                                </div>
                                <div className="agencyCharge">
                                    <p className="form-label">기본요금</p>
                                    <input ref={register({ required: true })} name="agencyCharege" type="text" className="form-input" size="30" required />
                                </div>
                                <div className="agencyFee">
                                    <p className="form-label">이용수수료</p>
                                    <input ref={register({ required: true })} name="agencyFee" type="text" className="form-input" size="30" required />
                                </div>
                                <div className="agencyDiscount">
                                    <p className="form-label">할인율</p>
                                    <input ref={register({ required: true })} name="agencyDiscount" type="text" className="form-input" size="30" required />
                                </div>
                                <div className="agencyCard">
                                    <p className="form-label">회원카드명</p>
                                    <input ref={register({ required: true })} name="agencyCard" type="text" className="form-input" size="30" />
                                </div>
                                <div className="agencyCardImg">
                                    <img src={fileUrl}></img>
                                </div>
                                <div className="agencyFile">
                                    <input type="file" accept="image/*" onChange={processImage} className="file"></input>
                                </div>

                                <div className="submit-btn">
                                    <input type="submit" className="submit" value="기관등록"></input>
                                </div>
                            </form>
                        </div> {/* agency-form end */}
                    </div> {/* right-box end */}
                </div>
            </div>
        </>
    )
}

export default AdminAgency;
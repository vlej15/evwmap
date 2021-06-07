import React, { useEffect } from "react";
import "./css/Policy.scss"
import { useForm } from "react-hook-form";


function Policy(props) {
    const { register, handleSubmit, errors, watch, getValues } = useForm();
    //header
    useEffect(() => {
        props.setCount(1);
    }, []);

    return (
        <div className="contentsPolicy">
            <h5>EV WMAP 개인정보 처리방침</h5>

        </div>
    )
}

export default Policy;
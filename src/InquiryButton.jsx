import { useState } from "react";

const InquiryButton = (props) => {
    const [heart, setHeart] = useState(props.heart);

    return <button
        onClick={() => {
            handleHeart(fac.id);
        }}
    >
        {heart ? (
            <FontAwesomeIcon
                icon={farHeart}
                className="heartBtn"
            />
        ) : (
                <FontAwesomeIcon
                    icon={fasHeart}
                />
            )}
    </button>;
}
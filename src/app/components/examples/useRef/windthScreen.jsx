import React, { useRef, useState } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const WidthScreen = () => {
    const inputRef = useRef("0");
    const [width, setWidth] = useState("");

    const handleClick = () => {
        setWidth(inputRef.current.clientWidth);
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = width + "px";
    };

    const handleChange = (e) => setWidth(e.target.value);
    // const handleChange = (e) => setWidth(inputRef.current.value); одно и тоже
    return (
        <CardWrapper>
            <SmallTitle className="card-title">Узнать ширину инпута</SmallTitle>
            <Divider />
            <label htmlFor="width" className="form-label">
                Ширина инпута :
            </label>
            <input
                ref={inputRef}
                type="width"
                className="form-control mb-4 "
                id="width"
                value={width}
                onChange={handleChange}
            />
            <button className="btn btn-primary me-4" onClick={handleClick}>
                Width input
            </button>
            <button className="btn btn-primary me-4" onClick={handleClickWidth}>
                Изменить ширину
            </button>
        </CardWrapper>
    );
};

export default WidthScreen;

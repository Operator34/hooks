import React, { useRef } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus(); // делаем фокус на инпут при нажатии кнопки
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control mb-4 "
                id="email"
            />
            <button className="btn btn-primary me-4" onClick={handleClick}>
                Фокус input
            </button>
            <button className="btn btn-secondary " onClick={handleClickWidth}>
                Изменить width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;

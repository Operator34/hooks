import React from "react";
import CardWrapper from "../../common/Card";
const withFunctions = (Component) => (props) => {
    const onLogin = () => {
        console.log("Нажата кнопка войти");
        localStorage.setItem("auth", "true");
    };
    const onLogout = () => {
        console.log("Нажата кнопка выйти");
        localStorage.removeItem("auth");
    };
    const isAuth = localStorage.getItem("auth");
    console.log(isAuth);
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={onLogin}
                onLogout={onLogout}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withFunctions;
